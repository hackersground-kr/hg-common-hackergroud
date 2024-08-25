import {RuleSet} from "styled-components";

import * as S from "@designsystem/component/loader/USLoader.style";

export interface USLoaderProps {
    color?: string,
    size?: number,
    customStyle?: RuleSet,
}

const USLoader = (
    {
        color,
        size,
        customStyle,
        ...props
    }: USLoaderProps
) => {
    return (
        <S.LoaderContainer customStyle={customStyle} {...props} size={size}>
            <S.LoaderCircle size={size}>
                <S.LoaderCircleAfter size={size} color={color}/>
            </S.LoaderCircle>
        </S.LoaderContainer>
    );
}

export default USLoader;
