import { useEffect, useState } from 'react'
import Form from '@components/Form/Form'
import HeaderBeforeLogin from '@components/Header/Header'
import PrimaryButton from '@components/PrimaryButton/PrimaryButton'
import PrimaryInput from '@components/PrimaryInput/PrimaryInput'
import SignInOverlay from '@components/SignInOverlay/SignInOverlay'
import { Button, Checkbox, InputLabel, Typography, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import useSignInForm from 'hooks/useSignInForm'
import Image from 'next/image'
import Link from 'next/link'

const SignIn = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true)
  const [mobileWidth, setMobileWidth] = useState()
  const theme = useTheme()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setMobileWidth(window.innerWidth)
    }
  }, [])

  const { handleInputChange, handleSubmit } = useSignInForm()

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {
          flexDirection: 'row'
        }
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          [theme.breakpoints.up('md')]: {
            width: '50%'
          }
        }}
      >

        <HeaderBeforeLogin />

        <Box
          sx={{
            display: 'grid',
            placeContent: 'center',
            flex: 1,
            paddingInline: '1.25rem',
            paddingBlock: '2rem'
          }}
        >
          <Typography variant="h1">Welcome back</Typography>
          <Typography variant='p'>Welcome back! Please enter your details to log into your account.</Typography>

          <Form onSubmit={handleSubmit}>
            <PrimaryInput required label='Email' placeholder='example@gmail.com' name='email' onChange={handleInputChange} type='email' />
            <PrimaryInput required label='Password' placeholder='at least 8 characters' name='password' onChange={handleInputChange} type='password' />

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <InputLabel
                sx={{
                  fontSize: '10px',
                  color: '#494949',
                  display: 'flex',
                  fontWeight: '500',
                  alignItems: 'center',
                  [theme.breakpoints.up('sm')]: {
                    fontSize: '15px'
                  }
                }}
              >
                <Checkbox sx={{ marginLeft: '-.75rem', marginRight: '-.5rem' }} />
                Remember me
              </InputLabel>
              <Link href='forgot-password' >
                <Button
                  variant='text'
                  sx={{
                    textTransform: 'none',
                    fontSize: '15px',
                    fontWeight: '300'
                  }}
                >
                  Forgot password?
                </Button>
              </Link>
            </Box>

            <PrimaryButton>
              Sign in
            </PrimaryButton>

            <Typography
              variant='p'
              sx={{
                textAlign: 'center',
                fontWeight: '500'
              }}
            >
              {'Don\'t'} have an account?
              <Link href='/sign-up'>
                <Button
                  variant='text'
                  sx={{
                    textTransform: 'none',
                    fontSize: '15px'
                  }}
                >
                  Sign up
                </Button>
              </Link>
            </Typography>
          </Form>
        </Box>

      </Box>

      <Box
        sx={{
          display: 'none',
          position: 'relative',
          backgroundColor: 'lightblue',
          width: '50%',
          height: '100vh',
          [theme.breakpoints.up('md')]: {
            display: 'grid'
          }
        }}
      >
        <Image src='/sign-in-shoes-desktop.png 'layout='fill' alt='pair of shoes' objectFit='cover'/>
      </Box>
      {
        isOverlayVisible && mobileWidth < 500 && (
          <SignInOverlay setIsOverlayVisible={setIsOverlayVisible} />
        )
      }
    </Box>

  )
}

export default SignIn
