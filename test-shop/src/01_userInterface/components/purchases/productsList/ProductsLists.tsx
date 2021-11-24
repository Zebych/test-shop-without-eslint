import React, {FC, memo, ReactElement, useCallback} from 'react';
import {ArrDataType} from "../../../../03.1_server simulator/server";

type ProductsListPropsType = {
    count:number
    picture: string
    name: string
    price: number
    id: number
    deleteProduct: (id: number) => void
    AddProduct: (id:number) => void
}
export const ProductsList: FC<ProductsListPropsType> = memo(
    ({
         picture,
         name,
         price,
         deleteProduct,
         id,
         AddProduct,
         count,
     }): ReactElement => {
        const onDeleteProductClick = useCallback(() => deleteProduct(id), [])
        const onAddProductClick = useCallback(() => AddProduct(id), [count])
        return (
            <div>
                <div>
                    <img src={picture} alt="photo"
                         style={{width: '150px', height: '150px'}}/>
                    <div>
                        <p>{name}</p>
                    </div>
                    <div>
                        <p>{price}</p>
                    </div>
                    <div>
                        <button onClick={onDeleteProductClick}>убрать</button>
                        <div>{count}</div>
                        <button onClick={onAddProductClick}>добавить</button>
                    </div>
                </div>
            </div>
        )
    },
);
