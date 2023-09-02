import React, { PropsWithChildren, useCallback, useState } from 'react';

interface SwitchProps extends PropsWithChildren {
  enabled?: boolean;
  defaultValue?: boolean;
  onChange?: (enabled: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({
  enabled: controlledEnabled,
  defaultValue = false,
  onChange,
  ...rest
}) => {
  const [enabled, setEnabled] = useState<boolean>(defaultValue);

  const handleClickSwitch = useCallback(() => {
    if (controlledEnabled === undefined) {
      setEnabled(!enabled);
      onChange?.(!enabled);
    } else {
      onChange?.(!enabled);
    }
  }, [controlledEnabled, enabled, onChange]);

  return <button onClick={handleClickSwitch} {...rest} />;
};

export default Switch;
