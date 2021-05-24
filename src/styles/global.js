import { createGlobalStyle } from 'styled-components';
import colors from './colors';

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${colors.background};
    font-family: 'Inter', sans-serif;
  }

  @media(max-width: 1024px){
    html{
        font-size: 93.75%
    }
  }
`;

export default GlobalStyle;
