import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Dispatch} from "redux";
import {ProductObjType, serverAPI} from "../03.1_server simulator/server";
import {saveAddedCartToLocalStorage} from "../06_utils/localStorage";
import {FormikErrorType} from "../01_userInterface/components/purchases/paymentData/PaymentForm";

const initCartState: InitCartType = {
    sumPrice: 0,
    addedCart: [],
    conditionBuy: false,
}
const slice = createSlice({
    name: 'cart',
    initialState: initCartState,
    reducers: {
        setCart(state, action: PayloadAction<{ addProduct: ProductObjType }>) {
            const apAddProduct = action.payload.addProduct
            state.addedCart = [...state.addedCart, apAddProduct]
            saveAddedCartToLocalStorage(state.addedCart)
        },
        deleteCart(state, action: PayloadAction<{ id: number }>) {
            state.addedCart = state.addedCart.filter((f) => f.id !== action.payload.id)
            saveAddedCartToLocalStorage(state.addedCart)
        },
        totalPrice(state) {
            state.sumPrice = state.addedCart.reduce((acc, el) => {
                return acc + el.price
            }, 0)
        },
        subtractCart(state, action: PayloadAction<{
            id: number
        }>) {
            state.addedCart.map((a) => {
                if (a.id === action.payload.id) {
                    a.price -= a.price / a.toPurchase
                    a.toPurchase -= 1
                }
            })
            saveAddedCartToLocalStorage(state.addedCart)
        },
        addProductInCart(state, action: PayloadAction<{
            id: number,
        }>) {
            state.addedCart.map((p) => {
                const actionP = action.payload
                if (p.id === actionP.id) {
                    p.price += p.price / p.toPurchase
                    p.toPurchase += 1
                }
            })
            saveAddedCartToLocalStorage(state.addedCart)
        },
        setBuy(state, action: PayloadAction<{ result: boolean }>) {
            state.conditionBuy = action.payload.result
        },
        cartClear(state) {
            state.addedCart = []
            saveAddedCartToLocalStorage(state.addedCart)
        }
    }
})
export const cartReducer = slice.reducer

//Actions
export const {
    setCart,
    totalPrice,
    subtractCart,
    addProductInCart,
    deleteCart,
    setBuy,
    cartClear,
} = slice.actions

//Thunk
export const addInCartTC = (id: number) => (dispatch: Dispatch) => {
        serverAPI.getCart(id).then((res: any) => {
            dispatch(setCart({addProduct: res}))
            dispatch(totalPrice())
        })
}
export const buyTC = (addedCart: Array<ProductObjType>, values: FormikErrorType) => (dispatch: Dispatch) => {
    serverAPI.postPurchases(addedCart, values).then((res: any) => {
        dispatch(setBuy(res))
        dispatch(cartClear())
        dispatch(totalPrice())
    })
}

//Types
export type InitCartType = {
    sumPrice: number
    addedCart: Array<ProductObjType>
    conditionBuy: boolean
}