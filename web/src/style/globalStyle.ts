import {createGlobalStyle} from "styled-components";
import '@style/font.css';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        //font-family: "Wanted Sans Variable", "Wanted Sans", sans-serif !important;
        font-family: "Elice DX Neolli", sans-serif !important;
    }

    .blinking-text {
        animation: blink-animation 1s steps(2, start) infinite;
    }

    @keyframes blink-animation {
        to {
            visibility: hidden;
        }
    }

    .fade-in-up {
        opacity: 0; /* 처음에 투명하게 시작 */
        transform: translateY(20px); /* 약간 아래에서 시작 */
        animation: fadeInUp 1s ease-out forwards; /* 1초 동안 애니메이션 실행 */
    }

    @keyframes fadeInUp {
        to {
            opacity: 1; /* 완전히 보이게 */
            transform: translateY(0); /* 제자리로 이동 */
        }
    }
    @keyframes vibrate {
        0% { transform: translate(0); }
        25% { transform: translate(2px, 2px); }
        50% { transform: translate(0); }
        75% { transform: translate(-2px, -2px); }
        100% { transform: translate(0); }
    }
`;