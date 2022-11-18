import axiosInstance from '../../axios/axiosInstance'

export const getProducts = async (params = '') => {
  const response = await axiosInstance.get(`/api/products${params}`)
  return response.data
}
