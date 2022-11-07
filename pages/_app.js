import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from '@mui/material'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import { SessionProvider } from 'next-auth/react'

import { UserProvider } from '../src/context/UserContext'
import { theme } from '../styles/theme'

import '../styles/globals.css'

export default function App ({
  Component,
  pageProps: { session, ...pageProps }
}) {
  const queryClient = new QueryClient()

  return (
    <SessionProvider session={session} refetchOnWindowFocus={true} >
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <UserProvider>
            <Toaster />
            <Component {...pageProps} />
          </UserProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </SessionProvider>
  )
}
