import React from 'react';
import Preview from "@designsystem/preview/Preview";
import USColorProvider from "@provider/theme/USColorProvider";
import {GlobalStyle} from "@style/globalStyle";
import StartPage from "@src/page/start/StartPage";

function App() {
    return (
        <USColorProvider>
            <GlobalStyle/>
            <StartPage/>
        </USColorProvider>
    );
}

export default App;
