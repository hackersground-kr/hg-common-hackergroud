import React from "react";
import {css, RuleSet, useTheme} from "styled-components";

import * as S from "@designsystem/component/button/button/USButton.style";
import {ButtonStyles, ButtonType} from "@designsystem/component/button/type/ButtonType";
import {Row} from "@designsystem/util/StyledFlex";
import USIcon, {IconType} from "@designsystem/foundation/iconography/USIcon";
import USLoader from "@designsystem/component/loader/USLoader";

interface USButtonProps {
    text: string;
    type: ButtonType;
    onClick: () => void,
    leadingIcon?: IconType,
    trailingIcon?: IconType,
    isEnabled?: boolean,
    isLoading?: boolean,
    customStyle?: RuleSet;
}

const USButton = (
    {
        text,
        type,
        onClick,
        leadingIcon,
        trailingIcon,
        isEnabled = true,
        isLoading = false,
        customStyle,
        ...props
    }: USButtonProps
) => {

    const theme = useTheme();
    const style = ButtonStyles[type];
    const color = isEnabled ? theme.buttonText : theme.buttonTextDisabled;

    return (
        <S.USButtonStyle
            onClick={() => {
                if (isLoading || !isEnabled) return;
                onClick();
            }}
            style={style}
            customStyle={customStyle}
            isLoading={isLoading}
            disabled={!isEnabled}
            {...props}>
            <Row
                $columnGap={ButtonStyles[type].labelSpacing}
                $alignItems={'center'}
                $customStyle={css`
                    opacity: ${isLoading ? 0 : 1};
                `}>
                {leadingIcon && <USIcon type={leadingIcon} size={20} tint={color}/>}
                {text}
                {trailingIcon && <USIcon type={trailingIcon} size={20} tint={color}/>}
            </Row>
            {isLoading && <USLoader customStyle={css`position: absolute !important;`} color={color}/>}
        </S.USButtonStyle>
    );
};

export default USButton;