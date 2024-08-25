import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background: aqua;
    align-content: center;
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    align-items: center;
    margin-top: 14%;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
`;

export const StartButton = styled.button`
    display: flex;
    gap: 8px;
    position: absolute;
    border: none;
    background: none;
    bottom: 82px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 16px;
    color: white;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
    align-content: center;
`