import { ThemeProvider } from '@mui/material'
import { UserProvider } from '../src/context/UserContext'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import '../styles/globals.css'
import { theme } from '../styles/theme'
import { SessionProvider } from 'next-auth/react'
import { Toaster } from 'react-hot-toast'

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
