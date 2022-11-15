import axiosInstance from '../../axios/axiosInstance'

export const postResetPassword = async ({
  password,
  passwordConfirmation,
  code
}) => {
  const response = await axiosInstance.post('/api/auth/reset-password', {
    password,
    passwordConfirmation,
    code
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
