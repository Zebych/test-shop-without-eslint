import {Dispatch} from "redux"
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ArrDataType, ResDatatype, serverAPI} from "../03.1_server simulator/server";


const initState:ResDatatype = {
    result: '',
    data: [
        {name: '', photo: '', id: 0, price: 0},
    ],
}
const slice = createSlice({
    name: 'goods',
    initialState: initState,
    reducers: {
        goodsAll(state, action: PayloadAction<{data:Array<ArrDataType>}>) {
            state.data = action.payload.data
        }
    }
})
export const goodsReducer = slice.reducer

//Actions
const {goodsAll} = slice.actions

//Thunk
export const goodsAllTC = (num:number) => (dispatch: Dispatch) => {
serverAPI.getGoodsAll(num).then((res:any)=>{
        dispatch(goodsAll({data:res.data}))
})
}
