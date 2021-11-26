import React, {memo, ReactElement, useEffect} from 'react';

import {Link} from 'react-router-dom';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../02_bisnessLogik/store";

export const Header = memo(
    (): ReactElement => {
        const sumPrice = useSelector<AppRootStateType, number>(state => state.cart.sumPrice)
        useEffect(()=>{},[sumPrice])
        return (
            <div>
                <Link to="/">Goods</Link>
                <Link to="/cart">Cart {sumPrice>0 && sumPrice}</Link>
            </div>
        )
    },
);
