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
      "bg2.webp",
      "bg3.webp",
      "bg4.webp",
      "bg5.webp",
      "bg6.webp",
      "bg7.webp",
      "bg8.webp",
      "bg9.webp",
      "bg10.webp",
      "bg10.webp",
      "char1.webp",
      "char2.webp",
      "char3.webp",
      "char4.webp",
      "char5.webp",
      "char6.webp",
      "char7.webp",
      "char8.webp",
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
