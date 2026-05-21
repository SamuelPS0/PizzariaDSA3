import { Navigate, Route, Routes } from 'react-router-dom'
import PublicLayout from '../components/PublicLayout'
import AdminDashboard from '../pages/AdminDashboard'
import AdminLogin from '../pages/AdminLogin'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Home from '../pages/Home'
import ManageCategories from '../pages/ManageCategories'
import ManagePizzas from '../pages/ManagePizzas'
import Menu from '../pages/Menu'

function AppRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cardapio" element={<Menu />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/pedido" element={<Checkout />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/pizzas" element={<ManagePizzas />} />
        <Route path="/admin/categorias" element={<ManageCategories />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default AppRoutes
