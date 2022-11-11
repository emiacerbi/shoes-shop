import axiosInstance from '../../axios/axiosInstance'

export const getGenders = async () => {
  const response = await axiosInstance.get('api/genders')
  return response
}
