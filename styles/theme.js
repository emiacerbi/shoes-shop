import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#FE645E'
    },
    secondary: {
      main: '#6E314A'
    },
    neutral: {
      main: '#141E7A',
      dark: '#0A1047'
    }
  },
  typography: {
    fontFamily: "'Work Sans', sans-serif",
    fontWeightMedium: '500',
    fontWeightBold: '600'

  }
})

theme.typography.h1 = {
  fontSize: '30px',
  fontWeight: '500',
  '@media (min-width:600px)': {
    fontSize: '45px'
  }
}

theme.typography.p = {
  color: '#5C5C5C',
  fontSize: '12px',
  '@media (min-width:600px)': {
    fontSize: '15px'
  }
}
