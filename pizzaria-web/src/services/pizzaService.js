import { pizzas } from '../data/mocks/pizzas'
import { api } from './api'

export async function getPizzas() {
  if (!import.meta.env.VITE_API_URL) {
    return pizzas
  }

  const response = await api.get('/pizzas')
  return response.data
}

export async function createPizza(pizza) {
  const response = await api.post('/pizzas', pizza)
  return response.data
}

export async function updatePizza(id, pizza) {
  const response = await api.put(`/pizzas/${id}`, pizza)
  return response.data
}

export async function deletePizza(id) {
  await api.delete(`/pizzas/${id}`)
}
