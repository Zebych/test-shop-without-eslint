import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Dispatch} from "redux";
import {ProductObjType, serverAPI} from "../03.1_server simulator/server";
import {saveState} from "../06_utils/localStorage";

const initCartState: InitCartType = {
    sumPrice: 0,
    addedCart: [],
}
const slice = createSlice({
    name: 'cart',
    initialState: initCartState,
    reducers: {
        setCart(state, action: PayloadAction<{ addProduct: ProductObjType }>) {
            const apAddProduct = action.payload.addProduct
            state.addedCart = [...state.addedCart, apAddProduct]
            saveState(state.addedCart)
        },
        deleteCart(state, action: PayloadAction<{ id: number }>) {
            state.addedCart = state.addedCart.filter((f) => f.id !== action.payload.id)
            saveState(state.addedCart)
        },
        totalPrice(state) {
            state.sumPrice = state.addedCart.reduce((acc, el) => {
                return acc + el.price
            }, 0)
        },
        subtractCart(state, action: PayloadAction<{
            id: number, currentData: ProductObjType | undefined
        }>) {
            state.addedCart.map((a) => {
                const apCurrentData = action.payload.currentData
                if (a.id === action.payload.id && apCurrentData && a.toPurchase) {
                    if (a.price !== apCurrentData.price) {
                        a.price = a.price - apCurrentData.price
                        a.toPurchase = a.toPurchase - 1
                    }
                }
            })
            saveState(state.addedCart)
        },
        addProductInCart(state, action: PayloadAction<{
            id: number,
            currentData: ProductObjType | undefined
        }>) {
            state.addedCart.map((p) => {
                const actionP = action.payload
                const currenData = actionP.currentData
                if (p.id === actionP.id && currenData) {
                    p.price += currenData.price
                    p.toPurchase = p.toPurchase + 1
                }
            })
            saveState(state.addedCart)
        },
    }
})
export const cartReducer = slice.reducer

//Actions
export const {
    setCart,
    totalPrice,
    subtractCart,
    addProductInCart,
    deleteCart
} = slice.actions
//Thunk
export const addInCartTC = (id: number) => (dispatch: Dispatch) => {
    serverAPI.getCart(id).then((res: any) => {
        dispatch(setCart({addProduct: res}))
    })
}

//Types
export type InitCartType = {
    sumPrice: number,
    addedCart: Array<ProductObjType>
}