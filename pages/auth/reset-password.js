import Form from '../../src/components/Form/Form'
import PrimaryButton from '../../src/components/PrimaryButton/PrimaryButton'
import PrimaryInput from '../../src/components/PrimaryInput/PrimaryInput'
import Header from '../../src/components/Header/Header'
import Link from 'next/link'
import { useMutation } from '@tanstack/react-query'
import { postResetPassword } from '../../src/helpers/user-auth/postResetPassword'
import { Typography, Box, Container } from '@mui/material'
import toast from 'react-hot-toast'

export default function ResetPassword () {
  const { mutate } = useMutation(postResetPassword, {
    mutationKey: 'reset-password',
    onError: (error) => console.log(error)
  })

  const checkPasswordsMatch = (pass1, pass2) => {
    return pass1 === pass2
  }
  const checkPasswordLength = (pass) => {
    return pass.length > 7
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const password = e.target.password.value
    const passwordConfirmation = e.target.passwordConfirmation.value

    if (!checkPasswordsMatch(password, passwordConfirmation)) {
      toast.error('Passwords do not match')
    } else if (!checkPasswordLength(password)) {
      toast.error('Password must be at least 8 characters long')
    } else {
      const params = new URLSearchParams(document.location.search)
      const code = params.get('code')
      mutate(
        { password, passwordConfirmation, code },
        { onSuccess: console.log('success') }
      )
    }
    e.target.reset()
  }

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex'
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: { xs: '100%', sm: '50%' }
        }}
      >
        <Header />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: { xs: '35px 0', sm: 'auto' }
          }}
          component='main'
        >
          <Typography variant='h1'>Reset Password</Typography>
          <Typography variant='p'>Please create new password here.</Typography>
          <Form onSubmit={handleSubmit}>
            <PrimaryInput
              type='password'
              label='Password'
              placeholder='at least 8 characters'
              name='password'
            />
            <PrimaryInput
              type='password'
              label='Confirm password'
              placeholder='at least 8 characters'
              name='passwordConfirmation'
            />
            <PrimaryButton type='submit'>Reset password</PrimaryButton>
          </Form>
          <Link href='/'>
            <Typography component='a' sx={{ textAlign: 'center' }}>
              Back to log in
            </Typography>
          </Link>
        </Box>
      </Container>
      <Box
        sx={{ width: { xs: '0%', sm: '50%' }, objectFit: 'cover' }}
        component='img'
        src='/shoes.png'
        alt=''
      ></Box>
    </Box>
  )
}
