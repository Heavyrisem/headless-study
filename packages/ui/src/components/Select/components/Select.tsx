import React from 'react';

import { Menu, MenuProps } from '../../Menu';
import { SelectContextProvider, SelectContextProviderProps } from '../context';
import useSelectContext from '../hooks/useSelectContext';

export type SelectProps = Omit<MenuProps, 'onSelect' | 'onClickItem'> & SelectContextProviderProps;

const SelectContainer: React.FC<any> = ({ children, ...rest }) => {
  const { handleClickOption } = useSelectContext();

  return (
    <Menu onClickItem={handleClickOption} {...rest}>
      {children}
    </Menu>
  );
};

const Select: React.FC<SelectProps> = ({
  multi,
  selected,
  defaultSelected,
  onSelect,
  children,
  ...rest
}) => {
  const selectProviderProps = {
    multi,
    selected,
    defaultSelected,
    onSelect,
  } as SelectContextProviderProps;

  return (
    <SelectContextProvider {...selectProviderProps}>
      <SelectContainer {...rest}>{children}</SelectContainer>
    </SelectContextProvider>
  );
};

export default Select;
