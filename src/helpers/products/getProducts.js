import axiosInstance from '../../axios/axiosInstance'

export const getProducts = async () => {
  const response = await axiosInstance.get('api/products')
  return response
}
