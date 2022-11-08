import { fetchWrapper } from '../fetchWrapper'

export const postForgotPassword = async (email) => {
  const response = await fetchWrapper('api/auth/forgot-password', {
    body: {
      email
    }
  })

  return response
}

/*

{
  "ok": true
}

*/
