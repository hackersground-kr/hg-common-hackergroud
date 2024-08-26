import * as S from "./ScenePage.style";
import { Background } from "@src/component/Background.style";
import { Chats, UserDictionary } from "@src/@types/types";
import React, { useState } from "react";
import TypingText from "@src/component/TypingText";
import PlaySong from "@src/designsystem/util/PlaySong";
import SelectText from "@src/component/SelectText";
import Loader from "@src/component/loader/Loader";
import { useLocation } from "react-router-dom";

interface ScenePageProps {
  backgroundUrl: string;
  currentChat: Chats;
  onEnded: () => void;
}

function ScenePage(props: ScenePageProps) {
  const location = useLocation();
  const name = location.state.name;
  const user = UserDictionary[props.currentChat.userType];

  const [displayText, setDisplayText] = useState("");

  return (
    <S.Container>
      <PlaySong path={props.currentChat.music} />
      <Background url={props.backgroundUrl} />
      <S.Content>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            animation: props.currentChat.vibration
              ? "vibrate .1s linear 10"
              : undefined,
          }}
          className={props.currentChat.vibration ? "" : "fade-in-up"}
        >
          <img
            style={{
              marginLeft: 40,
            }}
            src={user.image}
            width={256}
            alt={""}
          />
          {/*256 = 2 ^ 8 ㅋㅋ 깔끔하죠?*/}
          <S.Chat>
            <S.Name>{user.name ?? name}</S.Name>
            {props.currentChat.isLoading && <Loader />}
            {!props.currentChat.select &&
              props.currentChat.isLoading !== true && (
                <TypingText
                  text={props.currentChat.message}
                  value={displayText}
                  onChange={setDisplayText}
                  speed={50}
                  onEnded={props.onEnded}
                />
              )}
            {props.currentChat.select &&
              props.currentChat.isLoading !== true && (
                <SelectText
                  texts={props.currentChat.select.data}
                  onEnded={(text: string) => {
                    props.currentChat.select?.onSelect?.(text);
                    props.onEnded();
                  }}
                />
              )}
            {props.currentChat.children && props.currentChat.children()}
          </S.Chat>
        </div>
      </S.Content>
    </S.Container>
  );
}

export default React.memo(ScenePage);
