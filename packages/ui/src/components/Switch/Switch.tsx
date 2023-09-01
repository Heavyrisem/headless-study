import { PropsWithChildren } from 'react';

interface SwitchProps extends PropsWithChildren {
  enabled?: boolean;
  toggleEnable?: (enabled: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({ enabled, toggleEnable, ...rest }) => {
  return <button></button>;
};
