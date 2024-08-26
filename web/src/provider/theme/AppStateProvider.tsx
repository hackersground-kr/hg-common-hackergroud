import {ReactNode, useState} from "react";
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