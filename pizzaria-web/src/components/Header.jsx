import { NavLink } from 'react-router-dom'
import { useCart } from '../hooks/useCart'

function Header() {
  const { cartCount } = useCart()

  const linkClass = ({ isActive }) =>
    isActive
      ? 'rounded-md bg-red-700 px-3 py-2 text-sm font-semibold text-white'
      : 'rounded-md px-3 py-2 text-sm font-semibold text-stone-700 hover:bg-red-50 hover:text-red-700'

  return (
    <header className="sticky top-0 z-10 border-b border-orange-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <NavLink to="/" className="text-2xl font-black text-red-700">
          Bella Pizza
        </NavLink>

        <nav className="flex flex-wrap items-center gap-2">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/cardapio" className={linkClass}>
            Cardápio
          </NavLink>
          <NavLink to="/carrinho" className={linkClass}>
            Carrinho ({cartCount})
          </NavLink>
          <NavLink to="/admin/login" className={linkClass}>
            Admin
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
