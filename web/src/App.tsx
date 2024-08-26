import React, { useEffect } from "react";
import { GlobalStyle } from "@style/globalStyle";
import AppStateProvider from "@provider/theme/AppStateProvider";
import { BrowserRouter } from "react-router-dom";
import Routes from "@src/routes";
import axios from "axios";

function App() {
  useEffect(() => {
    const serverBaseUrl: string = window._env_.REACT_APP_SERVER_BASE_URL;

    axios
      .get(`${serverBaseUrl ?? "http://localhost:8080"}/test`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <AppStateProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </AppStateProvider>
  );
}

export default App;
