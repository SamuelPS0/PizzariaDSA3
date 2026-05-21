function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  const subtotal = item.preco * item.quantidade

  return (
    <div className="grid gap-4 rounded-lg border border-orange-100 bg-white p-4 shadow-sm sm:grid-cols-[120px_1fr_auto] sm:items-center">
      <img
        className="h-28 w-full rounded-md object-cover sm:h-24"
        src={item.imagem}
        alt={`Pizza ${item.nome}`}
      />

      <div>
        <h2 className="text-xl font-bold text-stone-900">{item.nome}</h2>
        <p className="text-sm text-stone-600">{item.categoria}</p>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => onDecrease(item.id)}
            className="h-9 w-9 rounded-md border border-orange-200 font-bold text-red-700 hover:bg-red-50"
          >
            -
          </button>
          <span className="w-8 text-center font-bold">{item.quantidade}</span>
          <button
            type="button"
            onClick={() => onIncrease(item.id)}
            className="h-9 w-9 rounded-md border border-orange-200 font-bold text-red-700 hover:bg-red-50"
          >
            +
          </button>
          <button
            type="button"
            onClick={() => onRemove(item.id)}
            className="rounded-md px-3 py-2 text-sm font-bold text-red-700 hover:bg-red-50 sm:ml-2"
          >
            Remover
          </button>
        </div>
      </div>

      <strong className="text-lg text-red-700">
        R$ {subtotal.toFixed(2).replace('.', ',')}
      </strong>
    </div>
  )
}

export default CartItem
