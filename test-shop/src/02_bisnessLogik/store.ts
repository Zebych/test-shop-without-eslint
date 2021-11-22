import {combineReducers} from "redux";
import {goodsReducer} from "./goods-reducer";
import {configureStore} from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk'
import {cartReducer} from "./cart-reducer";

const rootReducer = combineReducers({
    goods: goodsReducer,
    cart: cartReducer,
})
export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;