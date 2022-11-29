import ErrorPage from '@components/ErrorPage/ErrorPage'
import HeaderBeforeLogin from '@components/Header/Header'
import { Box } from '@mui/material'
import Head from 'next/head'

export default function Error404() {
  return (
    <>
      <Head>
        <title>Error 404</title>
      </Head>

      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' }
          }}
        >
          <HeaderBeforeLogin />
        </Box>

        <ErrorPage />
      </Box>
    </>
  )
}
