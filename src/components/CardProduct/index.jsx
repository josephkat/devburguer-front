import PropTypes from "prop-types";
import { CartButton } from "../CartButton";

import { CardImage, Container } from "./styles";

import {useCart } from '../../hooks/CartContext';
import { useNavigate } from 'react-router-dom';

export function CardProduct({ product }) {
    const { putProductInCart } = useCart();
    const navigate = useNavigate();

    function handleAddToCart() {
        putProductInCart(product);
        navigate('/carrinho');
    }

    return( 
        <Container>
            <CardImage src={product.url} alt={product.name}/>
            <div>
                <p>{product.name}</p>
                <strong>{product.currencyValue}</strong>
                <strong>{product.description}</strong>
            </div>
            <CartButton onClick={handleAddToCart}>
            </CartButton>
        </Container>
    );
}

CardProduct.propTypes = {
    product: PropTypes.shape({
        url: PropTypes.string,
        name: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number,
    }).isRequired,
};