import { createContext } from "react";
import {appFlow} from "@provider/theme/AppStateProvider";

export type AppStateContextType = {
    flow: appFlow;
    setFlow: (flow: appFlow) => void;
};

export const AppStateContext = createContext<AppStateContextType>({
    flow: 'start',
    setFlow: (flow: appFlow) => {}
});