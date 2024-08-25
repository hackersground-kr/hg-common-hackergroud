import React from 'react';
import Preview from "@designsystem/preview/Preview";
import USColorProvider from "@provider/theme/USColorProvider";
import {GlobalStyle} from "@style/globalStyle";
import MainPage from "@src/page/MainPage";

function App() {
    return (
        <USColorProvider>
            <GlobalStyle/>
            <MainPage/>
        </USColorProvider>
    );
}

export default App;
