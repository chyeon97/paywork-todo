import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { mixin, GlobalStyle } from 'styles';
import { ThemeProvider } from "styled-components";


ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={{ ...mixin }}>
      <App />
    </ThemeProvider>
  </>,
  document.getElementById("root")
);
