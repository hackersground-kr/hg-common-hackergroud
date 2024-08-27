import {SharedSceneProps} from "@src/page/play/scene/SharedSceneProps";
import ScenePage from "@src/page/play/scene/ScenePage";
import {UserType} from "@src/@types/types";
import React from "react";
import useScene from "@hook/useScene";

export default function Scene11Page(
    {
        name,
        onEnded
    }: SharedSceneProps
) {
    const {chat, handleKeyDown} = useScene([
        {
            userType: UserType.Hero,
            message: '뭐야 집이잖아?'
        },
        {
            userType: UserType.Hero,
            message: '아니 꿈이었어'
        },
        {
            userType: UserType.Hero,
            message: '아니 현실이 아니라 꿈이었어!!!!!!!!!!',
            vibration: true
        },
        {
            userType: UserType.Hero,
            message: '꿈이 뭐 이렇게 생생한 거야...'
        },
        {
            userType: UserType.Hero,
            message: '(머리를 감싸며) 무슨 일이 있었던 거지..?'
        }
    ], onEnded);
    return (
        <ScenePage
            backgroundUrl={'image/bg3.webp'}
            currentChat={chat}
            onEnded={() => handleKeyDown()}
        />
    );
}