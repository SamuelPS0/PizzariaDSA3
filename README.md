Verifique as sprints e veja se está tudo correto

Pipeline Frontend Web — Sistema de Pizzaria

Projeto simplificado para TCC escolar, focado em um sistema web de pizzaria comum.

Stack:

React + Vite
TailwindCSS
React Router DOM
Vercel + GitHub

Escopo do frontend:

Home da pizzaria
Cardápio
Carrinho
Página de pedido
Painel administrativo simples
Gerenciamento de pizzas/categorias
Sprint 1 — Estrutura inicial e deploy
1. Objetivo da Sprint

Ter o projeto funcionando na Vercel com:

Home
Cardápio
Header/Footer
Rotas funcionando
Mock de pizzas

Deploy obrigatório já na primeira sprint.

2. Backlog de tarefas
Quem está no PC
Criar projeto Vite
Configurar Tailwind
Criar rotas
Criar layout
Criar mock de pizzas
Fazer deploy na Vercel
Quem está no celular
Criar README
Separar nomes/sabores de pizzas
Escolher imagens
Revisar organização do GitHub
Testar deploy da Vercel
3. Guia de implementação

Estrutura:

src/
  components/
  pages/
  routes/
  data/
  services/

Páginas:

Home.jsx
Menu.jsx
Cart.jsx
AdminLogin.jsx

Componentes:

Header.jsx
Footer.jsx
PizzaCard.jsx

Mock:

{
  id: 1,
  nome: "Calabresa",
  preco: 45.90,
  categoria: "Tradicional",
  descricao: "Molho, mussarela e calabresa",
  imagem: ""
}

Rotas:

/
/cardapio
/carrinho
/admin/login
4. Comandos
npm create vite@latest pizzaria-web -- --template react
cd pizzaria-web

npm install
npm install react-router-dom axios
npm install -D tailwindcss @tailwindcss/vite

Rodar:

npm run dev

Build:

npm run build

Git:

git add .
git commit -m "estrutura inicial"
git push origin main
5. Prompt para Codex
Crie um frontend React + Vite para uma pizzaria.

Use:
- React Router DOM
- TailwindCSS
- JavaScript

Crie:
- Home
- Menu
- Cart
- AdminLogin
- Header
- Footer
- PizzaCard

Crie mocks de pizzas.

Regras:
- Código simples
- Responsivo
- Componentes separados
- Sem bibliotecas pesadas
Sprint 2 — Cardápio e carrinho
1. Objetivo da Sprint

Usuário consegue:

Ver pizzas
Filtrar categorias
Adicionar ao carrinho
Alterar quantidade
Ver total
2. Backlog
PC
Criar filtro de categorias
Criar estado global simples do carrinho
Criar tela do carrinho
Criar cálculo total
Celular
Revisar preços
Revisar textos
Testar fluxo
Abrir issues no GitHub
3. Guia de implementação

Criar:

CategoryFilter.jsx
CartItem.jsx

Hooks:

useCart.js

Funções:

addToCart()
removeFromCart()
increaseQuantity()
decreaseQuantity()

Usar:

useState
useContext

Carrinho:

Produto
Quantidade
Subtotal
Total
4. Comandos
npm run dev
npm run build

Git:

git add .
git commit -m "cardapio e carrinho"
git push origin main
5. Prompt para Codex
Implemente o sistema de carrinho de uma pizzaria em React + Vite.

Crie:
- CategoryFilter
- CartItem
- useCart

Funcionalidades:
- Adicionar pizza
- Remover pizza
- Alterar quantidade
- Calcular total

Use TailwindCSS.

Código simples e modular.
Sprint 3 — Pedido e painel administrativo
1. Objetivo da Sprint

Sistema deve permitir:

Finalizar pedido
Inserir nome/endereço
Painel admin mockado
Gerenciar pizzas
2. Backlog
PC
Criar checkout
Criar formulário
Criar login admin mockado
Criar CRUD visual de pizzas
Celular
Revisar formulário
Revisar fluxo
Testar telas no celular
Criar documentação
3. Guia de implementação

Páginas:

Checkout.jsx
AdminDashboard.jsx
ManagePizzas.jsx

Login mockado:

admin@pizza.com
123456

Salvar login:

localStorage

Tabela admin:

Nome
Preço
Categoria
Editar
Excluir
4. Comandos
npm run dev
npm run build

Git:

git add .
git commit -m "checkout e admin"
git push origin main
5. Prompt para Codex
Implemente o painel administrativo de uma pizzaria.

Crie:
- Checkout
- AdminDashboard
- ManagePizzas

Funções:
- Login mockado
- CRUD visual de pizzas
- Formulário de pedido

Use:
- React
- Vite
- TailwindCSS

Código simples e organizado.
Sprint 4 — Integração preparada e refinamento final
1. Objetivo da Sprint

Projeto pronto para apresentação:

Responsivo
Visual refinado
Services preparados
Integração futura preparada
README final
2. Backlog
PC
Criar Axios centralizado
Criar services
Melhorar responsividade
Revisar componentes
Celular
Revisar documentação
Tirar prints
Testar site
Conferir links
3. Guia de implementação

Criar:

services/api.js
services/pizzaService.js

Axios:

import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

.env.example

VITE_API_URL=http://localhost:8080/api
4. Comandos
npm run build

Git:

git add .
git commit -m "refinamento final"
git push origin main
5. Prompt para Codex
Finalize o frontend de uma pizzaria em React + Vite.

Crie:
- services/api.js
- services/pizzaService.js
- .env.example

Melhore:
- Responsividade
- Estrutura visual
- Organização de componentes

Use:
- Axios
- TailwindCSS

Não use bibliotecas pesadas.