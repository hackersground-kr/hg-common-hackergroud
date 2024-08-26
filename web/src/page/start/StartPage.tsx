import * as S from './StartPage.style';
import {useEffect, useState} from "react";
import {Background} from "@src/component/Background.style";
import ExpandRight from "@designsystem/foundation/iconography/icons/ExpandRight";
import {useNavigate} from "react-router-dom";
import {StartButton} from "@src/component/StartButton.style";

export default function StartPage() {

    const [startFlow, setStartFlow] = useState(0);
    const [name, setName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setStartFlow(1);
        }, 900);
        setTimeout(() => {
            setStartFlow(2);
        }, 1400);
        setTimeout(() => {
            setStartFlow(3);
        }, 1900);
        setTimeout(() => {
            setStartFlow(4);
        }, 2400);
    }, []);

    return (
        <S.Container>
            <Background url={'image/bg2.png'}/>
            <S.TitleContainer>
                <div
                    style={{
                        fontSize: 58,
                    }}
                    className={'fade-in-up'}
                >
                    백수였던
                </div>
                {startFlow >= 1 && (
                    <div
                        style={{
                            fontSize: 38,
                            marginTop: 4
                        }}
                        className={'fade-in-up'}
                    >
                        내가 이세계에선
                    </div>
                )}
                {startFlow >= 2 && (
                    <div
                        style={{
                            fontSize: 68,
                            marginTop: 8
                        }}
                        className={'fade-in-up'}
                    >
                        의성군 시장?
                    </div>
                )}
            </S.TitleContainer>
            {startFlow >= 3 && (
                <div
                    className={'fade-in-up'}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            position: "absolute",
                            left: '50%',
                            transform: 'translateX(-50%)',
                            bottom: 212,
                            alignItems: 'center',
                            gap: 8
                        }}
                    >
                        <div
                            style={{
                                color: 'white',
                                textShadow: '0 4px 4px rgba(0, 0, 0, 0.1)',
                                fontSize: 18
                            }}
                        >이름
                        </div>
                        <S.NameInput
                            type={"text"}
                            placeholder={'이름을 입력해 주세요'}
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                    </div>
                </div>
            )}
            {startFlow >= 4 && name !== '' && (
                <div className={'fade-in-up'}>
                    <S.StartButtonContainer>
                        <StartButton
                            onClick={() => {
                                navigate('play', {
                                    state: {
                                        name
                                    }
                                });
                            }}
                        >
                            시작하기
                            <ExpandRight
                                style={{
                                    marginTop: -1.5
                                }}
                                fill={'white'}
                            />
                        </StartButton>
                    </S.StartButtonContainer>
                </div>
            )}
        </S.Container>
    );
}