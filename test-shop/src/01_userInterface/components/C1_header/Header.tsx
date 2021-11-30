import React, {memo, ReactElement} from 'react';
import cartIcon from '../../../04_assets/img/outline_shopping_cart_white_18dp.png'
import {Link} from 'react-router-dom';
import {Button} from "@material-ui/core";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../02_bisnessLogik/store";


export const Header = memo(
    (): ReactElement => {
        const totalPrice = useSelector<AppRootStateType, number>(state => state.cart.sumPrice)

        return (
            <div >
                <Link to="/" style={{textDecoration:'none'}}>
                    <Button color={"inherit"}>
                        <p style={{color: '#fff'}}>
                            Goods
                        </p>
                    </Button>
                </Link>
                <Link to="/cart" style={{textDecoration:'none'}}>
                    <Button color={"inherit"}>
                        <img src={cartIcon} alt="cart"/>
                        {totalPrice > 0 && <p style={{color: '#fff'}}>{totalPrice}</p>}
                    </Button>
                </Link>
            </div>
        )
    },
);
