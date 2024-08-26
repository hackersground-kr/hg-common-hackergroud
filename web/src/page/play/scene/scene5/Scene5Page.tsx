import {SharedSceneProps} from "@src/page/play/scene/SharedSceneProps";
import ScenePage from "@src/page/play/scene/ScenePage";
import {UserDictionary, UserType} from "@src/@types/types";
import React from "react";
import useScene from "@hook/useScene";

export default function Scene5Page(
    {
        name,
        onEnded
    }: SharedSceneProps
) {
    const {chat, handleKeyDown, handleKeyDownCount} = useScene([
        {
            userType: UserType.Hero,
            message: '흑… 머리가 왜 이렇게 아프지….?'
        },
        {
            userType: UserType.Hero,
            message: '(거울을 본다)'
        },
        {
            userType: UserType.Hero2,
            message: '뭐야!!!!!!!!!!!!! 누구야 이거 아니 아니 * 80000'
        },
        {
            userType: UserType.Hero2,
            message: '아니 뭐야 여긴 또 어디야'
        },
        {
            userType: UserType.Narration,
            message: '믿을 수 없다는 듯 거울을 보고 소리친다'
        },
        {
            userType: UserType.Hero2,
            message: '아니 이 못생긴 아저씬 누구야!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'
        },
        {
            userType: UserType.Narration,
            message: '이때 큰 소리를 듣고 누군가 방문을 두드린다',
            music: 'music/knock.mp3'
        },
        {
            userType: UserType.Unknown,
            message: '시장님 괜찮으세요?',
            music: 'music/door_open.mp3'
        },
        {
            userType: UserType.Narration,
            message: '누군가 방으로 들어왔다'
        },
        {
            userType: UserType.KimMinji,
            message: '시장님 어디 아프신가요?'
        },
        {
            userType: UserType.Hero2,
            message: '당신 누구야!?',
            vibration: true
        },
        {
            userType: UserType.KimMinji,
            message: `에이 시장님 왜 또 장난치세요.. 저 ${UserDictionary[UserType.KimMinji].name}잖아요 시장님 비서`
        },
        {
            userType: UserType.Hero2,
            message: '시장..? 비서..?? 뭔소리야'
        },
        {
            userType: UserType.KimMinji,
            message: '장난 그만하세요 재미없어요 ㅡ.ㅡ'
        },
        {
            userType: UserType.Hero2,
            message: '그니까 내가 시장이다..?'
        },
        {
            userType: UserType.KimMinji,
            message: '네.. 의성 시.장.님.'
        },
        {
            userType: UserType.Hero2,
            message: '',
            select: {
                data: ["오늘 일정이 어떻게 되지?", "의성시장..?"],
                onSelect: (item: string) => {
                    if (item === "오늘 일정이 어떻게 되지?") {
                        handleKeyDownCount(2);
                    }
                }
            }
        },
        {
            userType: UserType.KimMinji,
            message: '시장님!!!!! 장난 그만 치세요!!!!!!!!! 오늘 일정이 바빠요.. 장난칠 시간이 없다고요!!'
        },
        {
            userType: UserType.Hero2,
            message: '그래 알겠어 일정이 뭔데?'
        },
        {
            userType: UserType.KimMinji,
            message: '오늘 일정 브리핑해 드리겠습니다.'
        },
        {
            userType: UserType.KimMinji,
            message: '1시에 마을 이장님이랑 면담 있으시고요 3시에 청년 농부 홍길동 님과 청년들을 위한 시장 만남회가 있습니다. 그리고 5시에 농업 관계자 박진수 님과 지역 특산물 판매전략 미팅이 잡혀있습니다.'
        },
        {
            userType: UserType.Hero2,
            message: '(시장이 생각보다 바쁘게 사는구나…)'
        },
        {
            userType: UserType.Hero2,
            message: '일단 출발하자'
        },
        {
            userType: UserType.KimMinji,
            message: '차량 대기시켜두겠습니다.'
        }
    ], onEnded);
    return (
        <ScenePage
            backgroundUrl={'image/bg11.webp'}
            currentChat={chat}
            onEnded={() => handleKeyDown()}
        />
    );
}