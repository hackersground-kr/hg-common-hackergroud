import React, { useContext, useEffect } from "react";
import Preview from "@designsystem/preview/Preview";
import USColorProvider from "@provider/theme/USColorProvider";
import { GlobalStyle } from "@style/globalStyle";
import StartPage from "@src/page/start/StartPage";
import ScenePage from "@src/page/play/scene/ScenePage";
import AppStateProvider from "@provider/theme/AppStateProvider";
import { BrowserRouter } from "react-router-dom";
import Routes from "@src/routes";

function App() {
  return (
    <USColorProvider>
      <AppStateProvider>
        <BrowserRouter>
          <GlobalStyle />
          <Routes />
        </BrowserRouter>
      </AppStateProvider>
    </USColorProvider>
  );
}

export default App;
