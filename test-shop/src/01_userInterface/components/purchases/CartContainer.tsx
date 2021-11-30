import React, {memo, ReactElement, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../02_bisnessLogik/store";
import {setBuy} from "../../../02_bisnessLogik/cart-reducer";
import {useNavigate} from "react-router-dom";
import {Cart} from "./Cart";

export const CartContainer = memo(
    (): ReactElement => {
        const conditionBuy = useSelector<AppRootStateType, boolean>(state => state.cart.conditionBuy)
        const dispatch = useDispatch()
        const navigate = useNavigate()

        //media hook
        const [matches, setMatches] = useState(window.matchMedia("(min-width: 550px)").matches)
        useEffect(() => {
            const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
            window.matchMedia("(min-width: 550px)").addEventListener('change', handler);
        }, []);
        let mediaStyle = matches ? {display: 'flex'} : {display: 'block'}

        //conditionBuy
        useEffect(() => {
            setTimeout(() => {
                dispatch(setBuy({result: false}))
            }, 3000)
        }, [conditionBuy])

        //navigate
        if (conditionBuy) {
            navigate('/', {replace: true})
        }
        return (
            <div >
                <Cart mediaStyle={mediaStyle}/>
            </div>

        )
    },
);
