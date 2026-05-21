import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'
import { useCart } from '../hooks/useCart'

function Cart() {
  const { items, total, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart()

  return (
    <section className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-4xl font-black text-stone-900">Carrinho</h1>

      {items.length === 0 ? (
        <div className="mt-8 rounded-lg border border-orange-100 bg-white p-8 text-center">
          <p className="text-stone-600">Seu carrinho está vazio.</p>
          <Link
            to="/cardapio"
            className="mt-4 inline-flex rounded-md bg-red-700 px-5 py-3 font-bold text-white hover:bg-red-800"
          >
            Ver cardápio
          </Link>
        </div>
      ) : (
        <div className="mt-8 space-y-4">
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onIncrease={increaseQuantity}
              onDecrease={decreaseQuantity}
              onRemove={removeFromCart}
            />
          ))}

          <div className="rounded-lg bg-stone-950 p-5 text-white">
            <div className="flex items-center justify-between text-xl font-black">
              <span>Total</span>
              <span>R$ {total.toFixed(2).replace('.', ',')}</span>
            </div>
            <Link
              to="/pedido"
              className="mt-4 inline-flex w-full justify-center rounded-md bg-red-700 px-5 py-3 font-bold text-white hover:bg-red-800 sm:w-auto"
            >
              Finalizar pedido
            </Link>
          </div>
        </div>
      )}
    </section>
  )
}

export default Cart
