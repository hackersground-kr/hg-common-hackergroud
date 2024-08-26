import {SharedSceneProps} from "@src/page/play/scene/SharedSceneProps";
import ScenePage from "@src/page/play/scene/ScenePage";
import {UserType} from "@src/@types/types";
import React from "react";
import useScene from "@hook/useScene";

export default function Scene2Page(
    {
        name,
        onEnded
    }: SharedSceneProps
) {
    const {chat, handleKeyDown} = useScene([
        {
            userType: UserType.KangSeongMin,
            message: `${name}! 당신이 지금 무슨일을 한지 알아?????`
        },
        {
            userType: UserType.Hero,
            message: '죄송합니다...'
        },
        {
            userType: UserType.KangSeongMin,
            message: '이거 죄송하다고 해결될 문제가 아니야 너가 어제 서버를 초기화하고 잠수를 타 우리 신안 은행이 배상해야 하는 금액이 100억이야 100억!!!!!!'
        },
        {
            userType: UserType.Hero,
            message: '죄송합니다...'
        },
        {
            userType: UserType.KangSeongMin,
            message: '나가! 넌 오늘부터 해고야'
        }
    ], onEnded);

    return (
        <ScenePage
            backgroundUrl={'image/bg4.webp'}
            currentChat={chat}
            onEnded={() => handleKeyDown()}
        />
    );
}