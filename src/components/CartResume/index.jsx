import { formatPrice } from "../../utils/formatPrice";
import { useCart } from "../../hooks/CartContext";

import { Button } from "../Button";
import { Container, MainContainer } from "./styles";
import { useNavigate } from "react-router-dom";

export function CartResume({ 
    buttonText = 'Continuar', 
    showReviewlink = false,
    onContinue,
}) {
    const navigate = useNavigate();

    const { cartProducts } = useCart();
    const finalPrice = cartProducts.reduce(
        (total, product) => total + product.price * product.quantity,
        0,
    );
    const deliveryTax = 500;

    const handleContinue = onContinue ?? (() => navigate('/cartfinalize'));


    return (
        <MainContainer>
            <Container>
                <div className="container-top">
                    <h2 className="title">Resumo de Pedido</h2>
                    <p className="items">Itens</p>
                    <p className="items-price">{formatPrice(finalPrice)}</p>
                    <p className="delivery-tax">Taxa de Entrega</p>
                    <p className="delivery-tax-price">{formatPrice(deliveryTax)}</p>
                </div>
                <div className="container-bottom">
                    <p>Total</p>
                    <p>{formatPrice(finalPrice + deliveryTax)}</p>
                </div>
            </Container>

            {showReviewlink && (
                <p className="review-link" onClick={() => navigate('/carrinho')}>
                    Rever meu pedido
                </p>
            )}

            <Button onClick={handleContinue}>{buttonText}</Button>
        </MainContainer>
    );
}