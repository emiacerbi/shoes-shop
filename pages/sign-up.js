import { Box, Button, Checkbox, InputLabel, Typography, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Form from '../src/components/Form/Form'
import PrimaryInput from '../src/components/PrimaryInput/PrimaryInput'
import PrimaryButton from '../src/components/PrimaryButton/PrimaryButton'
import SignUpOverlay from '../src/components/SignUpOverlay/SignUpOverlay'
import Star from '../src/components/Star/Star'
import Wedge from '../src/components/Wedge/Wedge'
import Link from 'next/link'
import useSignUpForm from '../src/hooks/useSignUpForm'
import HeaderBeforeLogin from '../src/components/Header/Header'

const SignUp = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true)
  const [mobileWidth, setMobileWidth] = useState()

  const theme = useTheme()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setMobileWidth(window.innerWidth)
    }
  }, [mobileWidth])

  const { handleSubmit, handleInputChange } = useSignUpForm()

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
          <Typography variant="h1">Create an account</Typography>
          <Typography variant='p'>Create an account to get an easy access to your dream shopping</Typography>
          <Form onSubmit={handleSubmit}>
            <PrimaryInput label='Name' placeholder='Hayman Andres' name='name' onChange={handleInputChange} />
            <PrimaryInput label='Email' placeholder='example@gmail.com' name='email' onChange={handleInputChange} />
            <PrimaryInput label='Password' placeholder='at least 8 characters' name='password' onChange={handleInputChange} />
            <PrimaryInput label='Repeat password' placeholder='at least 8 characters' name='repeatedPassword' onChange={handleInputChange} />
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
            <PrimaryButton>
                Sign up
            </PrimaryButton>
            <Typography
              variant='p'
              sx={{
                textAlign: 'center',
                fontWeight: '500'
              }}
            >
                Already have an account?
              <Link href='/'>
                <Button
                  variant='text'
                  sx={{
                    textTransform: 'none',
                    fontSize: '15px'
                  }}
                >
                  Log in
                </Button>
              </Link>
            </Typography>
          </Form>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'none',
          width: '50%',
          backgroundImage: 'url(/sign-up-shoes-desktop.png)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          [theme.breakpoints.up('lg')]: {
            display: 'grid',
            placeContent: 'center',
            padding: '2rem',
            position: 'relative',
            zIndex: 0
          }
        }}
      >
        <Box
          sx={{
            [theme.breakpoints.up('lg')]: {
              background:
              'radial-gradient(55.99% 112.1% at 69.71% 44.01%, rgba(253, 253, 253, 0.074) 0%, rgba(0, 0, 0, 0) 100%), radial-gradient(64.9% 185.04% at 19.81% 27.89%, rgba(255, 255, 255, 0.42) 0%, rgba(255, 255, 255, 0.06) 100%)',
              backdropFilter: 'blur(12px)',
              width: '90%',
              maxWidth: '756px',
              height: '317px',
              borderRadius: '32px',
              padding: '4rem',
              display: 'flex',
              alignItems: 'center',
              border: '2px solid white',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: -1
            }
          }}
        >
        </Box>
        <Box
          sx={{
            fontSize: '20px',
            color: '#0D0D0D',
            maxWidth: '400px',
            position: 'relative',
            [theme.breakpoints.up('lg')]: {
              fontSize: '25px',
              maxWidth: '550px'
            }
          }}
        >
          <Box
            component='button'
            sx={{
              width: '38px',
              height: '38px',
              backgroundColor: 'transparent',
              position: 'absolute',
              bottom: '-40px',
              right: '75px',
              borderRadius: '50%',
              border: '2px solid white',
              fontSize: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              [theme.breakpoints.up('xl')]: {
                top: '0',
                right: '0'
              }
            }}
          >
            <Wedge />
          </Box>
          <Box
            component='button'
            sx={{
              width: '38px',
              height: '38px',
              backgroundColor: 'transparent',
              position: 'absolute',
              bottom: '-40px',
              right: '15px',
              borderRadius: '50%',
              border: '2px solid white',
              fontSize: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transform: 'rotate(180deg)',
              zIndex: 3,
              [theme.breakpoints.up('xl')]: {
                top: '0',
                right: '-60px'
              }
            }}

          >
            <Wedge />
          </Box>
                &quot;Lorem Ipsum is a really great company because the team is passionate about the projects they produce, the people they work with, the quality of the work they do.&quot;`
        </Box>
        <Typography
          variant='p'
          sx={{
            marginTop: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '.75rem',
            fontWeight: '600',
            color: '#0D0D0D',
            [theme.breakpoints.up('lg')]: {
              fontSize: '25px'
            }
          }}
        >
          John Stone <Star /><Star /><Star /><Star /><Star />
        </Typography>

        <Typography
          sx={{
            color: '#797979'
          }}
        >
          Ukraine, Chernivtsi
        </Typography>
      </Box>
      {
        isOverlayVisible && mobileWidth < 380 && (
          <SignUpOverlay setIsOverlayVisible={setIsOverlayVisible} />
        )
      }
    </Box>

  )
}

export default SignUp
