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
            state.addedCart = [...state.addedCart,action.payload.addProduct]
        }
    }
})
export const cartReducer = slice.reducer

//Actions
const {setCart} = slice.actions
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