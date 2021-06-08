import { Provider } from 'next-auth/client';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css/animate.compat.css';
import GlobalStyle from '../styles/global';

import 'codemirror/lib/codemirror.css';
import { AuthContextProvider } from './contexts/authContext';

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <ReactNotification />
      <GlobalStyle />
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    </Provider>
  );
}

export default MyApp;
