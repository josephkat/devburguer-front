
import { useEffect, useState } from 'react';
import {
    Banner, CategoryMenu, ProductsContainer,
    CategoryItem,
    Container
} from './styles';

import { formatPrice } from '../../utils/formatPrice';
import { api } from '../../services/api';
import { CardProduct } from '../../components/CardProduct';
import { useLocation, useNavigate } from 'react-router-dom';


export function Menu() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setfilteredProducts] = useState([]);
    

    const navigate = useNavigate();

    const { search } = useLocation();

    const queryParms = new URLSearchParams(search);

    const [activeCategory, setActiveCategory] = useState(() => {
        const categoryId = +queryParms.get('categoria');

        if(categoryId) {
            return categoryId;
        }
        return 0;
    });

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories');

            const newCategories = [{ id: 0, name: 'Todas' }, ...data];

            setCategories(newCategories);
        }

        async function loadProducts() {
            const { data } = await api.get('/products');

            const newProducts = data.map((product) => ({
                ...product,
                currencyValue: formatPrice(product.price),
            }));
            setProducts(newProducts);
        }

        loadCategories();
        loadProducts();
    }, []);

    useEffect(() => {
        if(activeCategory === 0) {
            setfilteredProducts(products)
        } else {
            const newFilteredProducts = products.filter(
                (product) => product.category_id === activeCategory,
            );
            setfilteredProducts(newFilteredProducts);
        }
    }, [products, activeCategory])

    return (
        <main>
            <Banner>
                <h1>
                    O MELHOR <br /> HAMBURGER <br /> ESTÁ AQUI! <br />
                    <span> Esse cardápio está irresistível!</span>
                </h1>
            </Banner>
            <Container>
                <CategoryMenu>
                    {categories.map((category) => (
                        <CategoryItem
                            key={category.id}
                            $isActiveCategory={category.id === activeCategory}
                            onClick={() => {
                                navigate({
                                    pathname: '/cardapio',
                                    search: `?categoria=${category.id}`,
                                },
                                {
                                    replace: true,
                                },
                            );
                             setActiveCategory(category.id);
                            }}
                        >
                            {category.name}
                        </CategoryItem>
                    ))}
                </CategoryMenu>
                <ProductsContainer>
                    {filteredProducts.map((product) => (
                        <CardProduct product={product} key={product.id} />
                    ))}

                </ProductsContainer>
            </Container>
        </main>
    );
}