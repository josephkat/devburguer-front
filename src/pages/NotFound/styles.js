import styled from 'styled-components';

export const Container = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 24px;
    background-color: ${(props) => props.theme.secondWhite};
    color: ${(props) => props.theme.mainBlack};
    font-family: ${(props) => props.theme.poppinsFont};
    text-align: center;
`;

export const Content = styled.div`
    max-width: 480px;

    p {
        margin: 0 0 24px;
    }
`;

export const StatusCode = styled.p`
    margin: 0 0 8px;
    color: ${(props) => props.theme.purple};
    font-size: 96px;
    font-weight: 800;
    line-height: 1;
`;

export const Title = styled.h1`
    margin: 0 0 12px;
    font-size: 28px;
`;

export const HomeLink = styled.a`
    display: inline-block;
    padding: 12px 20px;
    border-radius: 6px;
    background-color: ${(props) => props.theme.purple};
    color: ${(props) => props.theme.white};
    font-weight: 600;
    text-decoration: none;

    &:hover {
        background-color: ${(props) => props.theme.darkPurple};
    }
`;
