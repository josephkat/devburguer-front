import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Background from '../../assets/background.svg';
import BannerHome from '../../assets/Group.svg';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #f0f0f0;
    background: linear-gradient(
        rgba(255, 255, 255, 0.6),
            rgba(255, 255, 255, 0.6)
    ),
    url(${Background}); 
`;

export const Banner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 180px;
    width: 100%;

    background: url('${BannerHome}');
    background-size: cover;
    background-position: center;
    background-color: #1f1f1f;
    position: relative;

    img {
        height: 130px;
        cursor: pointer;
    }
`;

export const Title = styled.div`
    font-size: 32px;
    font-weight: 800;
    padding-bottom: 12px;
    color: #61a120;
    text-align: center;
    position: relative;

    &::after {
        content: ''; 
        position: absolute;
        bottom: 0;
        left: 50%;

        transform: translateX(-50%);
        width: 90px;
        height: 4px;
        background-color: #61a120; 
    }
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 30%;
    padding: 40px;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 40px;
    gap: 20px;
`;