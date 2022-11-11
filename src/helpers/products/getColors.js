import axiosInstance from '../../axios/axiosInstance'

export const getColors = async () => {
  const response = await axiosInstance.get('api/colors')
  return response
}
