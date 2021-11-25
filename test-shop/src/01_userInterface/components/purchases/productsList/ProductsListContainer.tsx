import React, {memo, ReactElement, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../../02_bisnessLogik/store";
import {ArrDataType} from '../../../../03.1_server simulator/server';
import {
    addProductInCart,
    deleteCart,
    subtractCart,
    totalPrice
} from "../../../../02_bisnessLogik/cart-reducer";
import {ProductsList} from "./ProductsLists";


export const ProductsListContainer = memo(
    (): ReactElement => {
        const productInCart = useSelector<AppRootStateType, Array<ArrDataType>>
        (state => state.cart.addedCart)
        const initGoodsData = useSelector<AppRootStateType, Array<ArrDataType>>
        (state => state.goods.data)

        const dispatch = useDispatch()

        useEffect(() => {
            dispatch(totalPrice())
        }, [productInCart])

        const currenObj = (id: number) => {
            return initGoodsData.find(p => p.id === id)//получение текущего объекта из прайса
        }

        const subtractProduct = (id: number) => {
            const currentData = currenObj(id)
            dispatch(subtractCart({id, currentData}))

        }
        const DeleteProduct = (id: number) => {
            dispatch(deleteCart({id}))
        }
        const AddProduct = (id: number) => {
            const currentData = currenObj(id)
            dispatch(addProductInCart({id, currentData}))
        }

        return (
            <div>
                <p>список покупок</p>
                {productInCart.map(p => {
                    return <ProductsList name={p.name}
                                         price={p.price}
                                         picture={p.photo}
                                         id={p.id}
                                         toPurchase={p.toPurchase}
                                         subtractProduct={subtractProduct}
                                         AddProduct={AddProduct}
                                         DeleteProduct={DeleteProduct}
                    />

                })
                }
            </div>
        )
    },
);
