import { Typography, Box } from '@mui/material'
import Header from '../src/components/Header/Header'
import PrimaryButton from '../src/components/PrimaryButton/PrimaryButton'

export default function Custom500 () {
  return (
    <>
      <Box
        sx={{
          display: { xs: 'none', sm: 'block' }
        }}
      >
        <Header />
      </Box>
      <Box
        component='main'
        sx={{
          backgroundImage: 'url(/500bg.png)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: { xs: '100vh', sm: 'calc(100vh - 68px)' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: { xs: 'space-between', sm: 'flex-start' },
          padding: { xs: '20vh 0  5vh', sm: '15vh 0' },
          alignItems: 'center'
        }}
      >
        <Box
          sx={{
            maxWidth: '436px',
            width: '100%',
            textAlign: 'center'
          }}
          component='section'
        >
          <Typography variant='h1'>Oh snap!</Typography>
          <Typography variant='p'>
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
          <PrimaryButton>Back Home</PrimaryButton>
        </Box>
      </Box>
    </>
  )
}
