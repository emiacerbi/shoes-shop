import ErrorPage from '@components/ErrorPage/ErrorPage'
import HeaderLoggedIn from '@components/HeaderLoggedIn/HeaderLoggedIn'
import { Box } from '@mui/material'

export default function Error404 () {
  return (

    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}>

      <Box
        sx={{
          display: { xs: 'none', md: 'flex' }
        }}>
        <HeaderLoggedIn links={['Home', 'For women', 'For men', 'Accesories', 'Sale']} pages={['Home', 'For women', 'For men', 'Accesories', 'Sale']} />
      </Box>

      <ErrorPage/>
    </Box>
  )
}
