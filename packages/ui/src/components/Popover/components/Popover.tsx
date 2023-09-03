import React from 'react';

import { PopoverContextProvider, PopoverContextProviderProps } from '../context';

export interface PopoverProps
  extends React.HTMLAttributes<HTMLDivElement>,
    PopoverContextProviderProps {
  onOpen?: (opened: boolean) => void;
}

const Popover: React.FC<PopoverProps> = ({ opened, defaultOpened, onOpen, ...rest }) => {
  return (
    <PopoverContextProvider opened={opened} defaultOpened={defaultOpened} onOpen={onOpen}>
      <div {...rest} />
    </PopoverContextProvider>
  );
};

export default Popover;
