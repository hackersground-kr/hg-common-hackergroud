import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import EndDialog from "@src/component/dialog/enddialog/EndDialog";
import Scene1Page from "@src/page/play/scene/scene1/Scene1Page";
import Scene2Page from "@src/page/play/scene/scene2/Scene2Page";
import Scene3Page from "@src/page/play/scene/scene3/Scene3Page";
import Scene4Page from "@src/page/play/scene/scene4/Scene4Page";
import Scene5Page from "@src/page/play/scene/scene5/Scene5Page";
import Scene6Page from "@src/page/play/scene/scene6/Scene6Page";
import Scene7Page from "@src/page/play/scene/scene7/Scene7Page";
import Scene8Page from "@src/page/play/scene/scene8/Scene8Page";
import Scene9Page from "@src/page/play/scene/scene9/Scene9Page";
import Scene10Page from "@src/page/play/scene/scene10/Scene10Page";
import Scene11Page from "@src/page/play/scene/scene11/Scene11Page";
import Scene12Page from "@src/page/play/scene/scene12/Scene12Page";
import Scene13Page from "@src/page/play/scene/scene13/Scene13Page";
import FutureDialog from "@src/component/dialog/futuredialog/FutureDialog";

export default function PlayPage() {

    const [scene, setScene] = useState(6);
    const location = useLocation();
    const name = location.state.name;
    const [isShowEndDialog, setIsShowEndDialog] = useState(false)

    const [isShowFutureDialog, setIsShowFutureDialog] = useState(false)

    const [playData, setPlayData] = useState<string[]>([])

    function nextScene() {
        setScene(scene + 1);
    }

    function preloadMusics() {
        const audioSource = ["phone_vibe.mp3", "knock.mp3", "door_open.mp3", "clap.mp3", "end.mp3", "car_draft.mp3", "running.mp3"]
        audioSource.forEach((item) => {
            const audio = new Audio(`music/${item}`)
            audio.load();  // add this line
        })
    }

    useEffect(() => {
        preloadMusics();
    }, []);

    return (
        <>
            {isShowFutureDialog && <FutureDialog next={() => {setIsShowFutureDialog(false);setIsShowEndDialog(true)}} dismiss={(_) => {setIsShowFutureDialog(false);setIsShowEndDialog(true)}}/>}
            {isShowEndDialog && <EndDialog dismiss={(_) => setIsShowEndDialog(false)}/>}
            {scene === 1 && <Scene1Page name={name} onEnded={nextScene}/>}
            {scene === 2 && <Scene2Page name={name} onEnded={nextScene}/>}
            {scene === 3 && <Scene3Page name={name} onEnded={nextScene}/>}
            {scene === 4 && <Scene4Page name={name} onEnded={nextScene}/>}
            {scene === 5 && <Scene5Page name={name} onEnded={nextScene}/>}
            {scene === 6 && <Scene6Page name={name} onEnded={nextScene}/>}
            {scene === 7 && <Scene7Page name={name} onEnded={nextScene}/>}
            {scene === 8 && <Scene8Page name={name} onEnded={nextScene}/>}
            {scene === 9 && <Scene9Page name={name} onEnded={nextScene}/>}
            {scene === 10 && <Scene10Page name={name} onEnded={nextScene}/>}
            {scene === 11 && <Scene11Page name={name} onEnded={nextScene}/>}
            {scene === 12 && <Scene12Page name={name} onEnded={nextScene}/>}
            {scene === 13 && <Scene13Page isShowFutureDialog={() => {
                setIsShowFutureDialog(true);
            }} name={name} onEnded={() => {
                setIsShowEndDialog(true);
            }}/>}
        </>
    );
}
