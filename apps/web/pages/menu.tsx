import React, { useState } from 'react';
import { Menu, Switch } from 'ui';

const MenuPage = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div>
      <Switch
        enabled={opened}
        onChange={setOpened}
        className={`${
          opened ? 'bg-zinc-800' : 'bg-zinc-600'
        } w-20 h-10 relative inline-flex border-4 border-transparent shrink-0 rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-opacity-75`}
      >
        <span
          className={`${
            opened ? 'translate-x-10' : 'translate-x-0'
          } inline-block transform h-8 w-8 rounded-full bg-white transition-transform duration-200 ease-in-out`}
        />
      </Switch>
      <Menu
        opened={opened}
        onOpen={setOpened}
        onClickItem={(item) => console.log('clicked item::', item)}
      >
        <Menu.Button className="px-4 py-2 rounded-lg  text-white bg-zinc-800 hover:bg-zinc-600 transition-colors duration-150">
          open
        </Menu.Button>
        <Menu.Items className="absolute mt-2 rounded-lg bg-zinc-700 text-white">
          <div className="p-2">
            <Menu.Item
              id="Menu 1"
              value="Menu 1"
              className="block m-0 px-2 py-1 rounded hover:bg-zinc-600 focus-visible:bg-zinc-600 focus:outline-none transition-colors duration-150"
            >
              Panel 1
            </Menu.Item>
            <Menu.Item
              id="Menu 2"
              value="Menu 2"
              className="block m-0 px-2 py-1 rounded hover:bg-zinc-600 focus-visible:bg-zinc-600 focus:outline-none transition-colors duration-150"
            >
              Panel 2
            </Menu.Item>
            <Menu.Item
              id="Menu 3"
              value="Menu 3"
              className="block m-0 px-2 py-1 rounded hover:bg-zinc-600 focus-visible:bg-zinc-600 focus:outline-none transition-colors duration-150"
            >
              Panel 3
            </Menu.Item>
          </div>
        </Menu.Items>
      </Menu>
      {/* <button className="m-0 px-2 py-1 rounded hover:bg-zinc-600 focus-visible:bg-zinc-600 active:bg-zinc-600 focus:outline-none transition-colors duration-150">
        123
      </button> */}
    </div>
  );
};

export default MenuPage;
