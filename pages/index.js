import { Checkbox, InputLabel, Typography, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Form from '../src/components/Form/Form'
import PrimaryInput from '../src/components/PrimaryInput/PrimaryInput'
import PrimaryButton from '../src/components/PrimaryButton/PrimaryButton'

import styles from '../styles/SignIn.module.css'
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

  const { handleInputChange, handleSubmit } = useSignInForm()

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('lg')]: {
          flexDirection: 'row'
        }
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          [theme.breakpoints.up('lg')]: {
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
            <PrimaryInput label='Email' placeholder='example@gmail.com' name='email' onChange={handleInputChange} type='text' />
            <PrimaryInput label='Password' placeholder='at least 8 characters' name='password' onChange={handleInputChange} type='password' />

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
                  display: 'flex',
                  alignItems: 'center',
                  [theme.breakpoints.up('sm')]: {
                    fontSize: '12px'
                  }
                }}
              >
                <Checkbox />
                Remember me
              </InputLabel>
              <Link href='forgot-password' ><a className={styles.forgotPassword}>Forgot password?</a></Link>
            </Box>

            <PrimaryButton>
              Sign In
            </PrimaryButton>

            <Typography
              variant='p'
              sx={{
                textAlign: 'center'
              }}
            >
              {'Don\'t'} have an account?
              <Box component='span'
                sx={{
                  color: theme.palette.primary.main,
                  marginLeft: '.25rem',
                  fontWeight: '500'
                }}
              >
                <Link href='/sign-up' className={styles.span}>
                  <a>
                    Sign up
                  </a>
                </Link>
              </Box>
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
          [theme.breakpoints.up('lg')]: {
            display: 'grid'
          }
        }}
      >

      </Box>
      {
        isOverlayVisible && mobileWidth < 380 && (
          <SignInOverlay setIsOverlayVisible={setIsOverlayVisible} />
        )
      }
    </Box>

  )
}

export default SignIn
