import React from 'react';
import Head from 'next/head';
import ProjectOptions from '../editor/components/ProjectOptions/ProjectOptions';
import CodeEditor from '../editor/components/CodeEditor/CodeEditor';
import { CodeEditorContextProvider } from '../../hooks/CodeEditorContext';
import EditorContainer from './editor-styles';

export default function EditorPage() {
  return (
    <>
      <Head>
        <title>AluraDev - Editor de código</title>
      </Head>
      <CodeEditorContextProvider>
        <EditorContainer>
          <CodeEditor />
          <ProjectOptions />
        </EditorContainer>
      </CodeEditorContextProvider>
    </>
  );
}
