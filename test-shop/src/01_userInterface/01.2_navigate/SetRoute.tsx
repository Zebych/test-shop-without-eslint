import React, { memo, ReactElement } from 'react';

import { Route, Routes } from 'react-router-dom';
import { Goods } from '../components/goods/Goods';
import {CartContainer} from "../components/purchases/CartContainer";


export const SetRoute = memo(
  (): ReactElement => (
      <Routes>
        <Route path="/" element={<Goods />} />
        <Route path="/cart" element={<CartContainer />} />
      </Routes>
  ),
);
