import React, {memo, ReactElement, useEffect} from 'react';
import {ProductsListContainer} from "./productsList/ProductsListContainer";
import {PaymentForm} from "./paymentData/paymentForm/PaymentForm";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../02_bisnessLogik/store";
import {setBuy} from "../../../02_bisnessLogik/cart-reducer";

export const Cart = memo(
    (): ReactElement => {
        const conditionBuy = useSelector<AppRootStateType, boolean>(state => state.cart.conditionBuy)
        const dispatch=useDispatch()
        useEffect(()=>{
            setTimeout(()=>{
                dispatch(setBuy({result:false}))
            },3000)
        },[conditionBuy])
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'space-around'
            }}>
                <ProductsListContainer/>
                {conditionBuy && alert('покупка совершена')}
                <PaymentForm/>
            </div>
        )
    },
);
