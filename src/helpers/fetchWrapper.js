import { BASE_URL } from 'constants/ConstantDeclaration'

export async function fetchWrapper(
  endpoint,
  { body, ...customConfig } = {},
  token = ''
) {
  const headers = { 'Content-Type': 'application/json' }

  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  const config = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers
    }
  }

  if (body) {
    config.body = JSON.stringify(body)
  }

  const response = await fetch(`${BASE_URL}/${endpoint}`, config)
  return response
}

/*
  Examples

  function create(listItemData) {
    return client('list-items', {body: listItemData})
  }

  function read() {
    return client('list-items', {method: 'GET'})
  }

  function update(listItemId, updates) {
    return client(`list-items/${listItemId}`, {
      method: 'PUT',
      body: updates,
    })
  }

  function remove(listItemId) {
    return client(`list-items/${listItemId}`, {method: 'DELETE'})
  }

*/
