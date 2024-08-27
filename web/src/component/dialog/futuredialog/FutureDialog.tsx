import * as S from './FutureDialog.style';
import DialogTemplate from "@src/component/dialog/DialogTemplate";
import {Column} from "@designsystem/util/StyledFlex";
import Spacer from "@src/component/spacer/Spacer";
import ExpandRight from "@designsystem/foundation/iconography/icons/ExpandRight";
import {StartButton} from "@src/component/StartButton.style";
import React, {useContext, useEffect, useState} from "react";
import PlaySong from '@src/designsystem/util/PlaySong';
import Repository from "@repository/Repository";
import { AppStateContext } from '@src/provider/theme/AppStateContext';
import ImgGenReq from "@repository/ImgGenReq";
import cookie1, {sin} from "@lib/cookie";

interface FutureDialogProps {
    dismiss: (e: React.MouseEvent<HTMLDivElement>) => void;
    next: () => void
}

export default function FutureDialog(
    {
        dismiss,
        next
    }: FutureDialogProps
) {
    const [wow, setWow] = useState(false);
    const [res, setRes] = useState<string>();

    const gen = async () => {
        try {
            const req: ImgGenReq = {
                sin1: cookie1.getCookie(sin.s1) ?? '',
                sin2: cookie1.getCookie(sin.s2) ?? '',
                sin3: cookie1.getCookie(sin.s3) ?? '',
            }
            const res = await Repository.ai4(req);
            setRes(res.value);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        gen()
        setTimeout(() => {
            setWow(true);
        }, 300);
    }, []);

    return (
        <DialogTemplate dismiss={dismiss}>
            <PlaySong path='/music/end.mp3' loop={true}/>
            <S.Container>
                <S.Content>
                    {res ? (
                        <img
                            style={{
                                width: "100%",
                                height: "60vh",
                                borderRadius: 10,
                            }}

                            src={res}
                            width={256}
                            alt={""}
                        />
                    ): (
                        <div style={{
                            position: "relative",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "60vh",
                            zIndex: 1,
                            backgroundColor: "white",
                            borderRadius: 10,
                            display : "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <span>이미지 생성중</span>
                        </div>
                    )
                    }
                    <div style={{width: 12}}></div>
                    <StartButton
                        style={{
                            minWidth: 80,
                            alignItems: "flex-end"
                        }}
                        onClick={() => {
                        next()
                    }}>
                        다음으로
                    </StartButton>
                </S.Content>
            </S.Container>
        </DialogTemplate>
    );
}