import { navLinks } from "./navLinks";
import Logo from '../../assets/Logo.svg';
import { useNavigate, useResolvedPath } from 'react-router-dom';
import { Container, Footer, NavLink, NavLinkContainer } from "./styles";
import { useUser } from '../../hooks/UserContext';

export function SideNavAdmin() {
    const navigate = useNavigate();
    const { logout } = useUser();
    const { pathname } = useResolvedPath()

    return (
        <Container>
            <img src={Logo} alt="logo imagem" onClick={() => navigate('/admin/pedidos')} />
            <NavLinkContainer>
                {navLinks.map((link) => (
                    <NavLink 
                    key={link.id} 
                    to={link.path}
                    $isActive={pathname === link.path}
                    >
                        {link.icons}
                        <span>{link.label}</span>
                    </NavLink>
                ))}
            </NavLinkContainer>
            <Footer>
                <NavLink onClick={logout}>Sair</NavLink>
            </Footer>
        </Container>
    )
}