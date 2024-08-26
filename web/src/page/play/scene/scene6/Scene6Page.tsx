import {SharedSceneProps} from "@src/page/play/scene/SharedSceneProps";
import ScenePage from "@src/page/play/scene/ScenePage";
import {UserType} from "@src/@types/types";
import React, {useState} from "react";
import {Row} from "@designsystem/util/StyledFlex";
import * as S from './Scene6Page.style';
import {Button} from "@src/component/Button.style";
import Repository from "@src/repository/Repository";
import useScene from "@hook/useScene";
import Response from "@repository/Response";

export default function Scene6Page(
    {
        name,
        onEnded
    }: SharedSceneProps
) {
    const [input, setInput] = useState('');
    const [result, setResult] = useState<Response>();
    const {setSelectedIdx, chat, handleKeyDown} = useScene([
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
            message: '(의성의 인구 소멸을 해결하기 위한 좋은 아이디어가 없을까…?)',
            disabledKeyDown: true,
            children: (action) => {
                return <Row $alignItems={'center'} $columnGap={4}>
                    <S.Input
                        value={input} onChange={e => setInput(e.target.value)}
                        type="text"
                        onKeyDown={event => event.stopPropagation()}
                    />
                    <Button disabled={!input} onClick={async () => {
                        if (!input) {
                            alert('내용을 입력해 주세요');
                            return;
                        }

                        try {
                            const response = await Repository.ai1(input);
                            action();
                            setSelectedIdx(prev => prev + 1);
                            setResult(response);
                        } catch (e) {
                            alert('에러가 발생했습니다. ㅠㅠ 🥲');
                        }
                    }}>완료</Button>
                </Row>
            }
        },
        {
            userType: UserType.KimChunBae,
            message: result?.message ?? ''
        },
        {
            userType: UserType.KimMinji,
            message: '시장님 역시 최고예요!!'
        }
    ], onEnded);

    const handle = () => {
        if (!result) {
            handleKeyDown();
            return;
        }
        if (result?.state) {
            handleKeyDown();
        } else {
            setSelectedIdx(prev => prev - 1);
        }
    }

    return (
        <ScenePage
            backgroundUrl={'image/bg6.webp'}
            currentChat={chat}
            onEnded={() => handle()}
        />
    );
}