import React, { FC, memo, ReactElement } from 'react';
import SuperButton from "../../../../05_common/Button/SuperButton";
import {goodsAllTC} from "../../../../02_bisnessLogik/goods-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../../02_bisnessLogik/store";

type ProductPropsType = {
  photo: string;
};
export const Product: FC<ProductPropsType> = memo(
  ({ photo }): ReactElement => {
      const goodsData=useSelector<AppRootStateType>(state=>state.goods.data)
      const dispatch=useDispatch()
      const addInCart=()=>{
          dispatch(goodsAllTC(1))
      }
      console.log(goodsData)
      return(
          <div>
              <img src={photo} alt="" style={{ width: '300px', height: '300px' }} />
              <p>описание товара</p>
              <h3>ценник</h3>
              <SuperButton onClick={addInCart}>Купить</SuperButton>
          </div>
      )
  },
);
