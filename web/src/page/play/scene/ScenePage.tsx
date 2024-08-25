import * as S from './ScenePage.style';
import {Background} from "@src/component/Background.style";
import {Chats, UserDictionary} from "@src/@types/types";
import {useState} from "react";

interface ScenePageProps {
    backgroundUrl: string;
    chats: Chats[];
    onEnd: () => void;
}

export default function ScenePage(
    {
        backgroundUrl,
        chats,
        onEnd
    }: ScenePageProps
) {

    const [selectedIdx, setSelectedIdx] = useState(0);
    const chat = chats[selectedIdx];
    const user = UserDictionary[chat.userType];

    return (
        <S.Container>
            <Background url={backgroundUrl}/>
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
                        src={user.image} width={256} alt=""
                    />
                    {/*256 = 2 ^ 8 ㅋㅋ 깔끔하죠?*/}
                    <S.Chat>
                        <S.Name>
                            {user.name ?? 'TODO: Add username'}
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