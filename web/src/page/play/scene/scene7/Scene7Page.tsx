import {SharedSceneProps} from "@src/page/play/scene/SharedSceneProps";
import ScenePage from "@src/page/play/scene/ScenePage";
import {UserType} from "@src/@types/types";
import React from "react";

export default function Scene7Page(
    {
        name,
        onEnded
    }: SharedSceneProps
) {
    return (
        <ScenePage
            backgroundUrl={'image/bg7.png'}
            chats={[
                {
                    userType: UserType.KimMinji,
                    message: '시장님 의성군의 청년들입니다. 오늘 시장님에게 듣고 싶은 이야기가 많은 걸로 알고 있어요.'
                },
                {
                    userType: UserType.Hero2,
                    message: '(살짝 부담을 가지고 컨퍼런스 홀로 들어간다)'
                },
                {
                    userType: UserType.Narration,
                    message: '청년 농부 홍길동과 몇 명의 청년들이 앉아있다'
                },
                {
                    userType: UserType.Hero2,
                    message: '청년 여러분 안녕하세요 반갑습니다. 이 시간은 여러분들과 제가 만나서 저희 의성군을 더 좋은 의성으로 만들기 위해 모인 자리입니다.'
                },
                {
                    userType: UserType.Hero2,
                    message: '여러분들의 의견을 편하게 말해주시면 제가 최대한 반영할 수 있도록 돕겠습니다.'
                },
                {
                    userType: UserType.Narration,
                    message: '(박수소리)',
                    music: 'music/clap.mp3'
                },
                {
                    userType: UserType.HongGilDong,
                    message: '청년들이 저희 의성에 안 오는 이유가 뭐라고 생각하십니까?'
                },
                {
                    userType: UserType.Hero2,
                    message: '(의성이 고령화 1등이야..? 몰랐는데… 일단 아는척하자)'
                },
                {
                    userType: UserType.Hero2,
                    message: '아.. 알죠..ㅎㅎ'
                },
                {
                    userType: UserType.HongGilDong,
                    message: '청년들이 저희 의성에 안 오는 이유가 뭐라고 생각하십니까?'
                },
                {
                    // TODO: Add Select form
                    userType: UserType.Hero2,
                    message: '1. 의성이 너무 시골이여서 그렇죠…?\n' +
                        '2. 놀거리가 없어서 그렇죠…?\n' +
                        '3. 일자리가 없어서 그렇죠…?'
                },
                {
                    userType: UserType.HongGilDong,
                    message: '맞습니다.  {선택} 때문입니다.'
                },
                {
                    userType: UserType.HongGilDong,
                    message: '시장님은 문제를 인식하고 있는데 왜 개선을 하지 않습니까?',
                    vibration: true
                },
                {
                    userType: UserType.Narration,
                    message: '홍길동의 공격적인 발언으로 사람들이 웅성웅성한다'
                },
                {
                    userType: UserType.Hero2,
                    message: '아.....'
                },
                {
                    userType: UserType.KimMinji,
                    message: '(작게 속삭이며) 시장님 뭔가 대책이 있으신가요..?'
                },
                {
                    // TODO : Add Input form
                    userType: UserType.Hero2,
                    message: ''
                },
                // TODO: Add GPT
                {
                    userType: UserType.KimMinji,
                    message: '시장님 또 한건 처리하셨군요!!!'
                },
            ]}
            onEnded={onEnded}
        />
    );
}