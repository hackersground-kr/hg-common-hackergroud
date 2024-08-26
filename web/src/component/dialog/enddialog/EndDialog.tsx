import * as S from './EndDialog.style';
import DialogTemplate from "@src/component/dialog/DialogTemplate";
import {Column, Row} from "@designsystem/util/StyledFlex";
import Spacer from "@src/component/spacer/Spacer";
import ExpandRight from "@designsystem/foundation/iconography/icons/ExpandRight";
import {StartButton} from "@src/component/StartButton.style";

interface EndDialogProps {
    dismiss: () => void;
}

export default function EndDialog(
    {
        dismiss
    }: EndDialogProps
) {
    return (
        <DialogTemplate dismiss={dismiss}>
            <S.Container>
                <S.Content>
                    <Column $gap={4}>
                        <S.End>End</S.End>
                        <S.Promotion>게임을 개선하기 위해 설문을 받고 있습니다.</S.Promotion>
                    </Column>
                    <Spacer/>
                    <StartButton>
                        시작하기
                        <ExpandRight fill={'white'}/>
                    </StartButton>
                </S.Content>
            </S.Container>
        </DialogTemplate>
    );
}