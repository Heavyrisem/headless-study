import React, { useCallback, useRef } from 'react';
import MonacoEditor, { BeforeMount, Monaco, OnMount } from '@monaco-editor/react';
import { FileTabs, useActiveCode, useSandpack } from '@codesandbox/sandpack-react';

interface CodeEditorProps extends React.ComponentProps<typeof MonacoEditor> {}

const CodeEditor: React.FC<CodeEditorProps> = (props) => {
  const { code, updateCode } = useActiveCode();
  const { sandpack } = useSandpack();
  const monacoRef = useRef<Monaco>();

  const handleEditorBeforeMount = useCallback<BeforeMount>((monaco) => {
    // monaco.languages.typescript.javascriptDefaults.addExtraLib('react', 'react.d.ts');
    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      //   target: monaco.languages.typescript.ScriptTarget.Latest,
      //   allowNonTsExtensions: true,
      //   moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
      //   module: monaco.languages.typescript.ModuleKind.CommonJS,
      //   noEmit: true,
      //   esModuleInterop: true,
      // //   jsx: monaco.languages.typescript.JsxEmit.React,
      //   reactNamespace: 'React',
      //   allowJs: true,
      //   typeRoots: ['node_modules/@types'],
    });
  }, []);

  const handleEditorMount = useCallback<OnMount>((editor, monaco) => {
    monacoRef.current = monaco;
  }, []);

  const libUri = 'ts:filename/react.d.ts';

  return (
    <>
      <FileTabs />
      <MonacoEditor
        height="30vh"
        theme="vs-dark"
        defaultLanguage="typescript"
        options={{}}
        beforeMount={handleEditorBeforeMount}
        onMount={handleEditorMount}
        key={sandpack.activeFile}
        defaultValue={code}
        onChange={(value) => updateCode(value || '')}
        {...props}
      />
    </>
  );
};

export default CodeEditor;
