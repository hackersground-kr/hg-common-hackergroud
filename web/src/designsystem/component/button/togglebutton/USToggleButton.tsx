import * as S from "@designsystem/component/button/togglebutton/USToggleButton.style";

interface USToggleButtonProps {
    checked: boolean;
    onClick: () => void;
}

const USToggleButton = (
    {
        checked,
        onClick
    }: USToggleButtonProps
) => {
    return (
        <S.USToggleButtonStyle checked={checked} onClick={onClick}>
            <S.Indicator/>
        </S.USToggleButtonStyle>
    );
}

export default USToggleButton;