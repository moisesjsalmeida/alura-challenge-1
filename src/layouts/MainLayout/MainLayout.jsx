import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import { useSession } from 'next-auth/client';
import { MainContainer } from './main-styles';

import useWindowDimensions from '../../hooks/getWindowDimensions';

import Header from '../components/Header/Header';
import Menu from '../components/Menu/Menu';
import LoginModal from '../components/LoginModal/loginModal';
import Spinner from '../components/Spinner';

const MainLayout = ({ children }) => {
  const [session, loading] = useSession();

  const [loadingUI, setLoadingUI] = useState(false);

  useEffect(() => {
    const start = () => {
      setLoadingUI(true);
    };
    const end = () => {
      setLoadingUI(false);
    };
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);
    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);

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
            {loadingUI ? <Spinner /> : <>{children}</>}
          </MainContainer>
        </>
      )}
    </>
  );
};

export default MainLayout;
