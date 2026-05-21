import { useState } from 'react'
import { pizzas as mockPizzas } from '../data/mocks/pizzas'

const emptyForm = {
  nome: '',
  preco: '',
  categoria: 'Tradicional',
  descricao: '',
  imagem: '',
}

function ManagePizzas() {
  const [pizzas, setPizzas] = useState(mockPizzas)
  const [form, setForm] = useState(emptyForm)
  const [editingId, setEditingId] = useState(null)

  function handleChange(event) {
    const { name, value } = event.target
    setForm((currentForm) => ({ ...currentForm, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    const pizzaData = {
      ...form,
      preco: Number(form.preco),
      imagem:
        form.imagem ||
        'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80',
    }

    if (editingId) {
      setPizzas((currentPizzas) =>
        currentPizzas.map((pizza) =>
          pizza.id === editingId ? { ...pizzaData, id: editingId } : pizza,
        ),
      )
    } else {
      setPizzas((currentPizzas) => [
        ...currentPizzas,
        { ...pizzaData, id: Date.now() },
      ])
    }

    setForm(emptyForm)
    setEditingId(null)
  }

  function editPizza(pizza) {
    setEditingId(pizza.id)
    setForm({
      nome: pizza.nome,
      preco: String(pizza.preco),
      categoria: pizza.categoria,
      descricao: pizza.descricao,
      imagem: pizza.imagem,
    })
  }

  function deletePizza(pizzaId) {
    setPizzas((currentPizzas) =>
      currentPizzas.filter((pizza) => pizza.id !== pizzaId),
    )
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <p className="text-sm font-bold uppercase tracking-wide text-red-700">
        Administração
      </p>
      <h1 className="mt-2 text-4xl font-black text-stone-900">
        Gerenciar pizzas
      </h1>

      <form
        onSubmit={handleSubmit}
        className="mt-8 grid gap-4 rounded-lg border border-orange-100 bg-white p-6 shadow-sm md:grid-cols-2"
      >
        <input
          className="rounded-md border border-orange-200 px-3 py-3 outline-none focus:border-red-700"
          name="nome"
          value={form.nome}
          onChange={handleChange}
          placeholder="Nome"
          required
        />
        <input
          className="rounded-md border border-orange-200 px-3 py-3 outline-none focus:border-red-700"
          name="preco"
          value={form.preco}
          onChange={handleChange}
          placeholder="Preço"
          required
          type="number"
          min="1"
          step="0.01"
        />
        <select
          className="rounded-md border border-orange-200 px-3 py-3 outline-none focus:border-red-700"
          name="categoria"
          value={form.categoria}
          onChange={handleChange}
        >
          <option>Tradicional</option>
          <option>Especial</option>
          <option>Doce</option>
        </select>
        <input
          className="rounded-md border border-orange-200 px-3 py-3 outline-none focus:border-red-700"
          name="imagem"
          value={form.imagem}
          onChange={handleChange}
          placeholder="URL da imagem"
        />
        <textarea
          className="min-h-24 rounded-md border border-orange-200 px-3 py-3 outline-none focus:border-red-700 md:col-span-2"
          name="descricao"
          value={form.descricao}
          onChange={handleChange}
          placeholder="Descrição"
          required
        />
        <button
          type="submit"
          className="rounded-md bg-red-700 px-4 py-3 font-bold text-white hover:bg-red-800 md:w-fit"
        >
          {editingId ? 'Salvar edição' : 'Cadastrar pizza'}
        </button>
      </form>

      <div className="mt-8 overflow-x-auto rounded-lg border border-orange-100 bg-white">
        <table className="w-full min-w-[720px] text-left">
          <thead className="bg-orange-50 text-sm uppercase text-stone-600">
            <tr>
              <th className="p-4">Nome</th>
              <th className="p-4">Preço</th>
              <th className="p-4">Categoria</th>
              <th className="p-4">Ações</th>
            </tr>
          </thead>
          <tbody>
            {pizzas.map((pizza) => (
              <tr key={pizza.id} className="border-t border-orange-100">
                <td className="p-4 font-bold text-stone-900">{pizza.nome}</td>
                <td className="p-4">
                  R$ {pizza.preco.toFixed(2).replace('.', ',')}
                </td>
                <td className="p-4">{pizza.categoria}</td>
                <td className="flex gap-2 p-4">
                  <button
                    type="button"
                    onClick={() => editPizza(pizza)}
                    className="rounded-md border border-orange-200 px-3 py-2 text-sm font-bold text-stone-700 hover:bg-orange-50"
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    onClick={() => deletePizza(pizza.id)}
                    className="rounded-md border border-red-200 px-3 py-2 text-sm font-bold text-red-700 hover:bg-red-50"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default ManagePizzas
