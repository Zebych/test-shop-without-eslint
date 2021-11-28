import {Dispatch} from "redux"
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ProductObjType, ResDatatype, serverAPI} from "../03.1_server simulator/server";
import { totalPrice } from "./cart-reducer";


const initGoodsState: ResDatatype = {
    result: '',
    data: [
        {name: '', photo: '', id: 0, price: 0, toPurchase: 0},
    ],
}
const slice = createSlice({
    name: 'goods',
    initialState: initGoodsState,
    reducers: {
        goodsAll(state, action: PayloadAction<{ data: Array<ProductObjType> }>) {
            state.data = action.payload.data
        }
    }
})
export const goodsReducer = slice.reducer

//Actions
const {goodsAll} = slice.actions

//Thunk
export const goodsAllTC = (num: number) => (dispatch: Dispatch) => {
    serverAPI.getGoodsAll(num).then((res: any) => {
        dispatch(goodsAll({data: res.data}))
        dispatch(totalPrice())
    })
}
