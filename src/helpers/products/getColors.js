import axiosInstance from '../../axios/axiosInstance'
export const getColors = async () => {
  const response = await axiosInstance('/api/colors')
  return response.data
}
