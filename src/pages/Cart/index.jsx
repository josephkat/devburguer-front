import Logo from '../../assets/Logo.svg'
import { CartItems, CartResume } from '../../components';
import { useNavigate } from 'react-router-dom';

import {
    Container,
    Banner,
    Title,
    Content
} from './styles';

export function Cart() {
    const navigate = useNavigate();
    return (
        <Container>
            <Banner>
                <img src={Logo} alt="logo devburguer" onClick={() => navigate('/')}/>
            </Banner>
            <Title>Checkout - Pedido</Title>
            <Content>
                <CartItems />
                <CartResume />
            </Content>
        </Container>
    );
}