import {SharedSceneProps} from "@src/page/play/scene/SharedSceneProps";
import ScenePage from "@src/page/play/scene/ScenePage";
import {UserType} from "@src/@types/types";
import React from "react";
import useScene from "@hook/useScene";

export default function Scene3Page(
    {
        name,
        onEnded
    }: SharedSceneProps
) {

    const {chat, handleKeyDown} = useScene([
        {
            userType: UserType.Narration,
            message: `고등학교부터 열심히 공부해 신안은행을 들어간 ${name}. 2년 만에 서버를 날려버리고 백수로 돌아가게 된다.`
        }
    ], onEnded);

    return (
        <ScenePage
            backgroundUrl={'image/bg5.webp'}
            currentChat={chat}
            onEnded={() => handleKeyDown()}
        />
    )
}