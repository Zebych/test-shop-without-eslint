import React, {memo, ReactElement, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../02_bisnessLogik/store";
import {ProductsListContainer} from "./productsList/ProductsListContainer";
import {setCart} from "../../../02_bisnessLogik/cart-reducer";

export const Cart = memo(
    (): ReactElement => {
        const amountOfPurchases = useSelector<AppRootStateType, number>
        (state => state.cart.sumPrice)

        return (
            <div>
                <ProductsListContainer/>
                <div>{amountOfPurchases}</div>
            </div>
        )
    },
);
