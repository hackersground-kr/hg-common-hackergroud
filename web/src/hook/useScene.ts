import {useCallback, useState} from "react";
import {Chats} from "@src/@types/types";

const useScene = (chats: Chats[], onEnded: () => void) => {

    const [selectedIdx, setSelectedIdx] = useState(0);
    const chat = chats[selectedIdx];
    // console.log(selectedIdx);
    const handleKeyDown = useCallback(() => {
        if (chat.disabledKeyDown) {
            return;
        }

        if (selectedIdx + 1 >= chats.length) {
            onEnded();
            return;
        }

        setSelectedIdx(i => i + 1);
    }, [chat?.disabledKeyDown ?? false, chats.length, onEnded, selectedIdx]);

    const handleKeyDownCount = useCallback((count: number) => {
        if (chat.disabledKeyDown) {
            return;
        }

        if (selectedIdx + count >= chats.length) {
            onEnded();
            return;
        }

        setSelectedIdx(i => i + count);
    }, [chat?.disabledKeyDown ?? false, chats.length, onEnded, selectedIdx]);

    return {
        selectedIdx,
        setSelectedIdx,
        chat,
        handleKeyDown,
        handleKeyDownCount
    };
};

export default useScene;