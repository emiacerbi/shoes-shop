import { useEffect, useState } from 'react'
import Blockquote from '@components/Blockquote/Blockquote'
import Form from '@components/Form/Form'
import HeaderBeforeLogin from '@components/Header/Header'
import PrimaryButton from '@components/PrimaryButton/PrimaryButton'
import PrimaryInput from '@components/PrimaryInput/PrimaryInput'
import SignUpOverlay from '@components/SignUpOverlay/SignUpOverlay'
import { Box, Button, Checkbox, CircularProgress, InputLabel, Typography, useTheme } from '@mui/material'
import useSignUpForm from 'hooks/useSignUpForm'
import Link from 'next/link'

const SignUp = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true)
  const [mobileWidth, setMobileWidth] = useState()

  const theme = useTheme()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setMobileWidth(window.innerWidth)
    }
  }, [mobileWidth])

  const { handleSubmit, handleInputChange, isPasswordIncorrect, mutation } = useSignUpForm()

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
            <PrimaryInput label='Name' placeholder='Hayman Andres' name='name' onChange={handleInputChange} type='text' />
            <PrimaryInput label='Email' placeholder='example@gmail.com' name='email' onChange={handleInputChange} type='email' />
            <PrimaryInput label='Password' placeholder='at least 8 characters' name='password' onChange={handleInputChange} type='password' />
            {
              isPasswordIncorrect && (
                <Typography variant='p' sx={{ color: theme.palette.primary.main, marginTop: '-15px', fontSize: '20px' }}>
                  Your password should be 8 characters long!
                </Typography>
              )
            }
            <PrimaryInput label='Repeat password' placeholder='at least 8 characters' name='repeatedPassword' onChange={handleInputChange} type='password' />
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
            <PrimaryButton>
              {
                mutation.isLoading ? <CircularProgress size={28} color='action' /> : 'Sign up'
              }
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

      {/* Right container */}
      <Blockquote />

      {
        isOverlayVisible && mobileWidth < 380 && (
          <SignUpOverlay setIsOverlayVisible={setIsOverlayVisible} />
        )
      }
    </Box>

  )
}

export default SignUp
