import React from 'react';

import { Popover } from '../../Popover';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = (props) => {
  return <Popover.Button {...props} />;
};

export default Button;
