import { useContext } from 'react';

import { SelectContext } from '../context';

const useSelectContext = () => {
  const context = useContext(SelectContext);

  if (context === null) {
    throw new Error('Cannot get SelectContext. Check component usage');
  }

  return context;
};

export default useSelectContext;
