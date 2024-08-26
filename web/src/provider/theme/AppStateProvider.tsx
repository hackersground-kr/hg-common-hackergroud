import {ReactNode, useState} from "react";
import {AppStateContext} from "@provider/theme/AppStateContext";
import ImgGenReq from "@repository/ImgGenReq";

interface AppStateProps {
    children: ReactNode;
}

const AppStateProvider = (
    {
        children,
    }: AppStateProps
) => {
    const [req, setReq] = useState<ImgGenReq>({
        sin1: '',
        sin2: '',
        sin3: ''
    });

    return (
        <AppStateContext.Provider value={{req, setReq}}>
            {children}
        </AppStateContext.Provider>
    );
};

export default AppStateProvider;