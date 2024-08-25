import * as S from './ScenePage.style';
import {Background} from "@src/component/Background.style";
import {Chats, UserDictionary} from "@src/@types/types";
import {useState} from "react";
import {useLocation} from "react-router-dom";
import TypingText from "@src/component/TypingText";

interface ScenePageProps {
    backgroundUrl: string;
    chats: Chats[];
    onEnded: () => void;
}

export default function ScenePage(
    {
        backgroundUrl,
        chats,
        onEnded
    }: ScenePageProps
) {
    const location = useLocation();
    const [selectedIdx, setSelectedIdx] = useState(0);
    const chat = chats[selectedIdx];
    const user = UserDictionary[chat.userType];
    const name = location.state.name;

    function handleKeyDown() {
        if (selectedIdx + 1 >= chats.length) {
            onEnded();
            return;
        }

        setSelectedIdx(i => i + 1);
    }

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
                            {user.name ?? name}
                        </S.Name>
                        {/*하.. 이런 열심히 준비했는데 탈락이라니*/}
                        <TypingText
                            text={chat.message}
                            speed={50}
                            onEnded={handleKeyDown}
                        />
                    </S.Chat>
                </div>
            </S.Content>
        </S.Container>
    );
};