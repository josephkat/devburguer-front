# DevBurguer Frontend

Frontend do projeto DevBurguer, desenvolvido em React com Vite para oferecer uma experiência de compra completa para clientes e administração.

## Visão geral

Este projeto é a interface web da aplicação de hambúrgueria, incluindo:

- página inicial com banner e destaques
- catálogo de produtos por categoria
- carrinho de compras
- fluxo de checkout e pagamento
- autenticação de usuários
- área administrativa para pedidos e produtos

## Stack utilizada

- React 19
- Vite
- React Router DOM
- Styled Components
- Emotion e MUI
- Axios
- React Hook Form + Yup
- Stripe React + Stripe.js
- ESLint + Prettier

## Estrutura do projeto

```text
src/
  components/
  config/
  hooks/
  layouts/
  pages/
  routes/
  services/
  styles/
  utils/
```

## Funcionalidades

- Layout responsivo para loja
- Catálogo com navegação por categorias
- Carrinho persistido em localStorage
- Fluxo de login e cadastro
- Finalização de pedido e checkout
- Integração com Stripe para pagamentos
- Painel administrativo para gestão de pedidos e produtos

## Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

- Node.js 18 ou superior
- npm
- um backend em execução para fornecer a API da aplicação

> O frontend aponta para `http://localhost:3001` por padrão no arquivo `src/services/api.js`. Caso seu backend use outra porta ou host, ajuste essa configuração.

## Instalação

```bash
npm install
```

## Executando em modo de desenvolvimento

```bash
npm run dev
```

A aplicação será iniciada em:

```text
http://localhost:5173
```

## Build de produção

```bash
npm run build
```

Para visualizar o build gerado:

```bash
npm run preview
```

## Lint

```bash
npm run lint
```

## Observações

Este frontend depende de uma API compatível com endpoints como:

- categorias
- produtos
- pedidos
- autenticação de usuários
- pagamento

Se o projeto backend do DevBurguer estiver em uso, ele deve estar rodando antes do frontend.

## Licença

Este projeto foi desenvolvido para fins educacionais e de demonstração, salvo indicação em contrário do mantenedor do repositório.
