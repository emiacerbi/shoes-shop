import { ThemeProvider } from '@mui/material'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import '../styles/globals.css'
import { theme } from '../styles/theme'

function MyApp ({ Component, pageProps }) {
  const queryClient = new QueryClient()

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default MyApp
