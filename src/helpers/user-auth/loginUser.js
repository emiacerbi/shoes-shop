import { fetchWrapper } from '../fetchWrapper'

const BASE_URL = process.env.BASE_URL
const ENDPOINT = `${BASE_URL}/api/auth/local`

export const loginUser = async (identifier, password) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({
      identifier,
      password
    })
  }

  const response = await fetchWrapper(ENDPOINT, config)
  return response
}
