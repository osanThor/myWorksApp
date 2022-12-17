import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import { media, themeType } from './theme';

const GlobalStyle = createGlobalStyle`
${reset}
#__next{
  width: 100%;
  height: 100%;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-weight: 500;
}
html,
body {
  width: 100%;
  height: 100%;
  font-size: 16px;
  scroll-behavior: smooth;
}

body{
  font-family: 'LINESeedKR' ;
  background-color: #FFF8F3;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  border: 0;
  display: block;
}
header,
main,
footer,
nav,
section,
article,
aside {
  display: block;
}

${media.tablet}  {
  html,
  body {
    font-size: 14px;
  }
}
`;

export default GlobalStyle;
