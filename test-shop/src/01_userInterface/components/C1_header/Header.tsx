import React, { memo, ReactElement } from 'react';

import { Link } from 'react-router-dom';

export const Header = memo(
  (): ReactElement => (
    <div>
      <Link to="/">Goods</Link>
      <Link to="/cart">Cart</Link>
    </div>
  ),
);
