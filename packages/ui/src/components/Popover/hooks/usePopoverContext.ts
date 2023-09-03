import { useContext } from 'react';

import { PopoverContext } from '../context';

const usePopoverContext = () => {
  const context = useContext(PopoverContext);

  if (context === null) {
    throw new Error('Cannot get PopoverContext. Check component usage');
  }

  return context;
};

export default usePopoverContext;
