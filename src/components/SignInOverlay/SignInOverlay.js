import { Button, Link, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'

import PrimaryButton from '../PrimaryButton/PrimaryButton'

const SignInOverlay = ({ setIsOverlayVisible }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '100%',
        height: '100vh',
        top: '0',
        left: '0',
        zIndex: '0',
        backgroundColor: '#e9eef4',
        display: { overlay: 'none' }
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '80vh',
          top: '0px',
          left: '0',
          borderRadius: '0 0 20px 20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          paddingInline: '2rem',
          paddingBlock: '1rem',
          gap: '.75rem',
          zIndex: -1,
          overflow: 'hidden'
        }}
      >
        <Image src='/sign-up-shoes.png' alt='pair of shoes' layout='fill' objectFit='cover' />
        <Typography
          variant='h1'
          sx={{
            lineHeight: '1.2',
            width: '9ch',
            left: '1.5rem',
            fontWeight: '600',
            marginBottom: '-1rem',
            zIndex: '2'
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
                textTransform: 'none',
                padding: 0
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
