import { createContext, createElement, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  function addToCart(pizza) {
    setItems((currentItems) => {
      const itemExists = currentItems.find((item) => item.id === pizza.id)

      if (itemExists) {
        return currentItems.map((item) =>
          item.id === pizza.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item,
        )
      }

      return [...currentItems, { ...pizza, quantidade: 1 }]
    })
  }

  function removeFromCart(pizzaId) {
    setItems((currentItems) => currentItems.filter((item) => item.id !== pizzaId))
  }

  function increaseQuantity(pizzaId) {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === pizzaId ? { ...item, quantidade: item.quantidade + 1 } : item,
      ),
    )
  }

  function decreaseQuantity(pizzaId) {
    setItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === pizzaId
            ? { ...item, quantidade: item.quantidade - 1 }
            : item,
        )
        .filter((item) => item.quantidade > 0),
    )
  }

  const cartCount = useMemo(
    () => items.reduce((total, item) => total + item.quantidade, 0),
    [items],
  )

  const total = useMemo(
    () => items.reduce((sum, item) => sum + item.preco * item.quantidade, 0),
    [items],
  )

  const value = {
    items,
    cartCount,
    total,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart: () => setItems([]),
  }

  return createElement(CartContext.Provider, { value }, children)
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart deve ser usado dentro de CartProvider')
  }

  return context
}
