import axiosInstance from '../../axios/axiosInstance'

export const postResetPassword = async (email) => {
  const response = await axiosInstance.post(
    '/api/auth/send-email-confirmation',
    {
      email
    }
  )
  return response
}

/*

{
  "email": "string",
  "sent": true
}

*/
