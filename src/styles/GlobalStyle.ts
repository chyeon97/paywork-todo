import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #fff;
    color: #000;
  }
  h1, h2, h3{
    margin:0;
  }
  ol, ul, dl {
    margin:0;
  }
`;

export default GlobalStyle;
