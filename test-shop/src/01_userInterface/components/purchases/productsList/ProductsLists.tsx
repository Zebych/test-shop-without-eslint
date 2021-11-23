import React, {FC, memo, ReactElement, useCallback} from 'react';

type ProductsListPropsType = {
    photo: string
    name: string
    price: number
    id: number
    deleteProduct: (id: number) => void

}
export const ProductsList: FC<ProductsListPropsType> = memo(
    ({
         photo,
         name,
         price,
         deleteProduct,
         id
     }): ReactElement => {
        const onDeleteProductClick = useCallback(() => deleteProduct(id), [])
        return (
            <div>
                <div>
                    <img src={photo} alt="photo"
                         style={{width: '150px', height: '150px'}}/>
                    <div>
                        <p>{name}</p>
                    </div>
                    <div>
                        <p>{price}</p>
                    </div>
                    <div>
                        <button onClick={onDeleteProductClick}>убрать</button>
                    </div>
                </div>
            </div>
        )
    },
);
