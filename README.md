# PizzariaDSA3

Frontend de pizzaria desenvolvido com React + Vite para apresentação escolar.

## Projeto

O sistema permite navegar pelo cardápio, filtrar pizzas por categoria, adicionar itens ao carrinho, alterar quantidades, finalizar um pedido mockado e acessar um painel administrativo simples para gerenciar pizzas visualmente.

## Stack

- React + Vite
- JavaScript
- TailwindCSS
- React Router DOM
- Axios

## Funcionalidades

- Home responsiva
- Cardápio com filtro por categoria
- Carrinho com subtotal e total
- Checkout com nome, telefone e endereço
- Login administrativo mockado
- CRUD visual de pizzas
- Services preparados para integração futura com API

## Rotas

- `/`
- `/cardapio`
- `/carrinho`
- `/pedido`
- `/admin/login`
- `/admin`
- `/admin/pizzas`

## Login Admin

- E-mail: `admin@pizza.com`
- Senha: `123456`

O login é salvo no `localStorage` com a chave `pizzaAdminLogged`.

## Integração Futura

O frontend já possui Axios centralizado em `src/services/api.js`:

```js
import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})
```

Configure a variável de ambiente:

```env
VITE_API_URL=http://localhost:8080/api
```

Enquanto a API não estiver disponível, o sistema usa os dados mockados de pizzas para manter a apresentação funcionando.

## Como Rodar

```bash
cd pizzaria-web
npm install
npm run dev
```

## Build

```bash
cd pizzaria-web
npm run build
```
