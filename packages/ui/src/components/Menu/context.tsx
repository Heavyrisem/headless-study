import React, { PropsWithChildren, useCallback, useMemo } from 'react';

import { MenuItemType } from './types';

export interface MenuContextState {
  onClickItem: (item: MenuItemType) => void;
}

const initalValue: MenuContextState = {
  onClickItem: () => {},
};

export const MenuContext = React.createContext<MenuContextState>(initalValue);

export interface MenuContextProviderProps extends PropsWithChildren {
  onClickItem?: MenuContextState['onClickItem'];
}

export const MenuContextProvider: React.FC<MenuContextProviderProps> = ({
  children,
  onClickItem,
}) => {
  const handleClickItem = useCallback(
    (item: MenuItemType) => {
      onClickItem?.(item);
    },
    [onClickItem],
  );

  const values = useMemo(() => ({ onClickItem: handleClickItem }), [handleClickItem]);

  return <MenuContext.Provider value={values}>{children}</MenuContext.Provider>;
};
