import React, { PropsWithChildren, useCallback } from 'react';

import useMenuContext from '../hooks/useMenuContext';
import { MenuItemType } from '../types';

export interface ItemProps
  extends PropsWithChildren,
    MenuItemType,
    Omit<React.HTMLAttributes<HTMLButtonElement>, 'id'> {
  disabled?: boolean;
}

const Item: React.FC<ItemProps> = ({
  id,
  value,
  disabled = false,
  children: label,
  onClick,
  ...rest
}) => {
  const { onClickItem } = useMenuContext();

  const handleClickItem = useCallback<React.MouseEventHandler<HTMLButtonElement>>(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (!disabled) onClickItem({ id, value });
    },
    [disabled, id, onClickItem, value],
  );

  return (
    <button onClick={handleClickItem} {...rest}>
      {label}
    </button>
  );
};

export default Item;
