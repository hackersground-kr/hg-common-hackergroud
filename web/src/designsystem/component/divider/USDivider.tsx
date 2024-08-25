import * as S from "@designsystem/component/divider/USDividerContainer";

export enum DividerType {
    Thin,
    Thick
}

export enum Direction {
    Horizontal,
    Vertical
}

interface USDividerProps {
    direction?: Direction;
    type?: DividerType;
    color?: string;
}

const USDivider = (
    {
        direction,
        type = DividerType.Thin,
        color
    }: USDividerProps
) => {
    return (
        <S.USDividerContainer direction={direction} type={type} color={color}/>
    );
};

export default USDivider;