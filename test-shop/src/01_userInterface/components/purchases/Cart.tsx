import React, {memo, ReactElement, useEffect} from 'react';
import {ProductsListContainer} from "./productsList/ProductsListContainer";
import {PaymentForm} from "./paymentData/paymentForm/PaymentForm";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../02_bisnessLogik/store";
import {setBuy} from "../../../02_bisnessLogik/cart-reducer";
import {useNavigate} from "react-router-dom";

export const Cart = memo(
    (): ReactElement => {
        const conditionBuy = useSelector<AppRootStateType, boolean>(state => state.cart.conditionBuy)
        const dispatch = useDispatch()
        const navigate = useNavigate()

        useEffect(() => {
            setTimeout(() => {
                dispatch(setBuy({result: false}))
            }, 3000)
        }, [conditionBuy])

        if (conditionBuy) {
            navigate('/', {replace: true})
        }
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'space-around'
            }}>
                <ProductsListContainer/>
                <PaymentForm/>
            </div>
        )
    },
);
