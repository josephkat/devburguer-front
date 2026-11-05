import { useEffect, useState } from 'react';
import { api } from '../../services/api.js';

import CarouselModule from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from 'react-router-dom';

import { Container, Title, ContainerItems, CategoryButton } from './styles.js';

const Carousel = CarouselModule.default;

export function CategoriesCarousel() {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        async function loadCategories() {
            const { data } = await api.get('/categories');

            setCategories(data);
        }

        loadCategories();
    }, []);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1280 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 690 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 690, min: 0 },
            items: 2,
        },
    };

    return (
        <Container>
            <Title>Categorias</Title>
            <Carousel
                responsive={responsive}
                infinite
                partialVisible={false}
                itemClass="carousel-item"
            >

                {categories.map((category) => (
                    <ContainerItems key={category.id} imageUrl={category.url}>
                        <CategoryButton
                            onClick={() => {
                                navigate({
                                    pathname: '/cardapio',
                                    search: `?categoria=${category.id}`,
                                },
                                {
                                    replace: true,
                                },
                                )
                            }}
                        >
                            {category.name}
                        </CategoryButton>
                    </ContainerItems>
                ))}

            </Carousel>
        </Container>
    );
}