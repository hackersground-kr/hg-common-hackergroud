import React, {useContext} from 'react';
import Preview from "@designsystem/preview/Preview";
import USColorProvider from "@provider/theme/USColorProvider";
import {GlobalStyle} from "@style/globalStyle";
import StartPage from "@src/page/start/StartPage";
import MainPage from "@src/page/main/MainPage";
import AppStateProvider from "@provider/theme/AppStateProvider";
import {AppStateContext} from "@provider/theme/AppStateContext";

function App() {

    const {flow, setFlow} = useContext(AppStateContext);

    return (
        <>
            {flow === 'start' && (
                <StartPage/>
            )}
            {flow === 'main' && (
                <MainPage/>
            )}
            <GlobalStyle/>
            {/*<MainPage/>*/}
        </>
    );
}

export default App;
