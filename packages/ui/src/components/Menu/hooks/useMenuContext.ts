import { useContext } from 'react';

import { MenuContext } from '../context';

const useMenuContext = () => {
  const context = useContext(MenuContext);

  if (context === null) {
    throw new Error('Cannot get MenuContext. Check component usage');
  }

  return context;
};

export default useMenuContext;
