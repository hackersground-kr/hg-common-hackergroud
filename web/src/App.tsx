import React, { useEffect } from "react";
import { GlobalStyle } from "@style/globalStyle";
import AppStateProvider from "@provider/theme/AppStateProvider";
import { BrowserRouter } from "react-router-dom";
import Routes from "@src/routes";
import axios from "axios";
import config from "./config";

function App() {
  const preloadImage = () => {
    const images = [
      "bg1.webp",
      "bg2.png",
      "bg3.png",
      "bg4.png",
      "bg5.png",
      "bg6.webp",
      "bg7.png",
      "bg8.png",
      "bg9.png",
      "bg10.png",
      "bg10.png",
      "char1.png",
      "char2.png",
      "char3.png",
      "char4.png",
      "char5.png",
      "char6.png",
      "char7.png",
      "char8.png",
    ];
    images.forEach((image) => {
      const img = new Image();
      img.src = "image/" + image;
    });
  };

  useEffect(() => {
    preloadImage();

    axios
      .get(`${config.baseUrl}/test`)
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
