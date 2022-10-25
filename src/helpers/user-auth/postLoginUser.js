const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

const ENDPOINT = `${BASE_URL}/api/auth/local`

export const postLoginUser = async ({ identifier, password }) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({
      identifier,
      password
    })
  }

  const response = await fetch(ENDPOINT, config)
  return response
}

/*
Response:
{
  "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  "user": {
    "id": 1,
    "username": "foo.bar",
    "email": "foo.bar@strapi.io",
    "provider": "local",
    "confirmed": true,
    "blocked": false,
    "createdAt": "2022-06-02T08:32:06.258Z",
    "updatedAt": "2022-06-02T08:32:06.267Z"
  }
}
*/
