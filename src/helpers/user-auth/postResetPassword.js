export const postResetPassword = async ({ password, passwordConfirmation, code }) => {
  const response = await fetch('api/auth/reset-password', {
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
