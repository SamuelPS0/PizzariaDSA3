import { useState } from 'react'
import { Link } from 'react-router-dom'
import { categories as mockCategories } from '../data/mocks/categories'

const emptyForm = {
  nome: '',
}

function ManageCategories() {
  const [categories, setCategories] = useState(mockCategories)
  const [form, setForm] = useState(emptyForm)
  const [editingId, setEditingId] = useState(null)
  const logged = localStorage.getItem('pizzaAdminLogged') === 'true'

  function handleSubmit(event) {
    event.preventDefault()

    if (editingId) {
      setCategories((currentCategories) =>
        currentCategories.map((category) =>
          category.id === editingId ? { ...form, id: editingId } : category,
        ),
      )
    } else {
      setCategories((currentCategories) => [
        ...currentCategories,
        { ...form, id: Date.now() },
      ])
    }

    setForm(emptyForm)
    setEditingId(null)
  }

  function editCategory(category) {
    setEditingId(category.id)
    setForm({ nome: category.nome })
  }

  function deleteCategory(categoryId) {
    setCategories((currentCategories) =>
      currentCategories.filter((category) => category.id !== categoryId),
    )
  }

  function cancelEdit() {
    setForm(emptyForm)
    setEditingId(null)
  }

  if (!logged) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-12">
        <div className="rounded-lg border border-orange-100 bg-white p-8 text-center">
          <h1 className="text-3xl font-black text-stone-900">Acesso restrito</h1>
          <Link
            to="/admin/login"
            className="mt-6 inline-flex rounded-md bg-red-700 px-5 py-3 font-bold text-white hover:bg-red-800"
          >
            Entrar
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-4xl px-4 py-10">
      <p className="text-sm font-bold uppercase tracking-wide text-red-700">
        Administração
      </p>
      <h1 className="mt-2 text-4xl font-black text-stone-900">
        Gerenciar categorias
      </h1>

      <form
        onSubmit={handleSubmit}
        className="mt-8 grid gap-4 rounded-lg border border-orange-100 bg-white p-6 shadow-sm sm:grid-cols-[1fr_auto]"
      >
        <input
          className="rounded-md border border-orange-200 px-3 py-3 outline-none focus:border-red-700"
          name="nome"
          value={form.nome}
          onChange={(event) => setForm({ nome: event.target.value })}
          placeholder="Nome da categoria"
          required
        />
        <button
          type="submit"
          className="rounded-md bg-red-700 px-4 py-3 font-bold text-white hover:bg-red-800"
        >
          {editingId ? 'Salvar' : 'Cadastrar'}
        </button>
        {editingId && (
          <button
            type="button"
            onClick={cancelEdit}
            className="rounded-md border border-orange-200 px-4 py-3 font-bold text-stone-700 hover:bg-orange-50 sm:col-start-2"
          >
            Cancelar
          </button>
        )}
      </form>

      <div className="mt-8 overflow-x-auto rounded-lg border border-orange-100 bg-white">
        <table className="w-full min-w-[480px] text-left">
          <thead className="bg-orange-50 text-sm uppercase text-stone-600">
            <tr>
              <th className="p-4">Nome</th>
              <th className="p-4">Ações</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id} className="border-t border-orange-100">
                <td className="p-4 font-bold text-stone-900">
                  {category.nome}
                </td>
                <td className="flex gap-2 p-4">
                  <button
                    type="button"
                    onClick={() => editCategory(category)}
                    className="rounded-md border border-orange-200 px-3 py-2 text-sm font-bold text-stone-700 hover:bg-orange-50"
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    onClick={() => deleteCategory(category.id)}
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

export default ManageCategories
