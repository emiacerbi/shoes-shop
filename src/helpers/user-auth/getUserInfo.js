import axiosInstance from '../../axios/axiosInstance'

export const getUserInfo = async (token) => {
  const response = await axiosInstance.get('/api/users/me?populate=%2A', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return response
}

/*

{
  Redirects to the configure email confirmation redirect url
}

*/
