import HeaderBeforeLogin from '@components/Header/Header'
import PrimaryButton from '@components/PrimaryButton/PrimaryButton'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

export default function Custom500 () {
  return (
    <>
      <Box
        sx={{
          display: { xs: 'none', sm: 'block' }
        }}
      >
        <HeaderBeforeLogin />
      </Box>
      <Box
        component='main'
        sx={{
          height: { xs: '100vh', sm: 'calc(100vh - 68px)' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: { xs: 'space-between', sm: 'flex-start' },
          padding: { xs: '20vh 0  5vh', sm: '15vh 0' },
          alignItems: 'center',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <Image
          src='/500bg.png'
          alt='500 error - background picture'
          layout='fill'
          style={{ zIndex: -1 }}
          objectFit='cover'
        />
        <Box
          sx={{
            maxWidth: '436px',
            width: '100%',
            textAlign: 'center'
          }}
          component='section'
        >
          <Typography variant='h1' sx={{ color: 'white' }}>
            Oh snap!
          </Typography>
          <Typography variant='p' sx={{ color: 'white' }}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh minim veniam.
          </Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
            maxWidth: '280px'
          }}
        >
          <Link href='/home'>
            <PrimaryButton>Back Home</PrimaryButton>
          </Link>
        </Box>
      </Box>
    </>
  )
}
