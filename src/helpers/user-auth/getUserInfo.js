const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
const ENDPOINT = `${BASE_URL}/api/users/me`

export const getUserInfo = async (token) => {
  const config = {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: `Bearer ${token}`
    }
  }

  const response = await fetch(ENDPOINT, config)
  console.log(response)
  return response
}

/*

{
  Redirects to the configure email confirmation redirect url
}

*/
