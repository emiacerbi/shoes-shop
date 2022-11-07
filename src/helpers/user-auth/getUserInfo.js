import { fetchWrapper } from '../fetchWrapper'

export const getUserInfo = async (token) => {
  const response = await fetchWrapper('api/users/me', { method: 'GET' }, token)
  const data = response.json()
  return data
}

/*

{
  Redirects to the configure email confirmation redirect url
}

*/
