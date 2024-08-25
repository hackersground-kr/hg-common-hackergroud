import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
`;

export const Background = styled.div`
    background: url(image/bg1.webp) no-repeat 50% 50%;
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

export const Content = styled.div`
    // layout
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    bottom: 72px;
`;

export const Name = styled.h1`
    // layout
    position: absolute;
    left: 0;
    top: 0;
    padding: 12px 8px;
    margin-left: 24px;
    margin-top: -20px;
    
    // style
    font-size: 26px;
    font-weight: 500;
    background: white;
    border-radius: 12px;
    box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.04);
`

export const Chat = styled.div`
    // layout
    display: flex;
    padding: 40px 0;
    justify-content: center;
    position: relative;
    gap: 8px;

    // style
    color: black;
    background: rgba(252, 253, 252, 0.9);
    border-radius: 15px;
    font-weight: 300;
    font-size: 22px;
`;