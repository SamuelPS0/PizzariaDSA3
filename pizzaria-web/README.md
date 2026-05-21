# Bella Pizza

Frontend web simplificado para uma pizzaria, feito para TCC escolar.

## Stack

- React + Vite
- JavaScript
- React Router DOM
- TailwindCSS
- Axios

## Funcionalidades

- Home da pizzaria
- Cardápio com filtro por categoria
- Carrinho com quantidade, subtotal e total
- Finalização de pedido mockada
- Login administrativo mockado
- Painel administrativo simples
- CRUD visual de pizzas

## Rotas

- `/`
- `/cardapio`
- `/carrinho`
- `/pedido`
- `/admin/login`
- `/admin`
- `/admin/pizzas`

## Login admin

- E-mail: `admin@pizza.com`
- Senha: `123456`

O login é mockado e salvo no `localStorage` com a chave `pizzaAdminLogged`.

## Fluxo principal

1. Acesse `/cardapio`.
2. Filtre as pizzas por categoria.
3. Adicione pizzas ao carrinho.
4. Altere quantidades em `/carrinho`.
5. Finalize o pedido em `/pedido` preenchendo nome, telefone e endereço.

## Painel administrativo

1. Acesse `/admin/login`.
2. Entre com `admin@pizza.com` e `123456`.
3. Use `/admin/pizzas` para cadastrar, editar e excluir pizzas visualmente.

## Comandos

```bash
npm install
npm run dev
npm run build
```

## Integração futura

Copie `.env.example` para `.env` e ajuste a URL da API quando o backend estiver pronto.
