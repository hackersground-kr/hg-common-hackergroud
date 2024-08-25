import React from 'react';
import Preview from "@designsystem/preview/Preview";
import USColorProvider from "@provider/theme/USColorProvider";
import {GlobalStyle} from "@style/globalStyle";

function App() {
    return (
        <USColorProvider>
            <GlobalStyle/>
            <Preview/>
        </USColorProvider>
    );
}

export default App;
