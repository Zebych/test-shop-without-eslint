import React, {FC, memo, ReactElement, useEffect} from 'react';
import SuperButton from "../../../../05_common/Button/SuperButton";
import {goodsAllTC} from "../../../../02_bisnessLogik/goods-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../../02_bisnessLogik/store";

type ProductPropsType = {
    id: number
    name: string
    photo: string
    price: number
};
export const Product: FC<ProductPropsType> = memo(
    ({
         photo,
         id,
         name,
         price,
     }): ReactElement => {

        const dispatch = useDispatch()
        const addInCart = () => {
            dispatch(goodsAllTC(1))
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
