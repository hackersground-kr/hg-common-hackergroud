import {SharedSceneProps} from "@src/page/play/scene/SharedSceneProps";
import ScenePage from "@src/page/play/scene/ScenePage";
import {UserType} from "@src/@types/types";
import React, {useState} from "react";
import useScene from "@hook/useScene";
import {Row} from "@designsystem/util/StyledFlex";
import {Input} from "@src/component/Input.style";
import {Button} from "@src/component/Button.style";
import Response from "@repository/Response";
import Repository from "@repository/Repository";

export default function Scene7Page(
    {
        name,
        onEnded
    }: SharedSceneProps
) {

    const [selectedReason, setSelectedReason] = useState<string>();
    const [input, setInput] = useState('');
    const [result, setResult] = useState<Response>();

    const handleComplete = async () => {
        if (!input) {
            alert('내용을 입력해 주세요');
            return;
        }

        try {
            const response = await Repository.ai2(input);
            setSelectedIdx(prev => prev + 1);
            setResult(response);
        } catch (e) {
            alert('에러가 발생했습니다. ㅠㅠ 🥲');
        }
    };

    const {setSelectedIdx, chat, handleKeyDown} = useScene([
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
            message: '시장님 혹시 저희 의성이 고령화 1등지역인걸 아시나요?'
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
            message: '',
            select: {
                data: ['1. 의성이 너무 시골이여서', '2. 놀거리가 없어서', '3. 일자리가 없어서'],
                onSelect: (item) => {
                    setSelectedReason(item);
                }
            }
        },
        {
            userType: UserType.HongGilDong,
            message: `맞습니다. ${selectedReason?.substring(3)} 의성에 오지 않는 것입니다.`
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
            message: '(작게 속삭이며) 시장님 무슨 대책이 있으신가요..?'
        },
        {
            userType: UserType.Hero2,
            message: `'${selectedReason}' 문제를 해결할 수 있는 해결책을 제안하세요`,
            disabledKeyDown: true,
            children: () => {
                return (
                    <Row $alignItems={'center'} $columnGap={4}>
                        <Input value={input} onChange={e => setInput(e.target.value)} type={'text'}/>
                        <Button onClick={handleComplete} disabled={!input}>완료</Button>
                    </Row>
                )
            }
        },
        {
            userType: UserType.HongGilDong,
            message: result?.message ?? ''
        },
        {
            userType: UserType.KimMinji,
            message: '시장님 또 한건 처리하셨군요!!!'
        },
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
    };

    return (
        <ScenePage
            backgroundUrl={'image/bg7.png'}
            currentChat={chat}
            onEnded={handle}
        />
    );
}