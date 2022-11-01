import Link from 'next/link'
import { Typography, Box } from '@mui/material'
import React from 'react'
import PrimaryButton from '../PrimaryButton/PrimaryButton'
import SecondaryButton from '../SecondaryButton.js/SecondaryButton'

const ErrorPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'colunm',
        flex: '.5',
        width: '100%',
        position: 'relative',
        '@media (min-width: 1000px)': {
          maxHeight: '80vh',
          flexDirection: 'row'
        }
      }}
    >
      <Box

        sx={{
          display: 'flex',
          alignItems: 'center',
          minHeight: '100vh',
          flexDirection: 'column',
          width: '100px',
          flex: '1',
          '@media (min-width: 1000px)': {
            minHeight: '79vh',
            width: '50%'
          }
        }}

      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flex: '1',
            paddingBlock: '2.5rem',
            paddingInline: '3.5rem',
            textAlign: 'center',
            alignItems: 'center',
            gap: '.5rem',
            width: '100%',
            '@media (min-width: 1000px)': {
              justifyContent: 'center',
              alignItems: 'flex-start',
              gap: '1rem',
              textAlign: 'start'
            }
          }}
        >
          <Typography variant="h1">Error 404</Typography>
          <Typography
            variant="p"
            sx={{
              maxWidth: '390px',
              display: 'none',
              '@media (min-width: 1000px)': { display: 'flex' }
            }}
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna
          </Typography>

          <Typography
            sx={{ '@media (min-width: 1000px)': { display: 'none' } }}
            variant="p"
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam{' '}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              marginTop: 'auto',
              width: '300px',
              gap: '1rem',
              '@media (min-width: 1000px)': {
                marginTop: '0',
                margin: '0'
              }
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
          width: '100%',
          top: '0',
          borderRadius: '0 0 2rem 2rem',
          zIndex: -1,
          '@media (min-width: 1000px)': {
            display: 'none',
            width: '50%',
            borderRadius: '0',
            backgroundSize: 'contain',
            flexDirection: 'column'
          }
        }}
      ></Box>
      <Box
        sx={{
          display: 'none',
          width: '50%',
          backgroundImage: "url('/error404.png')",
          backgroundPosition: 'bottom',
          backgroundColor: '#E5E6E7',
          backgroundSize: '90%',
          backgroundRepeat: 'no-repeat',
          '@media (min-width: 1000px)': {
            display: 'block',
            backgroundPosition: 'center'
          }
        }}
      ></Box>
    </Box>
  )
}

export default ErrorPage
