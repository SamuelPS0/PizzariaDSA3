import { CartProvider } from './hooks/useCart'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <CartProvider>
      <AppRoutes />
    </CartProvider>
  )
}

export default App
