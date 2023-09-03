import React from 'react';

import { Popover } from '../../Popover';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ onClick, ...rest }) => {
  return <Popover.Button {...rest} />;
};

export default Button;
