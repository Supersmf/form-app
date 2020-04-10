import React from 'react';
import MainBlock from './MainBlock';
import { mockBuyersSelect, mockUserSelect } from '../../common/mock';

const MainBlockContainer = () => {
  return <MainBlock buyers={mockBuyersSelect} users={mockUserSelect} />;
};

export default MainBlockContainer;
