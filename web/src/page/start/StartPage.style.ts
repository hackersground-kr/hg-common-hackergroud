import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
    flex-direction: column;
    align-content: center;
`;

export const TitleContainer = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    color: white;
    align-items: center;
    margin-top: 14%;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
    left: 50%;
    transform: translateX(-50%);
`;

export const NameInput = styled.input`
    outline: none;
    padding: 12px 8px;
    background: transparent;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 1px;
    border-style: solid;
    border-color: rgba(238, 238, 238, 0.5);
    color: white;
    font-size: 20px;

    &::placeholder {
        color: rgba(255, 255, 255, 0.7);
    }
`;

export const StartButton = styled.button`
    display: flex;
    gap: 4px;
    position: absolute;
    border: none;
    background: none;
    left: 50%;
    transform: translateX(-50%);
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