import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import logo from '../../assets/logo.png';
import { api } from '../../services/api.js';
import { useNavigate } from 'react-router-dom';



import {
    Container, Form, InputContainer,
    LeftContainer, RightContainer, Title, Link
} from './styles.js';

import { Button } from '../../components/Button/index.jsx';
import { toast } from 'react-toastify';

export function Register() {
    const navigate = useNavigate();

    const schema = yup.object({
        name: yup.string().required('nome obrigatório'),
        email: yup.string().email('digite um e-mail válido').required(),
        password: yup
            .string()
            .required('senha obrigatória')
            .min(6, 'a senha deve ter no mínimo 6 caracteres'),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref('password')], 'As senhas não são iguais')
            .required('confirmação de senha obrigatória'),
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
        try {
            const { status } = await api.post('/users', {
                name: data.name,
                email: data.email,
                password: data.password,
            },
                {
                    validateStatus: () => true,
                }
            );

            if (status === 201 || status === 200) {
                setTimeout(() => { navigate('/login'); }, 2000);
                toast.success('Conta criada com sucesso');
            } else if (status === 409) {
                toast.error('Email já cadastrado');
            } else {
                throw new Error();
            }
        } catch (error) {
            toast.error('Erro ao criar conta');
        }

    }

    return (
        <Container>
            <LeftContainer>
                <img src={logo} alt="logo-devburger" />
            </LeftContainer>

            <RightContainer>
                <Title>
                    criar conta
                </Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label htmlFor="">Nome</label>
                        <input type="text" {...register('name')} />
                        <p>{errors?.name?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label htmlFor="">Email</label>
                        <input type="email" {...register('email')} />
                        <p>{errors?.email?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label htmlFor="">Senha</label>
                        <input type="password" {...register('password')} />
                        <p>{errors?.password?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label htmlFor="">Confirmar Senha</label>
                        <input type="password" {...register('confirmPassword')} />
                        <p>{errors?.confirmPassword?.message}</p>
                    </InputContainer>

                    <Button type="submit">Criar Conta</Button>
                </Form>
                <p>
                    Já possui conta? <Link to="/login">entra aqui</Link>
                </p>
            </RightContainer>
        </Container>
    );
}