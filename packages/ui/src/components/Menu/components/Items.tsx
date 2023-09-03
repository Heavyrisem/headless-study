import React from 'react';

import { Popover } from '../../Popover';

export interface ItemsPros extends React.HTMLAttributes<HTMLDivElement> {}

const Items: React.FC<ItemsPros> = (props) => {
  return <Popover.Panel {...props} />;
};

export default Items;
