import React from "react";
import ScenePage from "@src/page/play/scene/ScenePage";
import {UserType} from "@src/@types/types";

export default function PlayPage() {

    return (
        <ScenePage
            backgroundUrl={'image/bg3.png'}
            chats={[
                {
                    userType: UserType.Hero,
                    message: '흠... 오늘따라 왜 이렇게 상쾌하지?'
                },
                {
                    userType: UserType.Narration,
                    message: '평소보다 더 잘 일어난 박병춘은 회사를 가기위해 샤워를 하고 나와 업무 확인을 하기위해 폰을 본다.'
                }
            ]}
            onEnded={() => {

            }}
        />
    )
}