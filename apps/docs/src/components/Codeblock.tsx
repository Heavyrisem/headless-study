import React, { useEffect, useState } from 'react';
import { Sandpack, SandpackProps } from '@codesandbox/sandpack-react';
import axios from 'axios';

interface CodeblockProps extends SandpackProps {
  type: string;
  filename: string;
  code: string;
}

const Codeblock: React.FC<CodeblockProps> = ({ code }) => {
  const [uiBundled, setUiBundled] = useState<string>();

  useEffect(() => {
    axios.get<string>('/api/uibundle').then((res) => setUiBundled(res.data));
  }, []);

  if (!uiBundled) return <div>Loading...</div>;

  return (
    <Sandpack
      template="react-ts"
      options={{
        externalResources: ['https://cdn.tailwindcss.com'],
        showConsole: true,
        showConsoleButton: true,
      }}
      files={{
        '/App.tsx': code,
        '/node_modules/ui/package.json': {
          hidden: true,
          code: JSON.stringify({
            name: 'ui',
            main: './index.js',
          }),
        },
        '/node_modules/ui/index.js': {
          hidden: true,
          code: uiBundled,
        },
      }}
      customSetup={{
        dependencies: {
          tailwindcss: 'latest',
        },
      }}
    />
  );
};

export default Codeblock;
