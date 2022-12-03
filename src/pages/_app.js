import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from '@mui/material'
import { theme } from '@styles/theme'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Head from 'next/head'
import { SessionProvider } from 'next-auth/react'

import { UserProvider } from '../context/UserContext'

import '../styles/globals.css'

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}) {
  const queryClient = new QueryClient()

  return (
    <>
      <Head>
        <title>Shoes shop</title>
      </Head>
      <SessionProvider session={session} refetchOnWindowFocus={true}>
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <UserProvider>
              <Toaster />
              <Component {...pageProps} />
            </UserProvider>
          </QueryClientProvider>
        </ThemeProvider>
      </SessionProvider>
    </>
  )
}
