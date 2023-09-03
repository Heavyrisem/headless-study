import React, { useState } from 'react';
import { Popover, Switch } from 'ui';

const PopoverPage = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div>
      <Switch
        enabled={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? 'bg-zinc-800' : 'bg-zinc-600'
        } w-20 h-10 relative inline-flex border-4 border-transparent shrink-0 rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-opacity-75`}
      >
        <span
          className={`${
            enabled ? 'translate-x-10' : 'translate-x-0'
          } inline-block transform h-8 w-8 rounded-full bg-white transition-transform duration-200 ease-in-out`}
        />
      </Switch>
      <Popover opened={enabled} onOpen={setEnabled} className="relative">
        <Popover.Button className="px-4 py-2 rounded-lg  text-white bg-zinc-800 hover:bg-zinc-600 transition-colors duration-150">
          open
        </Popover.Button>
        <Popover.Panel className="absolute min-w-[10rem] mt-2 border-2 border-zinc-200 border-opacity-75 rounded-lg">
          <div className="p-2">
            <a
              href="/popover"
              className="block px-2 py-1 rounded hover:bg-zinc-200 transition-colors duration-150"
            >
              Panel 1
            </a>
            <a
              href="/popover"
              className="block px-2 py-1 rounded hover:bg-zinc-200 transition-colors duration-150"
            >
              Panel 2
            </a>
            <a
              href="/popover"
              className="block px-2 py-1 rounded hover:bg-zinc-200 transition-colors duration-150"
            >
              Panel 3
            </a>
          </div>
        </Popover.Panel>
      </Popover>
    </div>
  );
};

export default PopoverPage;
