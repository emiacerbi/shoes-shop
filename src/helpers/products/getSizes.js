import { fetchWrapper } from 'helpers/fetchWrapper'

export const getSizes = async () => {
  const response = await fetchWrapper('api/sizes', { method: 'GET' })
  return response
}
