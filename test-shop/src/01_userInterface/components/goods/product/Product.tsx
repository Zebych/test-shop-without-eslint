import React, {FC, memo, ReactElement, useEffect} from 'react';
import SuperButton from "../../../../05_common/Button/SuperButton";
import {goodsAllTC} from "../../../../02_bisnessLogik/goods-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../../02_bisnessLogik/store";
import {addInCartTC, addProductInCart} from "../../../../02_bisnessLogik/cart-reducer";
import {ArrDataType} from "../../../../03.1_server simulator/server";

export type ProductPropsType = {
    id: number
    name: string
    photo: string
    price: number
    toPurchase:number
};
export const Product: FC<ProductPropsType> = memo(
    ({
         photo,
         id,
         name,
         price,
         toPurchase
     }): ReactElement => {
        const addedCartArr = useSelector<AppRootStateType, Array<ArrDataType>>
        (state => state.cart.addedCart)
        const dispatch = useDispatch()

        const addInCart = () => {
            if (addedCartArr.some(a => a.id === id)) {
                return dispatch(addProductInCart({id, currentData: {name, photo, id, price,toPurchase}}))
            }
            dispatch(addInCartTC(id))
        }

        return (
            <div>
                <img src={photo} alt="photo" style={{width: '300px', height: '300px'}}/>
                <p>{name}</p>
                <h3>{price}</h3>
                <SuperButton onClick={addInCart}>Купить</SuperButton>
            </div>
        )
    },
);
