import axiosInstance from '../../axios/axiosInstance'

export const deleteProduct = async (id) => {
  const response = await axiosInstance.delete(`/api/products/${id}`)
  return response.data
}
