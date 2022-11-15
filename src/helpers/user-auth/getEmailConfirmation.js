import axiosInstance from '../../axios/axiosInstance'

export const getEmailConfirmation = async () => {
  const response = await axiosInstance.get('/api/auth/email-confirmation')
  return response
}

/*

  {
    Redirects to the configure email confirmation redirect url
  }

*/
