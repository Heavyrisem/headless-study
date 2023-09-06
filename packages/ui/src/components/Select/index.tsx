import Button from './components/Button';
import Option from './components/Option';
import Options from './components/Options';
import SelectComponent from './components/Select';

export * from './types';
export * from './components/Select';

export const Select = Object.assign(SelectComponent, { Options, Option, Button });
