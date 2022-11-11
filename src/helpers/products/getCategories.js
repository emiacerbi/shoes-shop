import { fetchWrapper } from 'helpers/fetchWrapper'

export const getCategories = async () => {
  const response = await fetchWrapper('api/categories', { method: 'GET' })
  return response
}
