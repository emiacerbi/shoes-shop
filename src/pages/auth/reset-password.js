import toast from 'react-hot-toast'
import Form from '@components/Form/Form'
import HeaderBeforeLogin from '@components/Header/Header'
import PrimaryButton from '@components/PrimaryButton/PrimaryButton'
import PrimaryInput from '@components/PrimaryInput/PrimaryInput'
import { Box, Container, Typography } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import { postResetPassword } from 'helpers/user-auth/postResetPassword'
import Image from 'next/image'
import Link from 'next/link'

export default function ResetPassword () {
  const { mutate } = useMutation(postResetPassword, {
    mutationKey: 'reset-password'
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
      if (!code) {
        toast.error('Password reset failed. Try again later')
      } else {
        mutate(
          { password, passwordConfirmation, code },
          {
            onSuccess: () => toast.success('Password reset successfully'),
            onError: () => toast.error('Password reset failed. Try again later')
          }
        )
      }
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
        <HeaderBeforeLogin />
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
        sx={{
          width: { xs: '0%', sm: '50%' },
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <Image src='/shoes.png' alt='' layout='fill' objectFit='cover' />
      </Box>
    </Box>
  )
}
