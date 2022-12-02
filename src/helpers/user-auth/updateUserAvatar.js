import axiosInstance from '../../axios/axiosInstance'

export const updateUserAvatar = async ({
  id,
  username,
  email,
  password,
  avatar
}) => {
  console.log(id)
  const response = await axiosInstance.put(`/api/users/${id}`, {
    data: {
      username,
      email,
      password,
      avatar
    }
  })
  console.log(response)
  return response
}
