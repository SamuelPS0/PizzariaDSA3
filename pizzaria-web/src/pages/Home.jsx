import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import PizzaCard from '../components/PizzaCard'
import { useCart } from '../hooks/useCart'
import { getPizzas } from '../services/pizzaService'

function Home() {
  const { addToCart } = useCart()
  const [pizzas, setPizzas] = useState([])
  const featuredPizzas = useMemo(() => pizzas.slice(0, 3), [pizzas])

  useEffect(() => {
    async function loadPizzas() {
      const pizzaList = await getPizzas()
      setPizzas(pizzaList)
    }

    loadPizzas()
  }, [])

  return (
    <>
      <section className="bg-red-700 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-orange-100">
              Forno aceso todos os dias
            </p>
            <h1 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
              Pizzas quentes, pedidos simples e sabor de verdade.
            </h1>
            <p className="mt-4 max-w-xl text-lg text-red-50">
              Escolha sua pizza favorita e monte seu pedido em poucos cliques.
            </p>
            <Link
              to="/cardapio"
              className="mt-6 inline-flex rounded-md bg-white px-5 py-3 font-bold text-red-700 hover:bg-orange-50"
            >
              Ver cardápio
            </Link>
          </div>
          {featuredPizzas[0] && (
            <img
              className="h-72 w-full rounded-lg object-cover shadow-lg md:h-96"
              src={featuredPizzas[0].imagem}
              alt="Pizza saindo do forno"
            />
          )}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-red-700">
              Mais pedidas
            </p>
            <h2 className="text-3xl font-black text-stone-900">
              Favoritas da casa
            </h2>
          </div>
          <Link
            to="/cardapio"
            className="font-bold text-red-700 hover:text-red-900"
          >
            Ver todas
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPizzas.map((pizza) => (
            <PizzaCard key={pizza.id} pizza={pizza} onAddToCart={addToCart} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Home
