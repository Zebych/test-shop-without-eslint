import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Dispatch} from "redux";
import {ArrDataType, serverAPI} from "../03.1_server simulator/server";

const initCartState: InitCartType = {
    sumPrice: 0,
    addedCart: [],
}
const slice = createSlice({
    name: 'cart',
    initialState: initCartState,
    reducers: {
        setCart(state, action: PayloadAction<{ addProduct: ArrDataType }>) {
            state.addedCart = [...state.addedCart, action.payload.addProduct]
        },
        totalPrice(state) {
            state.sumPrice = state.addedCart.reduce((acc, el) => {
                return acc + el.price
            }, 0)
        },
        subtractCart(state, action: PayloadAction<{
            id: number, currentData: ArrDataType | undefined
        }>) {
            state.addedCart.map((a) => {
                if (a.id === action.payload.id && action.payload.currentData) {
                    if (a.price !== action.payload.currentData.price) {
                        a.price = a.price - action.payload.currentData.price
                    }
                }
                // return state.addedCart.filter((f) => f.id !== action.payload.id)
            })
            // state.addedCart = state.addedCart.filter((f) => f.id !== action.payload.id)
        },
        addProductInCart(state, action: PayloadAction<{
            id: number,
            currentData: ArrDataType | undefined
        }>) {
            state.addedCart.map((p) => {
                const actionP = action.payload
                const currenData = actionP.currentData
                if (p.id === actionP.id && currenData) {
                    p.price += currenData.price
                }
            })
        },
    }
})
export const cartReducer = slice.reducer

//Actions
export const {setCart, totalPrice, subtractCart, addProductInCart} = slice.actions
//Thunk
export const addInCartTC = (id: number) => (dispatch: Dispatch) => {
    serverAPI.getCart(id).then((res: any) => {
        dispatch(setCart({addProduct: res}))
    })
}

//Types
type InitCartType = {
    sumPrice: number,
    addedCart: Array<ArrDataType>
}