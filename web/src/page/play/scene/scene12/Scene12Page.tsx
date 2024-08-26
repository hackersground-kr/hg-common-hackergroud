import {SharedSceneProps} from "@src/page/play/scene/SharedSceneProps";
import ScenePage from "@src/page/play/scene/ScenePage";
import {UserType} from "@src/@types/types";
import React from "react";

export default function Scene12Page(
    {
        name,
        onEnded
    }: SharedSceneProps
) {
    return (
        <ScenePage
            backgroundUrl={'image/bg10.png'}
            chats={[
                {
                    userType: UserType.Narration,
                    message: '박병춘은 한참 동안 생각에 잠겼다'
                },
                {
                    userType: UserType.Narration,
                    message: '그리고 끝내 결심했다'
                },
                {
                    userType: UserType.Narration,
                    message: '개발자로 취업을 하지 않기로'
                },
                {
                    userType: UserType.Narration,
                    message: '그리고 의성으로 떠나기로 결심했다'
                }
            ]}
            onEnded={onEnded}
        />
    );
}