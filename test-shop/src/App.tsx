import React, { memo } from 'react';
import { SetRoute } from './01_userInterface/01.2_navigate/SetRoute';
import { Header } from './01_userInterface/components/C1_header/Header';

import './App.css';


const App = memo(() => (
  <div>
    <Header />
    <SetRoute />
  </div>
));
export default App;
