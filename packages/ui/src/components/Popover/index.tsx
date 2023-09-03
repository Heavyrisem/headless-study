import Button from './components/Button';
import Panel from './components/Panel';
import PopoverComponent from './components/Popover';

// export * from './components/Button';
// export * from './components/Panel';
export * from './components/Popover';

export const Popover = Object.assign(PopoverComponent, { Button, Panel });
