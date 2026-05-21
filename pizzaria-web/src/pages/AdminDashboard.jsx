import { Link, useNavigate } from 'react-router-dom'

function AdminDashboard() {
  const navigate = useNavigate()
  const logged = localStorage.getItem('pizzaAdminLogged') === 'true'

  function handleLogout() {
    localStorage.removeItem('pizzaAdminLogged')
    navigate('/admin/login')
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
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-red-700">
            Painel administrativo
          </p>
          <h1 className="mt-2 text-4xl font-black text-stone-900">
            Gerenciar pizzaria
          </h1>
        </div>
        <button
          type="button"
          onClick={handleLogout}
          className="rounded-md border border-red-200 px-4 py-2 font-bold text-red-700 hover:bg-red-50"
        >
          Sair
        </button>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <Link
          to="/admin/pizzas"
          className="rounded-lg border border-orange-100 bg-white p-6 shadow-sm hover:border-red-200"
        >
          <h2 className="text-2xl font-black text-stone-900">Pizzas</h2>
          <p className="mt-2 text-stone-600">
            Editar, excluir e cadastrar pizzas no cardápio.
          </p>
        </Link>
        <Link
          to="/admin/categorias"
          className="rounded-lg border border-orange-100 bg-white p-6 shadow-sm hover:border-red-200"
        >
          <h2 className="text-2xl font-black text-stone-900">Categorias</h2>
          <p className="mt-2 text-stone-600">
            Cadastrar, editar e excluir categorias do cardápio.
          </p>
        </Link>
      </div>
    </section>
  )
}

export default AdminDashboard
