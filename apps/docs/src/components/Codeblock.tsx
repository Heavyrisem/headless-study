import React, { useCallback } from 'react';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import * as ui from 'ui';
import CodeEditor from './CodeEditor';

interface CodeBlockProps extends React.ComponentProps<typeof LiveProvider> {
  editable?: boolean;
  preview?: boolean;
}

const scope = { ...ui };

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  editable = true,
  preview = true,
  ...rest
}) => {
  return (
    <>
      <LiveProvider code={code} scope={scope} {...rest}>
        {preview && (
          <div className="m-4">
            <span className="block p-1.5 px-3 rounded-t-md bg-zinc-400 text-xs text-white">
              preview
            </span>
            <div className="p-4 rounded-b-md rounded-tl-none bg-zinc-200">
              <LivePreview />
            </div>
          </div>
        )}
        <div className="m-4">
          <span className="block p-1.5 px-3 rounded-t-md bg-indigo-900 text-xs text-white">
            code
          </span>
          <div className="rounded-b-md">
            <LiveEditor disabled={!editable} />
            {/* <CodeEditor height="30vh" options={{ language: 'typescript' }} /> */}
          </div>
        </div>
        <LiveError />
      </LiveProvider>
    </>
  );
};

export default CodeBlock;
