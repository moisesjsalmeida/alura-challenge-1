import { Provider } from 'next-auth/client';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css/animate.compat.css';
import GlobalStyle from '../styles/global';

import 'codemirror/lib/codemirror.css';
import { AuthContextProvider } from '../hooks/authContext';
import MainLayout from '../layouts/MainLayout/MainLayout';

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <ReactNotification />
      <GlobalStyle />
      <AuthContextProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </AuthContextProvider>
    </Provider>
  );
}

export default MyApp;
