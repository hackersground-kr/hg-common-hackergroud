import * as S from './StartPage.style';
import {useContext, useEffect, useState} from "react";
import {Background} from "@src/component/Background.style";
import ExpandRight from "@designsystem/foundation/iconography/icons/ExpandRight";
import {AppStateContext} from "@provider/theme/AppStateContext";

export default function StartPage() {

    const {flow, setFlow} = useContext(AppStateContext);
    const [startFlow, setStartFlow] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setStartFlow(1);
        }, 900);
        setTimeout(() => {
            setStartFlow(2);
        }, 1400);
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
            <S.StartButton
                style={{
                    bottom: 108
                }}
                onClick={() => {
                    setFlow('main');
                }}
            >
                시작하기
                <ExpandRight
                    style={{
                        marginTop: -1.5
                    }}
                    fill={'white'}
                />
                {/*<img style={{marginTop: 8}} src={'icon/RightArrow.png'} width={18}/>*/}
            </S.StartButton>
        </S.Container>
    );
}