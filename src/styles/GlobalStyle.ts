import { createGlobalStyle } from 'styled-components';
import resetStyle from './resetStyle';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  ${resetStyle}

  * {
    box-sizing: border-box;
  }
  
  body {
    font-family: "Segoe UI", Arial, sans-serif;
    line-height: 1.4;
    color: ${theme.color.gray[444]};
    background: ${theme.color.white};
    min-height: 100vh;
  }
`;

export default GlobalStyle;
