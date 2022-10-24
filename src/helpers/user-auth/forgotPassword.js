import { fetchWrapper } from '../fetchWrapper'

const BASE_URL = process.env.BASE_URL
const ENDPOINT = `${BASE_URL}/api/auth/forgot-password`

export const forgotPassword = async (email) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({
      email
    })
  }

  const response = await fetchWrapper(ENDPOINT, config)
  return response
}
