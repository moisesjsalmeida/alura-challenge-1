import React from 'react';
import Head from 'next/head';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import ProjectOptions from '../editor/components/ProjectOptions/ProjectOptions';
import CodeEditor from '../editor/components/CodeEditor/CodeEditor';
import { CodeEditorContextProvider } from '../editor/contexts/CodeEditorContext';

export default function EditorPage() {
  return (
    <MainLayout>
      <Head>
        <title>AluraDev - Editor de código</title>
      </Head>
      <CodeEditorContextProvider>
        <CodeEditor />
        <ProjectOptions />
      </CodeEditorContextProvider>
    </MainLayout>
  );
}
