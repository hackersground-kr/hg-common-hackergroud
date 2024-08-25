import * as S from './StartPage.style';
import {useEffect, useState} from "react";

export default function StartPage() {

    const [flow, setFlow] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setFlow(1);
        }, 900);
        setTimeout(() => {
            setFlow(2);
        }, 1400);
    }, []);

    return (
        <S.Container>
            <S.TitleContainer>
                <div
                    style={{
                        fontSize: 58,
                    }}
                    className={'fade-in-up'}
                >
                    백수였던
                </div>
                {flow >= 1 && (
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
                {flow >= 2 && (
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
            <S.StartButton>
                시작하기
                <img style={{ marginTop: 4 }} src={'icon/RightArrow.png'} width={18}/>
            </S.StartButton>
        </S.Container>
    );
}