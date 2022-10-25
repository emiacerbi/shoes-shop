import { ThemeProvider } from '@mui/material'
import { UserProvider } from '../src/context/UserContext'
import '../styles/globals.css'
import { theme } from '../styles/theme'

function MyApp ({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </ThemeProvider>
  )
}

export default MyApp
