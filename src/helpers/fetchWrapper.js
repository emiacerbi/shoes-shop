export async function fetchWrapper (url, config) {
  const requestOptions = {
    ...config
  }

  const response = await fetch(url, requestOptions)
  const data = await response.json()
  return data
}
