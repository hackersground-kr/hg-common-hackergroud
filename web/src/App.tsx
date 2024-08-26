import React, {useEffect} from "react";
import {GlobalStyle} from "@style/globalStyle";
import AppStateProvider from "@provider/theme/AppStateProvider";
import {BrowserRouter} from "react-router-dom";
import Routes from "@src/routes";
import axios from "axios";

function App() {
    useEffect(() => {
        (async () => {
            try {
                const data = await axios.get("http://localhost:8080/test");
                console.log(data.data);
            } catch (e) {
                console.log(e);
            }
        })()
    }, []);

    return (
        <AppStateProvider>
            <BrowserRouter>
                <GlobalStyle/>
                <Routes/>
            </BrowserRouter>
        </AppStateProvider>
    );
}

export default App;
