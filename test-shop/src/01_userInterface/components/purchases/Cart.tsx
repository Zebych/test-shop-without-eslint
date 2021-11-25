import React, {memo, ReactElement} from 'react';
import { useSelector} from "react-redux";
import {AppRootStateType} from "../../../02_bisnessLogik/store";
import {ProductsListContainer} from "./productsList/ProductsListContainer";

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
