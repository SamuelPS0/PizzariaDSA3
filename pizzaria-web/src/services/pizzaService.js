import { pizzas } from '../data/mocks/pizzas'
import { api } from './api'

const hasApiUrl = Boolean(import.meta.env.VITE_API_URL)

export async function getPizzas() {
  if (!hasApiUrl) {
    return pizzas
  }

  try {
    const response = await api.get('/pizzas')
    return response.data
  } catch {
    return pizzas
  }
}

export async function createPizza(pizza) {
  if (!hasApiUrl) {
    return { ...pizza, id: Date.now() }
  }

  const response = await api.post('/pizzas', pizza)
  return response.data
}

export async function updatePizza(id, pizza) {
  if (!hasApiUrl) {
    return { ...pizza, id }
  }

  const response = await api.put(`/pizzas/${id}`, pizza)
  return response.data
}

export async function deletePizza(id) {
  if (!hasApiUrl) {
    return
  }

  await api.delete(`/pizzas/${id}`)
}
