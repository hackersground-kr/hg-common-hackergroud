import {SharedSceneProps} from "@src/page/play/scene/SharedSceneProps";
import ScenePage from "@src/page/play/scene/ScenePage";
import {UserType} from "@src/@types/types";
import {josa} from "es-hangul";
import React from "react";
import useScene from "@hook/useScene";

export default function Scene4Page(
    {
        name,
        onEnded
    }: SharedSceneProps
) {
    const {chat, handleKeyDown} = useScene([
        {
            userType: UserType.Hero,
            message: '이대로 포기하고 백수로 살 순 없어! 취업 준비를 할 거야!!'
        },
        {
            userType: UserType.Narration,
            message: '하지만 서버를 날려먹은 실수를 한 서버 개발자를 누가 뽑아주겠는가?'
        },
        {
            userType: UserType.Narration,
            message: `그래서 취준생으로 1년이란 시간이 흐르고… 개발감을 잊지 않기 위해 해커톤이라도 나가자 생각한 ${name}`
        },
        {
            userType: UserType.Narration,
            message: '의성에서 진행하는 해커그라운드 해커톤에 지원하게 되는데…'
        },
        {
            userType: UserType.Narration,
            message: '결과는 탈락...'
        },
        {
            userType: UserType.Narration,
            message: `낙심한 채 ${josa(name, '은/는')} 잠에 들게 된다…`
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