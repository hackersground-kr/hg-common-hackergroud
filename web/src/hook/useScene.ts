import {useLocation} from "react-router-dom";
import {useCallback, useState} from "react";
import {Chats, UserDictionary} from "@src/@types/types";


const useScene = (chats: Chats[], onEnded: () => void) => {

    const [selectedIdx, setSelectedIdx] = useState(0);
    const chat = chats[selectedIdx];

    const handleKeyDown = useCallback(() => {

        if (selectedIdx + 1 >= chats.length) {
            onEnded();
            return;
        }

        setSelectedIdx(i => i + 1);
    }, [chats.length, onEnded, selectedIdx]);

    return {
        chat,
        handleKeyDown,
    };
};

export default useScene;