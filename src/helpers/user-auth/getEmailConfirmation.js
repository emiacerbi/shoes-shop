const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
const ENDPOINT = `${BASE_URL}/api/auth/email-confirmation`

export const getEmailConfirmation = async () => {
  const config = {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  }

  const response = await fetch(ENDPOINT, config)
  return response
}

/*

  {
    Redirects to the configure email confirmation redirect url
  }

*/
