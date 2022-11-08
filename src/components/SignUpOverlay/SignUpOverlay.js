import { Box, Typography, useTheme } from '@mui/material'

import ColoredDash from '../ColoredDash/ColoredDash'
import PrimaryButton from '../PrimaryButton/PrimaryButton'
import SecondaryButton from '../SecondaryButton.js/SecondaryButton'

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
        [theme.breakpoints.up('sm')]: {
          display: 'none'
        }
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '80vh',
          top: '0px',
          left: '0',
          zIndex: 1,
          backgroundImage: "url('/sign-up-shoes.png')",
          backgroundSize: 'container',
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
        <Typography variant='h1'>Welcome to Wellrun</Typography>
        <Box
          sx={{
            display: 'flex', gap: '.5rem'
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
          bottom: '50px'
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
