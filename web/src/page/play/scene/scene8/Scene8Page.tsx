import {SharedSceneProps} from "@src/page/play/scene/SharedSceneProps";
import ScenePage from "@src/page/play/scene/ScenePage";
import {UserType} from "@src/@types/types";
import React from "react";
import useScene from "@hook/useScene";

export default function Scene8Page(
    {
        name,
        onEnded
    }: SharedSceneProps
) {
    const {chat, handleKeyDown} = useScene([
        {
            userType: UserType.Narration,
            message: '시장님 지역 특산물 농업 관계자 박진수 씨입니다.'
        },
        {
            userType: UserType.ParkJinSoo,
            message: '안녕하세요, 시장님. 오늘 참가해 주셔서 감사합니다.'
        },
        {
            userType: UserType.Hero2,
            message: '반갑습니다, 박진수 씨. 현재 상황이 어떤가요?'
        },
        {
            userType: UserType.ParkJinSoo,
            message: '최근 기상 이변으로 인해 특산물인 납작 복숭아 등에서 못난이 과일의 비율이 무려 20%나 달하고 있습니다. 이로 인해 판매에 큰 어려움을 겪고 있습니다.'
        },
        {
            userType: UserType.ParkJinSoo,
            message: '이러한 문제점을 해결하려고 주말농장 체험 등을 진행했지만 여전히 못난이 과일이 잘 팔리지 않고 있습니다.'
        },
        {
            userType: UserType.Hero2,
            message: '(어떻게 해결할 수 있을까..?)'
        },
        // TODO: - 못난이 과일을 잼 같은 가공식품으로 만들어 판매를 지시한다.
        // TODO: - [의견 적기] (GPT)
        // TODO: - more GPT
        {
            userType: UserType.KimMinji,
            message: '수고하셨습니다, 시장님 오늘 모든 일정을 마치셨습니다!!'
        },
        {
            userType: UserType.Hero2,
            message: '너도 수고했어'
        }
    ], onEnded);
    return (
        <ScenePage
            backgroundUrl={'image/bg8.png'}
            currentChat={chat}
            onEnded={() => handleKeyDown()}
        />
    );
}