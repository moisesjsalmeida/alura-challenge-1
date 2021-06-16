import { useSession } from 'next-auth/client';
import { MainContainer } from './main-styles';

import useWindowDimensions from '../../hooks/getWindowDimensions';

import Header from '../components/Header/Header';
import Menu from '../components/Menu/Menu';
import LoginModal from '../components/LoginModal/loginModal';
import Spinner from '../components/Spinner';

const MainLayout = ({ children }) => {
  const [session, loading] = useSession();

  const { width } = useWindowDimensions();
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <LoginModal />
          <Header />
          <MainContainer>
            {width > 768 && <Menu />}
            {children}
          </MainContainer>
        </>
      )}
    </>
  );
};

export default MainLayout;
