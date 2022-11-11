import axiosInstance from '../../axios/axiosInstance'

export const getCategories = async () => {
  const response = await axiosInstance.get('api/categories')
  return response
}
