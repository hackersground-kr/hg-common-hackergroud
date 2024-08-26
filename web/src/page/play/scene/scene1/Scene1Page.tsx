import {SharedSceneProps} from "@src/page/play/scene/SharedSceneProps";
import ScenePage from "@src/page/play/scene/ScenePage";
import {UserType} from "@src/@types/types";
import {josa} from "es-hangul";
import React from "react";
import useScene from "@hook/useScene";


export default function Scene1Page(
    {
        name,
        onEnded
    }: SharedSceneProps
) {

    const {chat, handleKeyDown} = useScene([
        {
            userType: UserType.Hero,
            message: '흠... 오늘따라 왜 이렇게 기분이 상쾌하지?',
        },
        {
            userType: UserType.Hero,
            message: '오늘은 무슨 재밌는 일이 일어날까? 🤔',
        },
        {
            userType: UserType.Narration,
            message: `${josa(name, '은/는')} 회사를 가기 위해 가볍게 샤워를 하고 나온다.`
        },
        {
            userType: UserType.Narration,
            message: '그러고는 업무 확인을 하기 위해 폰을 본다.',
        },
        {
            userType: UserType.Hero,
            message: '아니 이게 뭐야?!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
            vibration: true
        },
        {
            userType: UserType.Narration,
            message: '탁자 위에 놓인 휴대폰의 알림을 확인하자 밤새 부재중 전화 69통, 슬랙 알림 74개가 쌓여있었다.',
            music: "music/phone_vibe.mp3"
        },
        {
            userType: UserType.Narration,
            message: '이메일함에는 7시간 전 DB 인스턴스 3개 중에 무려 3개 모두 삭제가 되었다고 도착해있었다.'
        },
        {
            userType: UserType.Hero,
            message: '아... 이런 이게 뭐야 하... 내 인생.. (대충 신세한탄)'
        },
        {
            userType: UserType.Narration,
            message: `${josa(name, '은/는')} 급하게 준비를 마치고 회사로 달려간다.`,
            music: "music/running.mp3"
        }
    ], onEnded);

    return (
        <ScenePage
            backgroundUrl={'image/bg3.png'}
            currentChat={chat}
            onEnded={() => handleKeyDown()}
        />
    );
}