import * as S from './MainPage.style';
import {Background} from "@src/component/Background.style";

export default function MainPage() {
    return (
        <S.Container>
            <Background url={'image/bg1.webp'}/>
            <S.Content>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                    className={'fade-in-up'}
                >
                    <img
                        style={{
                            marginLeft: 40
                        }}
                        src={"image/char1.png"} width={256} alt=""
                    />
                    {/*256 = 2 ^ 8 ㅋㅋ 깔끔하죠?*/}
                    <S.Chat>
                        <S.Name>
                            청년 농부
                        </S.Name>
                        하.. 이런 열심히 준비했는데 탈락이라니
                        <img
                            style={{
                                alignSelf: 'center',
                            }}
                            src={'polygon/chat-indicator.png'}
                            width={7}
                            height={10}
                            className={'blinking-text'}
                        />
                    </S.Chat>

                </div>
            </S.Content>
        </S.Container>
    );
};