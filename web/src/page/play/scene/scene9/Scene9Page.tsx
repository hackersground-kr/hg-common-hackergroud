import {SharedSceneProps} from "@src/page/play/scene/SharedSceneProps";
import ScenePage from "@src/page/play/scene/ScenePage";
import {UserType} from "@src/@types/types";
import React from "react";
import useScene from "@hook/useScene";

export default function Scene9Page(
    {
        name,
        onEnded
    }: SharedSceneProps
) {
    const {chat, handleKeyDown} = useScene([
        {
            userType: UserType.Narration,
            message: '박병춘은 일정 내내 성실하게 의성군의 사회문제를 해결하려고 노력하는 모습을 본 모두. 박병춘은 의성군 시민들이 가장 존경하는 사람으로 거듭나게 된다.'
        },
        {
            userType: UserType.Narration,
            message: '하지만 박병춘은 집을 가던 중 의문의 교통사고를 당하고...'
        },
        {
            userType: UserType.Hero2,
            message: '멈춰!! 멈추라고!!!!!!!!!!!!!',
            vibration: true,
            music: "music/car_draft.mp3"
        }
    ], onEnded);
    return (
        <ScenePage
            backgroundUrl={'image/bg9.png'}
            currentChat={chat}
            onEnded={() => handleKeyDown()}
        />
    )
}