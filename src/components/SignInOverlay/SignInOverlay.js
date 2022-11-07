import { Button, Link, Typography } from '@mui/material'
import { Box, useTheme } from '@mui/system'

import PrimaryButton from '../PrimaryButton/PrimaryButton'

const SignInOverlay = ({ setIsOverlayVisible }) => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '100%',
        height: '100vh',
        backgroundColor: 'white',
        top: '0',
        left: '0',
        zIndex: '0',
        [theme.breakpoints.up('overlay')]: {
          display: 'none'
        }
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100vh',
          top: '0px',
          left: '0',
          zIndex: '0',
          backgroundImage: "url('/sign-up-shoes.png')",
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#e9eef4',
          borderRadius: '0 0 20px 20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          paddingInline: '2rem',
          paddingBlock: '1rem',
          gap: '.75rem'
        }}
      >
        <Typography
          variant='h1'
          sx={{
            lineHeight: '1.2',
            width: '9ch',
            left: '1.5rem',
            fontWeight: '600',
            marginBottom: '7rem'
          }}
        >
          Welcome to Wellrun
        </Typography>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          paddingInline: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          bottom: '15px',
          zIndex: 3
        }}
      >
        <PrimaryButton onClick={() => setIsOverlayVisible(false)}>
          Sign In
        </PrimaryButton>

        <Typography variant='p'
          sx={{
            textAlign: 'center',
            fontWeight: '500',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {'Don\'t'} have an account?
          <Link href='/sign-up' sx={{ textDecoration: 'none' }}>
            <Button
              variant='text'
              sx={{
                textTransform: 'none'

              }}
            >
              Sign up
            </Button>
          </Link>
        </Typography>

      </Box>

    </Box>
  )
}

export default SignInOverlay
