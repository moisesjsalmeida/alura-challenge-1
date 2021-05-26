import GlobalStyle from '../styles/global';
import 'codemirror/lib/codemirror.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
