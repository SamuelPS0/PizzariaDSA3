import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  function handleLogin(event) {
    event.preventDefault()

    if (email === 'admin@pizza.com' && password === '123456') {
      localStorage.setItem('pizzaAdminLogged', 'true')
      navigate('/admin')
      return
    }

    setError('E-mail ou senha inválidos.')
  }

  return (
    <section className="mx-auto flex max-w-6xl justify-center px-4 py-12">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md rounded-lg border border-orange-100 bg-white p-6 shadow-sm"
      >
        <p className="text-sm font-bold uppercase tracking-wide text-red-700">
          Área administrativa
        </p>
        <h1 className="mt-2 text-3xl font-black text-stone-900">Entrar</h1>

        <label className="mt-6 block text-sm font-bold text-stone-700">
          E-mail
          <input
            className="mt-2 w-full rounded-md border border-orange-200 px-3 py-3 outline-none focus:border-red-700"
            type="email"
            placeholder="admin@bellapizza.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>

        <label className="mt-4 block text-sm font-bold text-stone-700">
          Senha
          <input
            className="mt-2 w-full rounded-md border border-orange-200 px-3 py-3 outline-none focus:border-red-700"
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>

        {error && <p className="mt-4 text-sm font-bold text-red-700">{error}</p>}

        <button
          type="submit"
          className="mt-6 w-full rounded-md bg-red-700 px-4 py-3 font-bold text-white hover:bg-red-800"
        >
          Acessar painel
        </button>
      </form>
    </section>
  )
}

export default AdminLogin
