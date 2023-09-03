import React, { useCallback } from 'react';

import usePopoverContext from '../hooks/usePopoverContext';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ onClick, ...rest }) => {
  const { opened, setOpen } = usePopoverContext();

  const handleClickButton = useCallback<React.MouseEventHandler<HTMLButtonElement>>(
    (e) => {
      e.preventDefault();
      e.stopPropagation();

      setOpen(!opened);
      onClick?.(e);
    },
    [onClick, opened, setOpen],
  );

  return <button onClick={handleClickButton} {...rest} />;
};

export default Button;
