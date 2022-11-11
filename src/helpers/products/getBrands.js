import { fetchWrapper } from 'helpers/fetchWrapper'

export const getBrands = async () => {
  const response = await fetchWrapper('api/brands', { method: 'GET' })
  return response
}
