import { createGlobalStyle } from 'styled-components';

import Themes from './Themes';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Poppins:wght@100;200;300;400;500;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font: 14px 'Montserrat', sans-serif;
    background: ${Themes.dark.background};
    color: ${Themes.dark.white};
    -webkit-font-smoothing: antialiased !important;
  }

  ul {
    list-style: none;
  }
`;