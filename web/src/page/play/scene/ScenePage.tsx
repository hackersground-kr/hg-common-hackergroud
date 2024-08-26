import * as S from './ScenePage.style';
import {Background} from "@src/component/Background.style";
import {Chats, UserDictionary} from "@src/@types/types";
import React, {useState} from "react";
import {useLocation} from "react-router-dom";
import TypingText from "@src/component/TypingText";
import PlaySong from '@src/designsystem/util/PlaySong';
import SelectText from '@src/component/SelectText';
import Loader from '@src/component/loader/Loader';

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
            <PlaySong path={chat.music}/>
            <Background url={backgroundUrl}/>
            <S.Content>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        animation: chat.vibration ? 'vibrate .1s linear 10' : undefined,
                    }}
                    className={chat.vibration ? '' : 'fade-in-up'}
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
                        {chat.isLoading === true && (
                            <Loader/>
                        )}
                        {!chat.select && chat.isLoading !== true && (
                            <TypingText
                                text={chat.message}
                                speed={50}
                                onEnded={handleKeyDown}
                            />
                        )}
                        {chat.select && chat.isLoading !== true && (
                            <SelectText
                                texts={chat.select.data}
                                onEnded={(text: string) => {
                                    chat.select?.onSelect?.(text);
                                }}
                            />
                        )}
                        {chat.children && chat.children}
                    </S.Chat>
                </div>
            </S.Content>
        </S.Container>
    );
};