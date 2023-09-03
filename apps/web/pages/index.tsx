import { useState } from 'react';
import { Switch } from 'ui';

export default function Page() {
  const [enabled, setEnabled] = useState(false);
  const [enabled2, setEnabled2] = useState(true);

  return (
    <div className="m-5">
      <div>
        <Switch
          enabled={enabled}
          onChange={(v) => {
            setEnabled(v);
            setEnabled2(!v);
          }}
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
      </div>
      <div>
        <Switch
          enabled={enabled2}
          onChange={(v) => {
            setEnabled(!v);
            setEnabled2(v);
          }}
          className={`${
            enabled2 ? 'bg-zinc-800' : 'bg-zinc-600'
          } w-20 h-10 relative inline-flex border-4 border-transparent shrink-0 rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-opacity-75`}
        >
          <span
            className={`${
              enabled2 ? 'translate-x-10' : 'translate-x-0'
            } inline-block transform h-8 w-8 rounded-full bg-white transition-transform duration-200 ease-in-out`}
          />
        </Switch>
      </div>
    </div>
  );
}
