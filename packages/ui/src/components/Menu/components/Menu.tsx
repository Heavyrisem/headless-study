import React from 'react';

import { Popover, PopoverProps } from '../../Popover';
import { MenuContextProvider, MenuContextProviderProps } from '../context';

export interface MenuProps extends PopoverProps, MenuContextProviderProps {}

const Menu: React.FC<MenuProps> = ({ onClickItem, ...rest }) => {
  return (
    <MenuContextProvider onClickItem={onClickItem}>
      <Popover {...rest} />
    </MenuContextProvider>
  );
};

export default Menu;
