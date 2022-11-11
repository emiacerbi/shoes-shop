import axiosInstance from 'axios/axiosInstance'

export const postResetPassword = async ({
  password,
  passwordConfirmation,
  code
}) => {
  const response = await axiosInstance('/api/auth/reset-password', {
    method: 'POST',
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
