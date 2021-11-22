import React, { FC, memo, ReactElement } from 'react';

type ProductPropsType = {
  photo: string;
};
export const Product: FC<ProductPropsType> = memo(
  ({ photo }): ReactElement => (
    <div>
      <img src={photo} alt="" style={{ width: '300px', height: '300px' }} />
      <p>описание товара</p>
      <h3>ценник</h3>
    </div>
  ),
);
