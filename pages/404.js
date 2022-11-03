import React from 'react'
import { Box } from '@mui/material'
// import error404Image from '../public/error404.png'
import ErrorPage from '../src/components/ErrorPage/ErrorPage'
import HeaderLoggedIn from '../src/components/HeaderLoggedIn/HeaderLoggedIn'

// import styles from '../styles/404.module.css'

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
          display: { xs: 'none', md: 'flex' },
          minWidth: '1000px'
        }}>

        <HeaderLoggedIn pages={['Home', 'For women', 'For men', 'Accesories', 'Sale']} />
      </Box>

      <ErrorPage/>
    </Box>
  )
}
