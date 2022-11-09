import { fetchWrapper } from 'helpers/fetchWrapper'

export const postResetPassword = async ({ password, passwordConfirmation, code }) => {
  const response = await fetchWrapper('api/auth/reset-password', {
    body: {
      password,
      passwordConfirmation,
      code
    }
  })

  return response
}

/*

{
  "password": "Test1234",
  "passwordConfirmation": "Test1234",
  "code": "zertyoaizndoianzodianzdonaizdoinaozdnia"
}

*/
