import axiosInstance from '../../axios/axiosInstance'

export const updateProduct = async ({
  name,
  description,
  price,
  productID
}) => {
  const response = await axiosInstance.put(`api/products/${productID}`, {
    data: {
      name,
      description,
      price
    }
  })

  return response
}

export const updateProductWithImage = async ({
  name,
  images,
  description,
  price,
  productID
}) => {
  const response = await axiosInstance.put(`api/products/${productID}`, {
    data: {
      name,
      images: [...images],
      description,
      price
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
