import styled from "styled-components";

export const StartButton = styled.button`
    display: flex;
    gap: 4px;
    border: none;
    background: none;
    font-size: 20px;
    color: white;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
    align-content: center;
    cursor: pointer;

    &:hover {
        text-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
    }

    &:active {
        opacity: 0.5;
        scale: 0.97;
    }

    transition: 0.2s text-shadow, 0.2s opacity, 0.2s scale;
`;