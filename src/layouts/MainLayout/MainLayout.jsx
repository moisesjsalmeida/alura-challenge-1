import { MainContainer } from './main-styles';

import useWindowDimensions from '../../hooks/getWindowDimensions';

import Header from '../components/Header/Header';
import Menu from '../components/Menu/Menu';
import LoginModal from '../components/LoginModal/loginModal';

const MainLayout = ({ children }) => {
  const { width } = useWindowDimensions();
  return (
    <>
      <LoginModal />
      <Header />
      <MainContainer>
        {width > 768 && <Menu />}
        {children}
      </MainContainer>
    </>
  );
};

export default MainLayout;
