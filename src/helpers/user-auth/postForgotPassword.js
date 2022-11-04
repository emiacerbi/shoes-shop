const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
const ENDPOINT = `${BASE_URL}/api/auth/forgot-password`

export const postForgotPassword = async (email) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({
      email
    })
  }

  const response = await fetch(ENDPOINT, config)
  return response
}

/*

{
  "ok": true
}

*/
