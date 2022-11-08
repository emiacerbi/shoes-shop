import { Box, Typography, useTheme } from '@mui/material'
import Image from 'next/image'

import ColoredDash from '../ColoredDash/ColoredDash'
import PrimaryButton from '../PrimaryButton/PrimaryButton'
import SecondaryButton from '../SecondaryButton/SecondaryButton'

const SignUpOverlay = ({ setIsOverlayVisible }) => {
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
        [theme.breakpoints.up('overlay')]: {
          display: 'none'
        }
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '72vh',
          backgroundColor: '#e9eef4',
          zIndex: 3
        }}
      >
        <Image src='/sign-up-shoes.png' alt='pair of shoes' layout='fill' objectFit='cover' />

      </Box>

      <Box sx={{
        backgroundColor: '#e9eef4',
        paddingInline: '1rem',
        paddingBottom: '1rem'
      }}>
        <Typography variant='h1' sx={{ zIndex: 1, maxWidth: '170px' }}>Welcome to Wellrun</Typography>
        <Box
          sx={{
            display: 'flex', gap: '.5rem', zIndex: 1
          }}
        >
          <ColoredDash />
          <ColoredDash opacity='.3' />
          <ColoredDash opacity='.3' />
          <ColoredDash opacity='.3' />
        </Box>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          paddingInline: '1rem',
          display: 'flex',
          gap: '1rem',
          bottom: '30px'
        }}
      >
        <SecondaryButton onClick={() => setIsOverlayVisible(false)}>
            Sign up
        </SecondaryButton>
        <PrimaryButton onClick={() => setIsOverlayVisible(false)}>
            Sign In
        </PrimaryButton>
      </Box>
    </Box>
  )
}

export default SignUpOverlay
