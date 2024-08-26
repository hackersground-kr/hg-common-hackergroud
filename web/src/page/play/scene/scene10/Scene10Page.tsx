import {SharedSceneProps} from "@src/page/play/scene/SharedSceneProps";
import ScenePage from "@src/page/play/scene/ScenePage";
import {UserType} from "@src/@types/types";
import React from "react";

export default function Scene10Page(
    {
        name,
        onEnded
    }: SharedSceneProps
) {
    return (

        <ScenePage
            backgroundUrl={'image/bg5.png'}
            chats={[
                {
                    userType: UserType.Hero2,
                    message: '뭐야...'
                },
                {
                    userType: UserType.Hero2,
                    message: '여긴 어디지…? 천국인가'
                }
            ]}
            onEnded={onEnded}
        />
    );
}