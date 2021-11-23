import React, {FC, memo, ReactElement, useEffect} from 'react';
import {ProductPropsType} from "../../goods/product/Product";


export const ProductsList: FC<ProductPropsType> = memo(
    ({
         photo,
         name,
         price,
     }): ReactElement => {

        return (
            <div>
                <div>
                    <img src={photo} alt="photo"
                         style={{width: '150px', height: '150px'}}/>
                    <div><p>{name}</p></div>
                    <div><p>{price}</p></div>
                </div>
            </div>
        )
    },
);
