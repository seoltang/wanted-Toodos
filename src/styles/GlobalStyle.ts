import { createGlobalStyle } from 'styled-components';

import resetStyle from './resetStyle';

const GlobalStyle = createGlobalStyle`
  ${resetStyle}

  * {
    box-sizing: border-box;
  }
  
  body {
    font-family: "Segoe UI", Arial, sans-serif;
    line-height: 1.4;
    color: #444;
    background: #fff;
    height: 100vh;
  }
`;

export default GlobalStyle;
