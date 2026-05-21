import { useMemo, useState } from 'react'
import CategoryFilter from '../components/CategoryFilter'
import PizzaCard from '../components/PizzaCard'
import { categories } from '../data/mocks/categories'
import { pizzas } from '../data/mocks/pizzas'
import { useCart } from '../hooks/useCart'

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('Todas')
  const { addToCart } = useCart()

  const filteredPizzas = useMemo(() => {
    if (selectedCategory === 'Todas') {
      return pizzas
    }

    return pizzas.filter((pizza) => pizza.categoria === selectedCategory)
  }, [selectedCategory])

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-red-700">
            Cardápio
          </p>
          <h1 className="mt-2 text-4xl font-black text-stone-900">
            Escolha sua pizza
          </h1>
        </div>
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPizzas.map((pizza) => (
          <PizzaCard key={pizza.id} pizza={pizza} onAddToCart={addToCart} />
        ))}
      </div>
    </section>
  )
}

export default Menu
