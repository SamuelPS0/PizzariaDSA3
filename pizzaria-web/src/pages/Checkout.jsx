import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'

function Checkout() {
  const { items, total, clearCart } = useCart()
  const [orderSent, setOrderSent] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setOrderSent(true)
    clearCart()
  }

  if (orderSent) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-12">
        <div className="rounded-lg border border-orange-100 bg-white p-8 text-center shadow-sm">
          <h1 className="text-3xl font-black text-stone-900">Pedido enviado</h1>
          <p className="mt-3 text-stone-600">
            Recebemos seu pedido. A pizzaria entrará em contato para confirmar.
          </p>
          <Link
            to="/cardapio"
            className="mt-6 inline-flex rounded-md bg-red-700 px-5 py-3 font-bold text-white hover:bg-red-800"
          >
            Fazer outro pedido
          </Link>
        </div>
      </section>
    )
  }

  if (items.length === 0) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-12">
        <div className="rounded-lg border border-orange-100 bg-white p-8 text-center">
          <h1 className="text-3xl font-black text-stone-900">Carrinho vazio</h1>
          <Link
            to="/cardapio"
            className="mt-6 inline-flex rounded-md bg-red-700 px-5 py-3 font-bold text-white hover:bg-red-800"
          >
            Voltar ao cardápio
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-[1fr_360px]">
      <form
        onSubmit={handleSubmit}
        className="rounded-lg border border-orange-100 bg-white p-6 shadow-sm"
      >
        <p className="text-sm font-bold uppercase tracking-wide text-red-700">
          Finalizar pedido
        </p>
        <h1 className="mt-2 text-3xl font-black text-stone-900">
          Dados para entrega
        </h1>

        <label className="mt-6 block text-sm font-bold text-stone-700">
          Nome
          <input
            className="mt-2 w-full rounded-md border border-orange-200 px-3 py-3 outline-none focus:border-red-700"
            required
            type="text"
            placeholder="Seu nome"
          />
        </label>

        <label className="mt-4 block text-sm font-bold text-stone-700">
          Telefone
          <input
            className="mt-2 w-full rounded-md border border-orange-200 px-3 py-3 outline-none focus:border-red-700"
            required
            type="tel"
            placeholder="(11) 99999-9999"
          />
        </label>

        <label className="mt-4 block text-sm font-bold text-stone-700">
          Endereço
          <textarea
            className="mt-2 min-h-28 w-full rounded-md border border-orange-200 px-3 py-3 outline-none focus:border-red-700"
            required
            placeholder="Rua, número, bairro e complemento"
          />
        </label>

        <button
          type="submit"
          className="mt-6 w-full rounded-md bg-red-700 px-4 py-3 font-bold text-white hover:bg-red-800 sm:w-auto"
        >
          Enviar pedido
        </button>
      </form>

      <aside className="h-fit rounded-lg bg-stone-950 p-6 text-white">
        <h2 className="text-xl font-black">Resumo</h2>
        <div className="mt-4 space-y-3">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between gap-4 text-sm">
              <span>
                {item.quantidade}x {item.nome}
              </span>
              <strong>
                R$ {(item.preco * item.quantidade).toFixed(2).replace('.', ',')}
              </strong>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-between border-t border-stone-700 pt-4 text-lg font-black">
          <span>Total</span>
          <span>R$ {total.toFixed(2).replace('.', ',')}</span>
        </div>
      </aside>
    </section>
  )
}

export default Checkout
