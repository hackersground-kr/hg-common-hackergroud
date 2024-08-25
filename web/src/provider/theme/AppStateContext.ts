import { createContext } from "react";
import {appFlow} from "@provider/theme/AppStateProvider";

export type AppStateContextType = {
};

export const AppStateContext = createContext<AppStateContextType>({
});