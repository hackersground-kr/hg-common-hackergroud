import {useLocation} from "react-router-dom";
import {useCallback, useState} from "react";
import {Chats, UserDictionary} from "@src/@types/types";


const useScene = (chats: Chats[], onEnded: () => void) => {

    const [selectedIdx, setSelectedIdx] = useState(0);
    const chat = chats[selectedIdx];

    const handleKeyDown = useCallback(() => {
        if (chat.disabledKeyDown) {
            return;
        }

        if (selectedIdx + 1 >= chats.length) {
            onEnded();
            return;
        }

        setSelectedIdx(i => i + 1);
    }, [chat.disabledKeyDown, chats.length, onEnded, selectedIdx]);

    return {
        selectedIdx,
        setSelectedIdx,
        chat,
        handleKeyDown,
    };
};

export default useScene;