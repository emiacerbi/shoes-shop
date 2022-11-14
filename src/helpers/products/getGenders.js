import axiosInstance from '../../axios/axiosInstance'

export const getGenders = async () => {
  const response = await axiosInstance('api/genders')
  return response
}
