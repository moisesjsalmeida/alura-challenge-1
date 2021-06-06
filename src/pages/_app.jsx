import { Provider } from 'next-auth/client';
import GlobalStyle from '../styles/global';

import 'codemirror/lib/codemirror.css';
import { AuthContextProvider } from './contexts/authContext';

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <GlobalStyle />
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    </Provider>
  );
}

export default MyApp;
