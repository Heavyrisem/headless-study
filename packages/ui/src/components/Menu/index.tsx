import Button from './components/Button';
import Item from './components/Item';
import Items from './components/Items';
import MenuComponent from './components/Menu';

export * from './components/Menu';
// export * from './components/Items';
// export * from './components/Item';
// export * from './components/Button';

export const Menu = Object.assign(MenuComponent, { Items, Item, Button });
