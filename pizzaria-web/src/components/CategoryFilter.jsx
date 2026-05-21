function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        onClick={() => onSelectCategory('Todas')}
        className={`rounded-full px-4 py-2 text-sm font-bold ${
          selectedCategory === 'Todas'
            ? 'bg-red-700 text-white'
            : 'bg-white text-stone-700 hover:bg-red-50'
        }`}
      >
        Todas
      </button>

      {categories.map((category) => (
        <button
          key={category.id}
          type="button"
          onClick={() => onSelectCategory(category.nome)}
          className={`rounded-full px-4 py-2 text-sm font-bold ${
            selectedCategory === category.nome
              ? 'bg-red-700 text-white'
              : 'bg-white text-stone-700 hover:bg-red-50'
          }`}
        >
          {category.nome}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter
