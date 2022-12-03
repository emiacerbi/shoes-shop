import axiosInstance from '../../axios/axiosInstance'

export const updateUserProfile = async ({
  username,
  email,
  password,
  phoneNumber,
  firstName,
  lastName,
  id
}) => {
  const FormData = require('form-data')
  const data = new FormData()
  data.append('username', username)
  data.append('email', email)
  data.append('password', password)
  data.append('firstName', firstName)
  data.append('phoneNumber', phoneNumber)
  data.append('lastName', lastName)

  const response = await axiosInstance.put(`/api/users/${id}`, data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  console.log(response.data)
  return response.data
}
