import axios from 'axios'

export const postFiles = async ({ img }) => {
  const formData = new FormData()
  formData.append('files', img)
  const response = await axios.post(
    'https://shoes-shop-strapi.herokuapp.com/api/upload',
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
  )

  return response.data
}
