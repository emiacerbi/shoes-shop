import { fetchWrapper } from '../fetchWrapper'

const BASE_URL = process.env.BASE_URL
const ENDPOINT = `${BASE_URL}/api/auth/local/register`

export const registerUser = async (username, email, password) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({
      username,
      email,
      password
    })
  }

  const response = await fetchWrapper(ENDPOINT, config)
  return response
}
