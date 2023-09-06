import React from 'react';

import { Menu } from '../../Menu';

export interface OptionsProps extends React.HTMLAttributes<HTMLDivElement> {}

const Options: React.FC<OptionsProps> = (props) => {
  return <Menu.Items {...props} />;
};

export default Options;
