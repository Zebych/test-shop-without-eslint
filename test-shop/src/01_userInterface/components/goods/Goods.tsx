import React, {memo, ReactElement} from 'react';
import styleContainer from '../../../05_common/styles/Container.module.css';
import styles from './Goods.module.css';
import {Product} from './product';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../02_bisnessLogik/store";
import {ProductObjType} from "../../../03.1_server simulator/server";

export const Goods = memo(
    (): ReactElement => {
        const goods = useSelector<AppRootStateType, Array<ProductObjType>>
        (state => state.goods.data)

        return (
            <div className={styles.goodsBlock}>
                <div className={`${styleContainer.container} ${styles.goodsContainer}`}>
                    {goods.map((g) => {
                        return <Product photo={g.photo}
                                        name={g.name}
                                        id={g.id}
                                        price={g.price}
                                        toPurchase={g.toPurchase}
                        />
                    })}
                </div>
            </div>
        )
    },
);
