import {ReactNode} from "react";
import {ThemeProvider} from "styled-components";

import useDarkTheme from "@hook/global/useDarkTheme";

import {USDarkScheme, USLightScheme} from "@designsystem/foundation/color/USColorSementic";
import {DarkThemeContext} from "@provider/theme/DarkThemeContext";

interface USColorProviderProps {
    children: ReactNode;
}

const USColorProvider = (
    {
        children,
    }: USColorProviderProps
) => {
    const [isDarkTheme, setIsDarkTheme] = useDarkTheme();

    return (
        <DarkThemeContext.Provider value={{isDarkTheme, setIsDarkTheme}}>
            <ThemeProvider theme={isDarkTheme ? USDarkScheme : USLightScheme}>{children}</ThemeProvider>
        </DarkThemeContext.Provider>
    );
};

export default USColorProvider;