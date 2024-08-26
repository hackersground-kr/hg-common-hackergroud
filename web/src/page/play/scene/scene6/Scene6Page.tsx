import {SharedSceneProps} from "@src/page/play/scene/SharedSceneProps";
import ScenePage from "@src/page/play/scene/ScenePage";
import {UserType} from "@src/@types/types";
import React from "react";

export default function Scene6Page(
    {
        name,
        onEnded
    }: SharedSceneProps
) {
    return (

        <ScenePage
            backgroundUrl={'image/bg6.webp'}
            chats={[
                {
                    userType: UserType.KimMinji,
                    message: '시장님 마을 이장 김춘배씨 입니다.'
                },
                {
                    userType: UserType.KimChunBae,
                    message: '(격앙된 목소리로) 안녕하세요, 시장님! 저는 이 마을의 이장, 김춘배입니다.'
                },
                {
                    userType: UserType.KimChunBae,
                    message: '제발 도와주십시오! 요즘 마을이 정말 말라비틀어지고 있어요! 다들 도망가듯 떠나고 있어요! 인구 소멸을 해결하기 위한 시장님의 특출난 아이디어가 필요합니다…',
                    vibration: true
                },
                {
                    userType: UserType.KimChunBae,
                    message: '이렇게 점점 시간이 지나다 보면 저희 마을이 사라질 수도 있을 것 같습니다...'
                },
                {
                    userType: UserType.Hero2,
                    message: '(뭔가 의성의 인구 소멸을 해결하기 위한 좋은 아이디어가 없을까…?)',
                    // input: {
                    //     value: ai1Prompt,
                    //     onChange: e => setAi1Prompt(e.target.value),
                    // }
                    children: (
                        <input type="text"/>
                    )
                },
                {
                    userType: UserType.KimChunBae,
                    message: 'GPT의 답변... ex. 와 지존 쩌는 아이디어 입니다 행님 ㄷㄷ'
                },
                {
                    userType: UserType.KimMinji,
                    message: '시장님 역시 최고예요!!'
                }
            ]}
            onEnded={onEnded}
        />
    );
}