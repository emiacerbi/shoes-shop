import axiosInstance from '../../axios/axiosInstance'

export const getBrands = async () => {
  const response = await axiosInstance.get('/api/brands')
  return response
}
