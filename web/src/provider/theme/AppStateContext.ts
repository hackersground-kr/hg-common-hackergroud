import {createContext, Dispatch, SetStateAction} from "react";
import ImgGenReq from "@repository/ImgGenReq";

export type AppStateContextType = {
    req: ImgGenReq,
    setReq?: Dispatch<SetStateAction<ImgGenReq>>
};

export const AppStateContext = createContext<AppStateContextType>({
    req: {
        sin1: '',
        sin2: '',
        sin3: ''
    },
    setReq: undefined,
});