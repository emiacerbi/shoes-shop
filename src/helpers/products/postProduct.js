import { v4 as uuidv4 } from 'uuid'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
const ENDPOINT = `${BASE_URL}/api/products`

export const postProduct = async ({ name, images, description, brand, categories, color, gender, size, uniqueID, price }) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({
      data: {
        name,
        images: [...images],
        description,
        brand,
        categories: [...categories],
        color,
        gender,
        size,
        uniqueID: uuidv4(),
        price,
        sitemap_exclude: true
      }
    })
  }

  const response = await fetch(ENDPOINT, config)
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
