import {SharedSceneProps} from "@src/page/play/scene/SharedSceneProps";
import ScenePage from "@src/page/play/scene/ScenePage";
import {UserType} from "@src/@types/types";
import React, {useContext, useState} from "react";
import useScene from "@hook/useScene";
import {Button} from "@src/component/Button.style";
import {AppStateContext} from "@provider/theme/AppStateContext";
import Repository from "@repository/Repository";

export default function Scene13Page(
    {
        name,
        onEnded
    }: SharedSceneProps
) {

    const {req} = useContext(AppStateContext);
    const [res, setRes] = useState<string>();

    const gen = async () => {
        try {
            const res = await Repository.ai4(req);
            setRes(res.value);
            handleKeyDown();
        } catch (e) {
            console.log(e);
        }
    }

    const {chat, handleKeyDown} = useScene([
        {
            userType: UserType.Narration,
            message: '의성으로 떠난 지 5년 뒤...'
        },
        {
            userType: UserType.Narration,
            message: '박병춘은 의성 시장으로 당선됐고 예전 꿈에서 자신이 답변한 공약을 바탕으로 의성의 사회문제를 해결해 나갔다.'
        },
        {
            userType: UserType.Narration,
            message: '당신이 만든 의성의 미래를 확인해 보시겠습니까?',
            disabledKeyDown: true,
            children: () => (
                <Button onClick={gen}>의성 이미지 생성</Button>
            )
        },
        {
            userType: UserType.Narration,
            message: '...'
        }
    ], onEnded);

    return (
        <ScenePage
            backgroundUrl={res ?? 'image/bg1.webp'}
            currentChat={chat}
            onEnded={() => handleKeyDown()}
        />
    );
}