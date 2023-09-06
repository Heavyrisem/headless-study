import React, { useEffect, useState } from 'react';
import { Menu, Select, SelectOptionType, Switch } from 'ui';

const SelectPage = () => {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState<SelectOptionType>();

  useEffect(() => {
    console.log(selected);
  }, [selected]);

  return (
    <div>
      {/* <Switch
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
      </Switch> */}
      <Select opened={opened} onOpen={setOpened} onSelect={setSelected}>
        <Select.Button className="px-4 py-2 rounded-lg  text-white bg-zinc-800 hover:bg-zinc-600 transition-colors duration-150">
          open
        </Select.Button>
        <Select.Options className="absolute mt-2 rounded-lg bg-zinc-700 text-white">
          <div className="p-2">
            <Select.Option
              id="Select 1"
              value="Select 1"
              className={`${
                selected?.id === 'Select 1' ? 'bg-zinc-600' : ''
              } block m-0 my-1 px-2 py-1 rounded hover:bg-zinc-600 focus-visible:bg-zinc-600 focus:outline-none transition-colors duration-150`}
            >
              Panel 1
            </Select.Option>
            <Select.Option
              id="Select 2"
              value="Select 2"
              className={`${
                selected?.id === 'Select 2' ? 'bg-zinc-600' : ''
              } block m-0 my-1 px-2 py-1 rounded hover:bg-zinc-600 focus-visible:bg-zinc-600 focus:outline-none transition-colors duration-150`}
            >
              Panel 2
            </Select.Option>
            <Select.Option
              id="Select 3"
              value="Select 3"
              className={`${
                selected?.id === 'Select 3' ? 'bg-zinc-600' : ''
              } block m-0 my-1 px-2 py-1 rounded hover:bg-zinc-600 focus-visible:bg-zinc-600 focus:outline-none transition-colors duration-150`}
            >
              Panel 3
            </Select.Option>
          </div>
        </Select.Options>
      </Select>
      {/* <button className="m-0 px-2 py-1 rounded hover:bg-zinc-600 focus-visible:bg-zinc-600 active:bg-zinc-600 focus:outline-none transition-colors duration-150">
        123
      </button> */}
    </div>
  );
};

export default SelectPage;
