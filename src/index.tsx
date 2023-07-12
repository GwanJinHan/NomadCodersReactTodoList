import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { DarkTheme } from "./theme";
import { RecoilRoot } from "recoil";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={DarkTheme}>
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
