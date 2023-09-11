import React, { useCallback } from 'react';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import * as ui from 'ui';

interface CodeBlockProps extends React.ComponentProps<typeof LiveProvider> {}

const scope = { ...ui };

const CodeBlock: React.FC<CodeBlockProps> = ({ code, ...rest }) => {
  return (
    <>
      <LiveProvider code={code} scope={scope} {...rest}>
        <div className="m-4">
          <span className="block p-1.5 px-3 rounded-t-md bg-zinc-400 text-xs text-white">
            preview
          </span>
          <div className="p-4 rounded-b-md rounded-tl-none bg-zinc-200">
            <LivePreview />
          </div>
        </div>
        <div className="m-4">
          <span className="block p-1.5 px-3 rounded-t-md bg-indigo-900 text-xs text-white">
            code
          </span>
          <div className="rounded-b-md overflow-hidden">
            <LiveEditor />
          </div>
        </div>
        <LiveError />
      </LiveProvider>
    </>
  );
};

export default CodeBlock;
