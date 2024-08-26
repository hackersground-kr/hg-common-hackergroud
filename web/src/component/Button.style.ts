import styled from "styled-components";

export const Button = styled.button`
    display: flex;
    gap: 4px;
    border: none;
    background: none;
    font-size: 18px;
    color: white;
    align-content: center;
    background: #c2c2c5;
    padding: 8px 12px;
    border-radius: 8px;
    font-weight: 300;

    &:enabled:active {
        opacity: 0.5;
        scale: 0.97;
    }
    
    &:disabled {
        opacity: 0.5;
    }
    
    &:enabled {
        cursor: pointer;
    }

    transition: 0.2s opacity, 0.2s scale;
`;