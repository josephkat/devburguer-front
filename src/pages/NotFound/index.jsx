import { Link } from 'react-router-dom';
import { Container, Content, HomeLink, StatusCode, Title } from './styles';

export function NotFound() {
    return (
        <Container>
            <Content>
                <StatusCode>404</StatusCode>
                <Title>Página não encontrada</Title>
                <p>Não encontramos o endereço que você tentou acessar.</p>
                <HomeLink as={Link} to="/">Voltar para o início</HomeLink>
            </Content>
        </Container>
    );
}
