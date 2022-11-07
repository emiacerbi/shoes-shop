import { Box, Typography } from '@mui/material'
import Link from 'next/link'

import PrimaryButton from '../PrimaryButton/PrimaryButton'
import SecondaryButton from '../SecondaryButton.js/SecondaryButton'

const ErrorPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'colunm', md: 'row' },
        flex: '1',
        width: '100%',
        position: 'relative'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          minHeight: { xs: '100vh', md: '79vh' },
          flexDirection: 'column',
          width: { xs: '100px', md: '50%' },
          flex: '1'
        }}

      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flex: '1',
            paddingBlock: '2.5rem',
            paddingInline: '3.5rem',
            justifyContent: { xs: 'center', md: 'center' },
            textAlign: { xs: 'center', md: 'start' },
            alignItems: { xs: 'center', md: 'flex-start' },
            gap: { xs: '.5rem', md: '1em' },
            width: '100%'
          }}
        >
          <Typography variant="h1">Error 404</Typography>
          <Typography
            variant="p"
            sx={{
              maxWidth: '390px',
              display: { xs: 'none', md: 'flex' }
            }}
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna
          </Typography>

          <Typography
            sx={{ display: { md: 'none' } }}
            variant="p"
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam{' '}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              marginTop: { xs: 'auto', md: '0' },
              width: '300px',
              margin: { md: '0' },
              gap: '1rem'
            }}
          >
            <Link href="/">
              <SecondaryButton>Go Back</SecondaryButton>
            </Link>
            <Link href="/home">
              <PrimaryButton maxWidth="152px">Home</PrimaryButton>
            </Link>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: '#e5e6e7',
          backgroundImage: "url('/error404.png')",
          backgroundPosition: 'bottom',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          position: 'absolute',
          height: '75%',
          width: { xs: '100%', md: '0' },
          top: '0',
          borderRadius: { xs: '0 0 2rem 2rem', md: '0' },
          zIndex: -1,
          flexDirection: { xs: 'row', md: 'column' }
        }}
      ></Box>
      <Box
        sx={{
          display: { xs: 'none', md: 'block' },
          width: '50%',
          backgroundImage: "url('/error404.png')",
          backgroundPosition: { xs: 'bottom', md: 'center' },
          backgroundColor: '#E5E6E7',
          backgroundSize: '90%',
          backgroundRepeat: 'no-repeat'
        }}
      ></Box>
    </Box>
  )
}

export default ErrorPage
