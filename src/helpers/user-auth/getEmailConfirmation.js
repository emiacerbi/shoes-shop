import { fetchWrapper } from '../fetchWrapper'

export const getEmailConfirmation = async () => {
  const response = await fetchWrapper('/api/auth/email-confirmation', { method: 'GET' })
  return response
}

/*

  {
    Redirects to the configure email confirmation redirect url
  }

*/
