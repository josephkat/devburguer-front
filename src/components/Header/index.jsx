import { Container, HeaderLink, LinkContainer,
     LogoutUser, Navigation, Options, Profile, Content } from './styles';
import { UserCircleIcon, ShoppingCartIcon } from "@phosphor-icons/react";
import { useNavigate, useResolvedPath } from 'react-router-dom';
import { useUser } from '../../hooks/UserContext.jsx';
import { useCart } from '../../hooks/CartContext.jsx';

export function Header() {
    const navigate = useNavigate();

    const { pathname } = useResolvedPath();
    const { logout, userInfo } = useUser();
    const { cartProducts } = useCart();
    const cartItemCount = cartProducts.reduce((total, product) => total + product.quantity, 0);

    function logoutUser() {
        logout();
        navigate('/login');
    } 

    return(
        <Container>
            <Content>
            <Navigation>
                <div>
                    <HeaderLink to="/" $isActive={pathname === '/'}>Home</HeaderLink>
                    <hr />
                    <HeaderLink to="/cardapio" $isActive={pathname === '/cardapio'}>Cardapio</HeaderLink>
                </div>
            </Navigation>
            <Options>
                <Profile>
                    <UserCircleIcon color="#fff" size={24}/>
                    <div>
                        <p>
                            olá <span>{userInfo.name}</span>
                        </p>
                        <LogoutUser onClick={logoutUser}>Sair</LogoutUser>
                    </div>
                </Profile>
                <LinkContainer>
                    <div className="cart-icon">
                        <ShoppingCartIcon color="#fff" size={24} />
                        {cartItemCount > 0 && <span>{cartItemCount}</span>}
                    </div>
                    <HeaderLink to="/carrinho">Carrinho</HeaderLink>
            </LinkContainer>
            </Options>
            
            </Content>
        </Container>
    );
}