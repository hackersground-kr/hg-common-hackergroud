import styled from "styled-components";

export const Background = styled.div<{ url: string }>`
    background: url(${({url}) => url}) no-repeat 50% 50%;
    width: 100%;
    height: 100%;
    background-size: cover;
    filter: blur(5px);
    transform: scale(1.03);

    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -o-filter: blur(5px);
    -ms-filter: blur(5px);
`;