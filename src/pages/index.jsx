import MainLayout from '../layouts/MainLayout/MainLayout';
import ProjectOptions from './editor/components/ProjectOptions/ProjectOptions';
import CodeEditor from './editor/components/CodeEditor/CodeEditor';
import { CodeEditorContextProvider } from './editor/contexts/CodeEditorContext';

export default function Home() {
  return (
    <>
      <MainLayout>
        <CodeEditorContextProvider>
          <CodeEditor />
          <ProjectOptions />
        </CodeEditorContextProvider>
      </MainLayout>
    </>
  );
}
