import * as S from './EndDialog.style';
import DialogTemplate from "@src/component/dialog/DialogTemplate";
import {Column} from "@designsystem/util/StyledFlex";
import Spacer from "@src/component/spacer/Spacer";
import ExpandRight from "@designsystem/foundation/iconography/icons/ExpandRight";
import {StartButton} from "@src/component/StartButton.style";
import React, {useEffect, useState} from "react";
import PlaySong from '@src/designsystem/util/PlaySong';

interface EndDialogProps {
    dismiss: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default function EndDialog(
    {
        dismiss
    }: EndDialogProps
) {

    const [wow, setWow] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setWow(true);
        }, 300);
    }, []);

    return (
        <DialogTemplate dismiss={dismiss}>
            <PlaySong path='/music/end.mp3'/>
            <S.Container>
                <S.Content>
                    <Column $gap={4}>
                        <S.End>End</S.End>
                        <S.Promotion>게임을 개선하기 위해 설문을 받고 있습니다.</S.Promotion>
                    </Column>
                    <Spacer/>
                    <StartButton
                        onClick={() => {
                            if (!wow) return;
                            window.open('https://forms.gle/SMSCFjSKxwUYnr9v6\n');
                        }}
                    >
                        시작하기
                        <ExpandRight fill={'white'}/>
                    </StartButton>
                </S.Content>
            </S.Container>
        </DialogTemplate>
    );
}