import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { mixin, GlobalStyle } from 'styles';
import { ThemeProvider } from "styled-components";
import { Provider } from 'react-redux';
import store from 'store';

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <ThemeProvider theme={{ ...mixin }}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
