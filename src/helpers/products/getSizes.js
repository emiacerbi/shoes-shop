const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
const ENDPOINT = `${BASE_URL}/api/sizes`

export const getSizes = async () => {
  const config = {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  }

  const response = await fetch(ENDPOINT, config)
  return response
}
