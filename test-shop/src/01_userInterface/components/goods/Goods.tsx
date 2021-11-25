import React, {memo, ReactElement, useEffect} from 'react';

import styleContainer from '../../../05_common/styles/Container.module.css';

import styles from './Goods.module.css';
import {Product} from './product';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../02_bisnessLogik/store";
import {goodsAllTC} from "../../../02_bisnessLogik/goods-reducer";
import {ArrDataType} from "../../../03.1_server simulator/server";

export const Goods = memo(
    (): ReactElement => {
        const goods = useSelector<AppRootStateType, Array<ArrDataType>>(state => state.goods.data)
        const dispatch = useDispatch()
        useEffect(() => {
            dispatch(goodsAllTC(1))
        }, [goods])
        return (
            <div className={styles.goodsBlock}>
                <div className={`${styleContainer.container} ${styles.goodsContainer}`}>
                    {goods.map((g) => {
                        return <Product photo={g.photo}
                                        name={g.name}
                                        id={g.id}
                                        price={g.price}
                        />
                    })}
                </div>
            </div>
        )
    },
);
