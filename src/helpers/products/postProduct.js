import axiosInstance from '../../axios/axiosInstance'

export const postProduct = async ({
  name,
  images,
  description,
  brand,
  categories,
  color,
  gender,
  size,
  price,
  userID
}) => {
  const response = await axiosInstance.post('api/products', {
    data: {
      name,
      images: [...images],
      description,
      brand,
      categories: [...categories],
      color,
      gender,
      size,
      uniqueID: Math.floor(Math.random() * 100000),
      price,
      sitemap_exclude: true,
      teamName: 'ea-team',
      userID
    }
  })

  return response
}

/*

Example Request

  const data = {
    name: 'Product1',
    images: ['Image1', 'Image2'],
    description: 'Descr3',
    brand: 'Nike',
    categories: ['Kids', 'Etc'],
    color: 'Red',
    gender: 'Women',
    size: '42',
    uniqueID: 'uuidv4 handles the ID',
    price: 0
  }

*/
