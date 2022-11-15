import axiosInstance from '../../axios/axiosInstance'

export const postForgotPassword = async (email) => {
  const response = await axiosInstance.post('/api/auth/forgot-password', {
    email
  })

  return response
}

/*

{
  "ok": true
}

*/
