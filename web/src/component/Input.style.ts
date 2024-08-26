import styled from "styled-components";

export const Input = styled.input`
    padding: 12px;
    background: transparent;
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    width: 400px;
    font-size: 16px;

    &::placeholder {
        color: rgba(0, 0, 0, 0.3);
    }
`;