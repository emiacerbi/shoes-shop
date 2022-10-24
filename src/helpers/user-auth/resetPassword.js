import { fetchWrapper } from '../fetchWrapper'

const BASE_URL = process.env.BASE_URL
const ENDPOINT = `${BASE_URL}/api/auth/reset-password`

export const resetPassword = async (password, passwordConfirmation, code) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({
      password,
      passwordConfirmation,
      code
    })
  }

  const response = await fetchWrapper(ENDPOINT, config)
  return response
}
