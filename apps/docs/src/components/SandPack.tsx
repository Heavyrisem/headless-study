import React, { useEffect, useState } from 'react';
import {
  SandpackCodeEditor,
  SandpackPreview,
  SandpackProps,
  SandpackProvider,
} from '@codesandbox/sandpack-react';
import { nightOwl } from '@codesandbox/sandpack-themes';
import axios from 'axios';

interface SandPackProps extends SandpackProps {
  type: string;
  filename: string;
  code: string;
}

const SandPack: React.FC<SandPackProps> = ({ code }) => {
  const [uiBundled, setUiBundled] = useState<string>();
  const [dependencyFiles, setDeependencyFiles] = useState<Record<string, { code: string }>>({});
  const [loading, setLoading] = useState(true);

  const dependencies = [
    '/node_modules/ui/package.json',
    '/node_modules/ui/dist/index.js',
    '/node_modules/ui/dist/index.d.ts',
  ];

  useEffect(() => {
    setLoading(true);

    Promise.all(
      dependencies.map((path) =>
        axios.get<string>(`/api${path}`).then((res) => ({ code: res.data, name: path })),
      ),
    ).then((data) => {
      const dependency = data.reduce((prev, v) => ({ ...prev, [v.name]: v.code }), {});
      console.log(dependency);
      setDeependencyFiles(dependency);
      setLoading(false);
    });

    // axios.get<string>('/api/source').then((res) => setUiBundled(res.data));
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <SandpackProvider
      theme={nightOwl}
      template="react-ts"
      options={{
        externalResources: ['https://cdn.tailwindcss.com'],
      }}
      files={{
        '/App.tsx': code,
        // '/node_modules/ui/package.json': {
        //   // hidden: true,
        //   code: JSON.stringify({
        //     name: 'ui',
        //     main: './dist/index.js',
        //     type
        //   }),
        // },
        // '/node_modules/ui/index.js': {
        //   // hidden: true,
        //   code: uiBundled,
        // },
        // '/test.js': {
        //   // hidden: true,
        //   code: uiBundled,
        // },
        ...dependencyFiles,
      }}
      customSetup={{
        dependencies: {
          tailwindcss: 'latest',
        },
      }}
    >
      <div className="m-4">
        <span className="block p-1.5 px-3 rounded-t-md bg-indigo-900 text-xs text-white">code</span>
        <div className="rounded-b-md">
          <SandpackCodeEditor />
        </div>
      </div>
      <div className="m-4">
        <span className="block p-1.5 px-3 rounded-t-md bg-zinc-300 text-xs text-white">
          preview
        </span>
        <div className="rounded-b-md">
          <SandpackPreview />
        </div>
      </div>
    </SandpackProvider>
  );
};

export default SandPack;
