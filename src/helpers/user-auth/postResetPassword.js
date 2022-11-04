const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
const ENDPOINT = `${BASE_URL}/api/auth/reset-password`

export const postResetPassword = async ({ password, passwordConfirmation, code }) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({
      password,
      passwordConfirmation,
      code
    })
  }

  const response = await fetch(ENDPOINT, config)
  return response
}

/*

{
  "password": "Test1234",
  "passwordConfirmation": "Test1234",
  "code": "zertyoaizndoianzodianzdonaizdoinaozdnia"
}

*/
