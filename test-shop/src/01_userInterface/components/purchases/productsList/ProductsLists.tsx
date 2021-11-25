import React, {FC, memo, ReactElement, useCallback, useState} from 'react';

type ProductsListPropsType = {
    picture: string
    name: string
    price: number
    id: number
    subtractProduct: (id: number) => void
    DeleteProduct: (id: number) => void
    AddProduct: (id: number) => void
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
     }): ReactElement => {
        let [count, setCount] = useState(1)

        const onSubtractProductClick = useCallback(() => {
            setCount(count - 1)
            subtractProduct(id)
        }, [count])
        const onDeleteProductClick = useCallback(() => {
            setCount(count - 1)
            DeleteProduct(id)
        }, [count])
        const onAddProductClick = useCallback(() => {
            setCount(count + 1)
            AddProduct(id)
        }, [count])

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
                        {count > 1 ?
                            <button onClick={onSubtractProductClick}>меньше</button>
                            : <button onClick={onDeleteProductClick}>убрать</button>}
                        <div>{count}</div>
                        <button onClick={onAddProductClick}>больше</button>
                    </div>
                </div>
            </div>
        )
    },
);
