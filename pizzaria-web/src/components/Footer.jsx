function Footer() {
  return (
    <footer className="border-t border-orange-100 bg-stone-950 text-stone-200">
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-8 sm:grid-cols-3">
        <div>
          <h2 className="text-lg font-bold text-white">Bella Pizza</h2>
          <p className="mt-2 text-sm text-stone-400">
            Sistema web de pizzaria para pedidos e administração.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-white">
            Atendimento
          </h2>
          <p className="mt-2 text-sm text-stone-400">Terça a domingo, 18h às 23h</p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-white">
            Contato
          </h2>
          <p className="mt-2 text-sm text-stone-400">(11) 99999-9999</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
