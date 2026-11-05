import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import logo from '../../assets/logo.png';
import { api } from '../../services/api.js';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks/UserContext.jsx';

import {
    Container, Form, InputContainer,
    LeftContainer, RightContainer, Title, Link
} from './styles';

import { Button } from '../../components/Button';
import { toast } from 'react-toastify';

export function Login() {
    const navigate = useNavigate();
    const { putUserData } = useUser();

    const schema = yup.object({
        email: yup.string().email('digite um e-mail válido').required(),
        password: yup.string('senha obrigatória').required().min(6),
    })
        .required();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = async (data) => {
        const response = await toast.promise(
            api.post('/session', {
                email: data.email,
                password: data.password,
            }),
            {
                pending: 'verificando seus dados',
                success: {
                    render({ data }) {
                        putUserData(data.data);
                        setTimeout(() => { navigate('/'); }, 2000);
                        return 'Login realizado com sucesso';
                    }
                },
                error: 'Erro ao realizar o login',
            }
        );
        
    };

    return (
        <Container>
            <LeftContainer>
                <img src={logo} alt="logo-devburger" />
            </LeftContainer>

            <RightContainer>
                <Title>
                    Olá seja bem vindo ao <span>Dev Burguer!</span> <br />
                    Acesse com seu <span>Login e senha.</span>
                </Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label htmlFor="">Email</label>
                        <input type="email"  {...register('email')} />
                        <p>{errors?.email?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label htmlFor="">Senha</label>
                        <input type="password" {...register('password')} />
                        <p>{errors?.password?.message}</p>
                    </InputContainer>
                    <p>Esqueci minha senha.</p>
                    <Button type="submit">Entrar</Button>
                </Form>
                <p>
                    Não possui conta?<Link to="/register"> cria aqui</Link>
                </p>
            </RightContainer>
        </Container>
    );
}