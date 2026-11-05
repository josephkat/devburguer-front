import Cart from '../../assets/cart.svg';
import PropTypes from "prop-types";

import { ContainerButton } from "./styles";

export function CartButton({ children , ...props}) {
    return (
        <ContainerButton {...props}>
            <img src={Cart} alt='carrinho-de-compras'/>
            {children}
        </ContainerButton>
    );
}

CartButton.prototype = {
    children: PropTypes.string,
};