import { fetchWrapper } from '../fetchWrapper'

export const postResetPassword = async (email) => {
  const response = await fetchWrapper('api/auth/send-email-confirmation', {
    body: {
      email
    }
  })
  return response
}

/*

{
  "email": "string",
  "sent": true
}

*/
