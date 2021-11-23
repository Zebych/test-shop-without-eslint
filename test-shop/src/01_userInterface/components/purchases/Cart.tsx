import React, {memo, ReactElement, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteCart, totalPrice} from '../../../02_bisnessLogik/cart-reducer';
import {AppRootStateType} from "../../../02_bisnessLogik/store";
import {ArrDataType} from "../../../03.1_server simulator/server";
import {ProductsList} from "./productsList/ProductsLists";

export const Cart = memo(
    (): ReactElement => {
        const productInCart = useSelector<AppRootStateType, Array<ArrDataType>>
        (state => state.cart.addedCart)
        const amountOfPurchases = useSelector<AppRootStateType, number>(state =>
            state.cart.sumPrice
        )

        const dispatch = useDispatch()

        useEffect(() => {
            dispatch(totalPrice())
        }, [productInCart])

        const deleteProduct = (id: number) => {
            dispatch(deleteCart({id}))
        }

        return (
            <div>
                <div><p>список покупок</p>
                    {productInCart.map(p => {
                        return <ProductsList name={p.name}
                                             price={p.price}
                                             photo={p.picture}
                                             id={p.id}
                                             deleteProduct={deleteProduct}
                        />

                    })
                    }
                </div>
                <div>{amountOfPurchases}</div>
            </div>
        )
    },
);
