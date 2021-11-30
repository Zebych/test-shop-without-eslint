import React, {memo, ReactElement, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../../02_bisnessLogik/store";
import {ProductObjType} from '../../../../03.1_server simulator/server';
import {
    addProductInCart,
    deleteCart,
    subtractCart,
    totalPrice
} from "../../../../02_bisnessLogik/cart-reducer";
import {ProductsList} from "./ProductsLists";


export const ProductsListContainer = memo(
    (): ReactElement => {
        const productInCart = useSelector<AppRootStateType, Array<ProductObjType>>
        (state => state.cart.addedCart)
        const amountOfPurchases = useSelector<AppRootStateType, number>
        (state => state.cart.sumPrice)

        const dispatch = useDispatch()

        useEffect(() => {
            dispatch(totalPrice())
        }, [productInCart])

        const subtractProduct = (id: number) => {
            dispatch(subtractCart({id}))
        }
        const DeleteProduct = (id: number) => {
            dispatch(deleteCart({id}))
        }
        const AddProduct = (id: number) => {
            dispatch(addProductInCart({id}))
        }

        return (
            <div>
                <div>
                    <p>shopping list:</p>
                    <div style={{padding:'20px'}}>
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
                    <div>
                        {amountOfPurchases > 0 &&
                        <span>amount to pay: {amountOfPurchases}</span>}
                    </div>
                </div>

            </div>
        )
    },
);
