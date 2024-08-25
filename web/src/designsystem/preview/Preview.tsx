import {useState} from "react";
import {css, useTheme} from "styled-components";

import {Column, Row} from "@designsystem/util/StyledFlex";
import USButton from "@designsystem/component/button/button/USButton";
import {ButtonType} from "@designsystem/component/button/type/ButtonType";
import USLoader from "@designsystem/component/loader/USLoader";
import USDivider, {DividerType} from "@designsystem/component/divider/USDivider";
import {ShadowType} from "@designsystem/foundation/shadow/USShadow";
import USTextField from "@designsystem/component/textfield/USTextField";
import {IconType} from "@designsystem/foundation/iconography/USIcon";
import USTextArea from "@designsystem/component/textarea/USTextArea";
import {ShadowRectangle} from "@designsystem/preview/ShadowRectangle";

const Preview = () => {

    const theme = useTheme();
    const [text, setText] = useState("");

    return (
        <Row $columnGap={8} padding={'8px'} $customStyle={css`background-color: ${theme.background}`}>
            <Column $rowGap={8}>
                <USButton onClick={() => {
                }} text={'시작하기'} leadingIcon={IconType.Send} type={ButtonType.CTA} customStyle={css`width: 200px;`}/>
                <USButton onClick={() => {
                }} text={'시작하기'} leadingIcon={IconType.Send} type={ButtonType.Large}/>
                <USButton onClick={() => {
                }} text={'시작하기'} leadingIcon={IconType.Send} type={ButtonType.Medium}/>
                <USButton onClick={() => {
                }} text={'시작하기'} leadingIcon={IconType.Send} type={ButtonType.Small}/>
                <USButton onClick={() => {
                }} text={'시작하기'} leadingIcon={IconType.Send} type={ButtonType.CTA} customStyle={css`width: 200px;`}
                          isEnabled={false}/>
                <USButton onClick={() => {
                }} text={'시작하기'} leadingIcon={IconType.Send} type={ButtonType.Large} isEnabled={false}/>
                <USButton onClick={() => {
                }} text={'시작하기'} leadingIcon={IconType.Send} type={ButtonType.Medium} isEnabled={false}/>
                <USButton onClick={() => {
                }} text={'시작하기'} leadingIcon={IconType.Send} type={ButtonType.Small} isEnabled={false}/>
                <USButton onClick={() => {
                }} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send} type={ButtonType.CTA}
                          customStyle={css`width: 200px;`}/>
                <USButton onClick={() => {
                }} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send} type={ButtonType.Large}/>
                <USButton onClick={() => {
                }} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send} type={ButtonType.Medium}/>
                <USButton onClick={() => {
                }} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send} type={ButtonType.Small}/>
                <USButton onClick={() => {
                }} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send} type={ButtonType.CTA}
                          customStyle={css`width: 200px;`} isEnabled={false}/>
                <USButton onClick={() => {
                }} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send} type={ButtonType.Large}
                          isEnabled={false}/>
                <USButton onClick={() => {
                }} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send} type={ButtonType.Medium}
                          isEnabled={false}/>
                <USButton onClick={() => {
                }} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send} type={ButtonType.Small}
                          isEnabled={false}/>
            </Column>
            <USLoader/>
            <Column $rowGap={8}>
                <USTextField hint={'아이디를 입력해주세요'} text={text} onChange={text => setText(text)}/>
                <USTextField hint={'아이디를 입력해주세요'} text={text} isSecured={true} onChange={text => setText(text)}/>
                <USTextField hint={'아이디를 입력해주세요'} text={text} isEnabled={false} isSecured={true}
                             onChange={text => setText(text)}/>
            </Column>
            <Column $rowGap={8}>
                <USTextArea
                    hint={'내용을 입력해주세요'}
                    text={text}
                    onChange={text => setText(text)}
                    customStyle={css`
                        height: 100px;
                    `}/>
            </Column>
            <Column $rowGap={8}>
                <ShadowRectangle shadowType={ShadowType.EvBlack1}/>
                <ShadowRectangle shadowType={ShadowType.EvBlack2}/>
                <ShadowRectangle shadowType={ShadowType.EvBlack3}/>
            </Column>
            <Column $rowGap={8} $customStyle={css`flex: 1`}>
                <USDivider type={DividerType.Thick}/>
                <USDivider type={DividerType.Thin}/>
            </Column>
        </Row>
    );
};

export default Preview;