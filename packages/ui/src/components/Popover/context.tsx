import React, { PropsWithChildren, useCallback, useEffect, useMemo, useState } from 'react';

export interface PopoverContextState {
  opened: boolean;
  setOpen: (open: boolean) => void;
}

const initalValue: PopoverContextState = {
  opened: false,
  setOpen: () => {},
};

export const PopoverContext = React.createContext<PopoverContextState>(initalValue);

export interface PopoverContextProviderProps extends PropsWithChildren {
  defaultOpened?: boolean;
  opened?: boolean;
  onOpen?: (open: boolean) => void;
}

export const PopoverContextProvider: React.FC<PopoverContextProviderProps> = ({
  opened: controlledOpened,
  defaultOpened = false,
  children,
  onOpen,
}) => {
  const [opened, setOpened] = useState(controlledOpened ?? defaultOpened);

  const handleOpen = useCallback(
    (open: boolean) => {
      const isControlled = controlledOpened !== undefined;

      if (isControlled) {
        onOpen?.(open);
      } else {
        setOpened(open);
        onOpen?.(open);
      }
    },
    [controlledOpened, onOpen],
  );

  useEffect(() => {
    if (controlledOpened !== undefined) setOpened(controlledOpened);
  }, [controlledOpened]);

  const value = useMemo(() => ({ opened, setOpen: handleOpen }), [handleOpen, opened]);

  return <PopoverContext.Provider value={value}>{children}</PopoverContext.Provider>;
};
