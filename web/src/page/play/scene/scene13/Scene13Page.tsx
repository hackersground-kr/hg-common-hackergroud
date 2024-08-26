import {SharedSceneProps} from "@src/page/play/scene/SharedSceneProps";
import ScenePage from "@src/page/play/scene/ScenePage";
import {UserType} from "@src/@types/types";
import React from "react";
import useScene from "@hook/useScene";

export default function Scene13Page(
    {
        name,
        onEnded
    }: SharedSceneProps
) {
    const {chat, handleKeyDown} = useScene([
        {
            userType: UserType.Narration,
            message: '의성으로 떠난 지 5년 뒤...'
        },
        {
            userType: UserType.Narration,
            message: '박병춘은 의성 시장으로 당선됐고 예전 꿈에서 자신이 답변한 공약을 바탕으로 의성의 사회문제를 해결해 나갔다.'
        }
        // TODO: (플레이어가 답변한 공략 3개 [서버 API호출])
    ], onEnded);
    return (
        <ScenePage
            backgroundUrl={'image/bg1.webp'}
            currentChat={chat}
            onEnded={() => handleKeyDown()}
        />
    );
}