import React, { PropsWithChildren, useCallback } from 'react';

import useMenuContext from '../hooks/useMenuContext';

export interface ItemProps extends PropsWithChildren, React.HTMLAttributes<HTMLButtonElement> {
  id: string;
  value: string;
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
      if (!disabled) onClickItem({ id, value, label });
    },
    [disabled, id, label, onClickItem, value],
  );

  return (
    <button onClick={handleClickItem} {...rest}>
      {label}
    </button>
  );
};

export default Item;
