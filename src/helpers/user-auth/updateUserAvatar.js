import axiosInstance from '../../axios/axiosInstance'

export const updateUserAvatar = async ({
  username,
  email,
  password,
  avatar
}) => {
  const FormData = require('form-data')
  const data = new FormData()
  data.append('username', username)
  data.append('email', email)
  data.append('password', password)
  data.append('avatar', avatar)
  const id = localStorage.getItem('id')
  const response = await axiosInstance.put(`/api/users/${id}`, data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  return response.data
}
