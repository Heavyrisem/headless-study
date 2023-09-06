import React, { PropsWithChildren, useEffect } from 'react';

import { Menu } from '../../Menu';
import useSelectContext from '../hooks/useSelectContext';

export interface OptionProps extends PropsWithChildren, React.HTMLAttributes<HTMLButtonElement> {
  id: string;
  value: string;
  disabled?: boolean;
}

const Option: React.FC<OptionProps> = ({ id, value, ...rest }) => {
  const { addOption, removeOption } = useSelectContext();

  useEffect(() => {
    addOption({ id, value });

    return () => {
      removeOption({ id, value });
    };
  }, [addOption, id, removeOption, value]);

  return <Menu.Item id={id} value={value} {...rest} />;
};

export default Option;
