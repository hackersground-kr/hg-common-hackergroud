import {ReactNode, useState} from "react";
import {ThemeProvider} from "styled-components";

import useDarkTheme from "@hook/global/useDarkTheme";

import {USDarkScheme, USLightScheme} from "@designsystem/foundation/color/USColorSementic";
import {DarkThemeContext} from "@provider/theme/DarkThemeContext";
import {AppStateContext} from "@provider/theme/AppStateContext";

interface AppStateProps {
    children: ReactNode;
}

export type appFlow = 'start' | 'main';

const AppStateProvider = (
    {
        children,
    }: AppStateProps
) => {
    const [flow, setFlow] = useState<appFlow>('start');

    return (
        <AppStateContext.Provider value={{flow, setFlow}}>
            {children}
        </AppStateContext.Provider>
    );
};

export default AppStateProvider;