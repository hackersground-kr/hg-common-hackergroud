import {ReactNode} from "react";
import {AppStateContext} from "@provider/theme/AppStateContext";

interface AppStateProps {
    children: ReactNode;
}

const AppStateProvider = (
    {
        children,
    }: AppStateProps
) => {
    return (
        <AppStateContext.Provider value={{}}>
            {children}
        </AppStateContext.Provider>
    );
};

export default AppStateProvider;