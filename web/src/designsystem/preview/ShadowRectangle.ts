import styled, {css} from "styled-components";
import {USShadow, ShadowType} from "@designsystem/foundation/shadow/USShadow";

export const ShadowRectangle = styled.div<{
    shadowType: ShadowType
}>`
    width: 100px;
    height: 100px;
    background-color: ${({theme}) => theme.background};
    ${({shadowType}) => css`
        ${USShadow(shadowType)};
    `};
`