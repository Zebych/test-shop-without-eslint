import React, { memo, ReactElement } from 'react';

import { Route, Routes } from 'react-router-dom';
import { Goods } from '../components/goods/Goods';
import { Cart } from '../components/purchases/Cart';


export const SetRoute = memo(
  (): ReactElement => (
      <Routes>
        <Route path="/" element={<Goods />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
  ),
);
