import { Checkbox, InputLabel, Typography, useTheme, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Form from '../src/components/Form/Form'
import PrimaryInput from '../src/components/PrimaryInput/PrimaryInput'
import PrimaryButton from '../src/components/PrimaryButton/PrimaryButton'
import Link from 'next/link'
import SignInOverlay from '../src/components/SignInOverlay/SignInOverlay'
import useSignInForm from '../src/hooks/useSignInForm'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import HeaderBeforeLogin from '../src/components/Header/Header'
import { Box } from '@mui/system'

const SignIn = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true)
  const [mobileWidth, setMobileWidth] = useState()
  const theme = useTheme()

  const router = useRouter()
  const { data: session } = useSession()

  if (session?.accessToken) {
    router.push('/home')
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setMobileWidth(window.innerWidth)
    }
  }, [])

  const { handleInputChange, handleSubmit, isPasswordIncorrect } = useSignInForm()

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
            <PrimaryInput required label='Email' placeholder='example@gmail.com' name='email' onChange={handleInputChange} type='text' />
            <PrimaryInput required label='Password' placeholder='at least 8 characters' name='password' onChange={handleInputChange} type='password' />

            {
              isPasswordIncorrect && (
                <Typography variant='p' sx={{ color: theme.palette.primary.main, marginTop: '-15px', fontSize: '20px' }}>
                  Your password should be 8 characters long!
                </Typography>
              )
            }

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
                <Checkbox />
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
              Sign In
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
          backgroundColor: 'lightblue',
          width: '50%',
          height: '100vh',
          backgroundImage: 'url(/sigin-in-shoes-desktop.png)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          [theme.breakpoints.up('md')]: {
            display: 'grid'
          }
        }}
      >

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
