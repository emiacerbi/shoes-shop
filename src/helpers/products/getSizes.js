import axiosInstance from '../../axios/axiosInstance'

export const getSizes = async () => {
  const response = await axiosInstance.get('api/sizes')
  return response
}
