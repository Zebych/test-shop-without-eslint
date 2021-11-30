import React, {FC, memo, ReactElement} from 'react';
import {ProductsListContainer} from "./productsList/ProductsListContainer";
import {PaymentForm} from "./paymentData/PaymentForm";
import styleContainer from "../../../05_common/styles/Container.module.css";

type CartPropsType={
    mediaStyle?:object
}

export const Cart:FC<CartPropsType> = memo(
    ({mediaStyle}): ReactElement => {

        return (
            <div className={styleContainer.container}>
                <div style={{display:'flex'}}>
                    <div style={mediaStyle}>
                        <ProductsListContainer/>
                        <PaymentForm mediaStyle={mediaStyle}/>
                    </div>
                </div>
            </div>
        )
    },
);
