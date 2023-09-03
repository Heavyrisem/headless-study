import React, { useCallback, useState } from 'react';

interface SwitchProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'onChange' | 'defaultValue'> {
  enabled?: boolean;
  defaultValue?: boolean;
  onChange?: (enabled: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({
  enabled: controlledEnabled,
  defaultValue = false,
  onChange,
  onClick,
  ...rest
}) => {
  const [enabled, setEnabled] = useState<boolean>(defaultValue);

  const handleClickSwitch = useCallback<React.MouseEventHandler<HTMLButtonElement>>(
    (e) => {
      const isControlled = controlledEnabled !== undefined;

      if (isControlled) {
        onChange?.(!controlledEnabled);
      } else {
        setEnabled(!enabled);
        onChange?.(!enabled);
      }

      onClick?.(e);
    },
    [controlledEnabled, enabled, onChange, onClick],
  );

  return <button onClick={handleClickSwitch} {...rest} />;
};

export default Switch;
