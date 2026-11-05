import { Main, Banner, Container, Content } from './styles';
import { CategoriesCarousel } from '../../components/CategoriesCarousel';
import { OffersCarousel } from '../../components/OffersCarousel';

export function Home() {
    return (
        <Main>
            <Banner>
                <h1>Bem-vindo!</h1>
            </Banner>
            <Container>
                <Content>
                    <CategoriesCarousel />
                    <OffersCarousel />
                </Content>
            </Container>
        </Main>
    );
}