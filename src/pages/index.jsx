import MainLayout from '../layouts/MainLayout/MainLayout';
import Header from '../layouts/components/Header/Header';
import Menu from '../layouts/components/Menu/Menu';
import ProjectOptions from './Home/components/ProjectOptions/ProjectOptions';
import CodeEditor from './Home/components/CodeEditor/CodeEditor';
import useWindowDimensions from '../hooks/getWindowDimensions';

export default function Home() {
  const { width } = useWindowDimensions();
  return (
    <>
      <Header />
      <MainLayout>
        {width > 768 && <Menu />}
        <CodeEditor />
        <ProjectOptions />
      </MainLayout>
    </>
  );
}
