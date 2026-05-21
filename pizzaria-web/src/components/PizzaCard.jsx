function PizzaCard({ pizza, onAddToCart }) {
  return (
    <article className="overflow-hidden rounded-lg border border-orange-100 bg-white shadow-sm">
      <img
        className="h-44 w-full object-cover"
        src={pizza.imagem}
        alt={`Pizza ${pizza.nome}`}
      />
      <div className="flex h-full flex-col p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-bold text-stone-900">{pizza.nome}</h3>
          <span className="rounded-full bg-orange-100 px-2 py-1 text-xs font-bold text-red-700">
            {pizza.categoria}
          </span>
        </div>
        <p className="mt-2 flex-1 text-sm leading-6 text-stone-600">
          {pizza.descricao}
        </p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <strong className="text-lg text-red-700">
            R$ {pizza.preco.toFixed(2).replace('.', ',')}
          </strong>
          <button
            type="button"
            onClick={() => onAddToCart(pizza)}
            className="rounded-md bg-red-700 px-4 py-2 text-sm font-bold text-white hover:bg-red-800"
          >
            Adicionar
          </button>
        </div>
      </div>
    </article>
  )
}

export default PizzaCard
