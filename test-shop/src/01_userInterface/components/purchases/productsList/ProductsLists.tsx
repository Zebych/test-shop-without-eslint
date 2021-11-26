import React, {FC, memo, ReactElement, useCallback} from 'react';

type ProductsListPropsType = {
    picture: string
    name: string
    price: number
    id: number
    toPurchase: number
    subtractProduct: (id: number) => void
    DeleteProduct: (id: number) => void
    AddProduct: (id: number) => void
}
export const ProductsList: FC<ProductsListPropsType> = memo(
    ({
         picture,
         name,
         price,
         id,
         toPurchase,
         subtractProduct,
         DeleteProduct,
         AddProduct,
     }): ReactElement => {
        const onSubtractProductClick = useCallback(() => {
            subtractProduct(id)
        }, [])
        const onDeleteProductClick = useCallback(() => {
            DeleteProduct(id)
        }, [])
        const onAddProductClick = useCallback(() => {
            AddProduct(id)
        }, [])

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
                        {toPurchase > 1 ?
                            <button onClick={onSubtractProductClick}>меньше</button>
                            : <button onClick={onDeleteProductClick}>убрать</button>}
                        <div>{toPurchase}</div>
                        <button onClick={onAddProductClick}>больше</button>
                    </div>
                </div>
            </div>
        )
    },
);
