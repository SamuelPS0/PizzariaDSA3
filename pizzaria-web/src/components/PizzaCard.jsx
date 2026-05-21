function PizzaCard({ pizza, onAddToCart }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-orange-100 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <img
        className="h-44 w-full object-cover sm:h-48"
        src={pizza.imagem}
        alt={`Pizza ${pizza.nome}`}
      />
      <div className="flex flex-1 flex-col p-4">
        <div className="flex flex-col gap-2 min-[420px]:flex-row min-[420px]:items-start min-[420px]:justify-between">
          <h3 className="text-xl font-bold text-stone-900">{pizza.nome}</h3>
          <span className="w-fit rounded-full bg-orange-100 px-2 py-1 text-xs font-bold text-red-700">
            {pizza.categoria}
          </span>
        </div>
        <p className="mt-2 flex-1 text-sm leading-6 text-stone-600">
          {pizza.descricao}
        </p>
        <div className="mt-4 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:items-center min-[420px]:justify-between">
          <strong className="text-lg text-red-700">
            R$ {pizza.preco.toFixed(2).replace('.', ',')}
          </strong>
          <button
            type="button"
            onClick={() => onAddToCart(pizza)}
            className="w-full rounded-md bg-red-700 px-4 py-2 text-sm font-bold text-white hover:bg-red-800 min-[420px]:w-auto"
          >
            Adicionar
          </button>
        </div>
      </div>
    </article>
  )
}

export default PizzaCard
