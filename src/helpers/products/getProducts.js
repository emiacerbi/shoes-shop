import { fetchWrapper } from 'helpers/fetchWrapper'

export const getProducts = async () => {
  const response = await fetchWrapper('api/products', { method: 'GET' })
  return response
}
