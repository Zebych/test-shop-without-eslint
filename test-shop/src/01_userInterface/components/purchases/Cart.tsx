import React, {memo, ReactElement, useEffect} from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../02_bisnessLogik/store";
import {ArrDataType} from "../../../03.1_server simulator/server";

export const Cart = memo(
    (): ReactElement => {
        const productInCart = useSelector<AppRootStateType, Array<ArrDataType>>
        (state => state.cart.addedCart)
        useEffect(()=>{
            console.log(productInCart)
        },[productInCart])

        return (
            <div>
                <p>тележка</p>
            </div>
        )
    },
);
