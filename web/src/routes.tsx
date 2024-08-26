import {Navigate, Route, Routes as Switch} from "react-router-dom";
import StartPage from "@src/page/start/StartPage";
import PlayPage from "@src/page/play/PlayPage";

export default function Routes() {
    return (
        <Switch>
            <Route path={"/"} index={true} element={<StartPage/>} />
            <Route path={"/play"} element={<PlayPage/>} />
            <Route path={'*'} element={<Navigate to={'/'} replace={true}/>}/>
        </Switch>
    );
}