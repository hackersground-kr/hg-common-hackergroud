import React, { useEffect } from "react";
import { GlobalStyle } from "@style/globalStyle";
import AppStateProvider from "@provider/theme/AppStateProvider";
import { BrowserRouter } from "react-router-dom";
import Routes from "@src/routes";
import axios from "axios";

function App() {
  useEffect(() => {
    axios
      .get(`${process.env.SERVER_BASE_URL}/test`)
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
