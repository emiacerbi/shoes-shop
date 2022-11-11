import { fetchWrapper } from 'helpers/fetchWrapper'

export const getGenders = async () => {
  const response = await fetchWrapper('api/genders', { method: 'GET' })
  return response
}
