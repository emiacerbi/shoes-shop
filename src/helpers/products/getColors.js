import { fetchWrapper } from 'helpers/fetchWrapper'

export const getColors = async () => {
  const response = await fetchWrapper('api/colors', { method: 'GET' })
  return response
}
