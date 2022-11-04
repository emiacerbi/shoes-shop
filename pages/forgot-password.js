import Form from '../src/components/Form/Form'
import PrimaryButton from '../src/components/PrimaryButton/PrimaryButton'
import PrimaryInput from '../src/components/PrimaryInput/PrimaryInput'
import Header from '../src/components/Header/Header'
import Link from 'next/link'
import { Typography, Box, Container } from '@mui/material'

import { postForgotPassword } from '../src/helpers/user-auth/postForgotPassword'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'

export default function ForgotPassword () {
  const { mutate } = useMutation(postForgotPassword, {
    mutationKey: 'forgot-password'
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    mutate(email, {
      onSuccess: () => {
        toast.success('Mail was sent. Check your inbox.')
      },
      onError: () => {
        toast.error('Something went wrong. Try again.')
      }
    })
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
          <Typography variant='h1'>Forgot Password?</Typography>
          <Typography variant='p'>
            Don’t worry, we’ll send you reset instructions.
          </Typography>
          <Form onSubmit={handleSubmit}>
            <PrimaryInput
              type='email'
              label='Email'
              name='email'
              placeholder='example@mail.com'
            />
            <PrimaryButton>Reset password</PrimaryButton>
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
