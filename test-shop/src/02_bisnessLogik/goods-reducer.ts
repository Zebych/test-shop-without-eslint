import {Dispatch} from "redux"
import {createSlice} from "@reduxjs/toolkit";
import {serverAPI} from "../03.1_server simulator/server";


const initState = {
    result: '',
    data: [
        // {name: '', picture: '', id: 0, price: 0},
    ]
}
const slice = createSlice({
    name: 'goods',
    initialState: initState,
    reducers: {
        goodsAllAC(state, action: any) {
            state.data = action.data
        }
    }
})
export const goodsReducer = slice.reducer
const {goodsAllAC} = slice.actions
//Thunk
export const goodsAllTC = (num:number) => (dispatch: Dispatch) => {
serverAPI.goodsAll(num).then((res)=>{
    goodsAllAC(res)
})
}
