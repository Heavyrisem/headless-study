import React, { useEffect, useState } from 'react';
import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
  SandpackProps,
  SandpackProvider,
} from '@codesandbox/sandpack-react';
import axios from 'axios';

interface SandPackProps extends SandpackProps {
  type: string;
  filename: string;
  code: string;
}

const SandPack: React.FC<SandPackProps> = ({ code }) => {
  const [uiBundled, setUiBundled] = useState<string>();

  useEffect(() => {
    axios.get<string>('/api/uibundle').then((res) => setUiBundled(res.data));
  }, []);

  if (!uiBundled) return <div>Loading...</div>;

  return (
    <SandpackProvider
      template="react-ts"
      options={{
        externalResources: ['https://cdn.tailwindcss.com'],
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
    >
      <SandpackLayout>
        <SandpackCodeEditor />
        <SandpackPreview />
      </SandpackLayout>
    </SandpackProvider>
  );
};

export default SandPack;
