import styled from "styled-components";

export const Button = styled.button`
    display: flex;
    gap: 4px;
    border: none;
    background: none;
    font-size: 20px;
    color: white;
    align-content: center;
    cursor: pointer;
    background: #c2c2c5;
    padding: 8px 12px;
    border-radius: 8px;
    font-weight: 300;

    &:active {
        opacity: 0.5;
        scale: 0.97;
    }

    transition: 0.2s opacity, 0.2s scale;
`;