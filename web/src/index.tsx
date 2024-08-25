import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppStateProvider from "@provider/theme/AppStateProvider";
import USColorProvider from "@provider/theme/USColorProvider";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <USColorProvider>
            <AppStateProvider>
                <App/>
            </AppStateProvider>
        </USColorProvider>
    </React.StrictMode>
);
