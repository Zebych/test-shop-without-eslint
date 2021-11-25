import React, {memo, ReactElement, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    addProductInCart, deleteCart,
    subtractCart,
    totalPrice
} from '../../../02_bisnessLogik/cart-reducer';
import {AppRootStateType} from "../../../02_bisnessLogik/store";
import {ArrDataType} from "../../../03.1_server simulator/server";
import {ProductsList} from "./productsList/ProductsLists";

export const Cart = memo(
    (): ReactElement => {
        const productInCart = useSelector<AppRootStateType, Array<ArrDataType>>
        (state => state.cart.addedCart)
        const initGoodsData = useSelector<AppRootStateType, Array<ArrDataType>>
        (state => state.goods.data)
        const amountOfPurchases = useSelector<AppRootStateType, number>
        (state => state.cart.sumPrice)


        const dispatch = useDispatch()

        useEffect(() => {
            dispatch(totalPrice())
        }, [productInCart])

        const currenObj=(id:number)=>{
            return initGoodsData.find(p => p.id === id)//получение текущего объекта из прайса
        }
        const subtractProduct = (id: number) => {
            const currentData = currenObj(id)
            dispatch(subtractCart({id,currentData}))

        }
        const DeleteProduct = (id: number) => {
            dispatch(deleteCart({id}))
        }
        const AddProduct = (id:number) => {
            const currentData = currenObj(id)
            dispatch(addProductInCart({id, currentData}))
        }

        return (
            <div>
                <div><p>список покупок</p>
                    {productInCart.map(p => {
                        return <ProductsList name={p.name}
                                             price={p.price}
                                             picture={p.photo}
                                             id={p.id}
                                             subtractProduct={subtractProduct}
                                             AddProduct={AddProduct}
                                             DeleteProduct={DeleteProduct}
                        />

                    })
                    }
                </div>
                <div>{amountOfPurchases}</div>
            </div>
        )
    },
);
