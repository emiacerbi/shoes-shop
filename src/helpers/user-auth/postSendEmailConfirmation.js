import { fetchWrapper } from '../fetchWrapper'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
const ENDPOINT = `${BASE_URL}/api/auth/send-email-confirmation`

export const postResetPassword = async (email) => {
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

/*

{
  "email": "string",
  "sent": true
}

*/
