import styled from 'styled-components';
import { Link as ReactLink } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
`;

export const LeftContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    max-width: 50%;

    justify-content: center;
    align-items: center;

    img {
        width: 100%;
        height: 100%;
        background-size: cover;
    }
`;

export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    max-width: 50%;
    outline: none;

    p {
        font-size: 18px;
        font-weight: 800;
        margin-top: 1rem;

        a {
            text-decoration: underline;
        }
    }
`;

export const Title = styled.h2`
    font-family: "Road Rage", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 40px;
    color: #9758a6;
    text-transform: uppercase;
    margin-bottom: 2rem;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-width: 400px;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;

    input {
        width: 100%;
        border: 1px solid #CCC;
        height: 52px;
        border-radius: 5px;
        padding: 0 16px;
    }

    label {
        font-size: 18px;
        font-weight: 600;
    }

    p {
        font-size: 14px;
        line-height: 80%;
        color: #cf3057;
        font-weight: 600;
        height: 8px;
    }
`;


export const Button = styled.button``;

export const Link = styled(ReactLink)`
    text-decoration: none;
    color: #9758a6;`
;


