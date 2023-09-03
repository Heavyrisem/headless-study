import React, { useRef } from 'react';

import useOutsideClick from '../../../hooks/useOutsideClick';
import usePopoverContext from '../hooks/usePopoverContext';

export interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {}

const Panel: React.FC<PanelProps> = ({ children, ...rest }) => {
  const { opened, setOpen } = usePopoverContext();
  const panelRef = useRef(null);

  useOutsideClick(panelRef, () => {
    setOpen(false);
  });

  return opened ? (
    <div ref={panelRef} {...rest}>
      {children}
    </div>
  ) : null;
};

export default Panel;
