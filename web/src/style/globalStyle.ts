import {createGlobalStyle} from "styled-components";
import '@style/font.css';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        //font-family: "Wanted Sans Variable", "Wanted Sans", sans-serif !important;
        font-family: "Elice DX Neolli OTF", sans-serif !important;
    }

    .blinking-text {
        animation: blink-animation 1s steps(2, start) infinite;
    }

    @keyframes blink-animation {
        to {
            visibility: hidden;
        }
    }
`;