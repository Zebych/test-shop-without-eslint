import React, {FC, memo, ReactElement, useCallback} from 'react';
import {ArrDataType} from "../../../../03.1_server simulator/server";

type ProductsListPropsType = {
    count:number
    picture: string
    name: string
    price: number
    id: number
    subtractProduct: (id: number) => void
    DeleteProduct: (id: number) => void
    AddProduct: (id:number) => void
}
export const ProductsList: FC<ProductsListPropsType> = memo(
    ({
         picture,
         name,
         price,
         subtractProduct,
         DeleteProduct,
         id,
         AddProduct,
         count,
     }): ReactElement => {
        const onSubtractProductClick = useCallback(() => subtractProduct(id), [count])
        const onDeleteProductClick = useCallback(() => DeleteProduct(id), [count])
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
                        {count>1 ? <button onClick={onSubtractProductClick} >меньше</button>
                        : <button onClick={onDeleteProductClick} >убрать</button>}
                        <div>{count}</div>
                        <button onClick={onAddProductClick}>больше</button>
                    </div>
                </div>
            </div>
        )
    },
);
