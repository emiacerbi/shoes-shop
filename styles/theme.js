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
    },
    common: {
      main: '#6E7278'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      overlay: 400,
      md: 900,
      lg: 1200,
      xl: 1536
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
  [theme.breakpoints.up('sm')]: {
    fontSize: '45px'
  }
}

theme.typography.p = {
  color: '#5C5C5C',
  fontSize: '12px',
  [theme.breakpoints.up('sm')]: {
    fontSize: '15px'
  }
}

theme.typography.h3 = {
  fontSize: '12px',
  fontWeight: '500',
  [theme.breakpoints.up('sm')]: {
    fontSize: '30px'
  }
}

theme.typography.subtitle1 = {
  fontSize: '8px',
  fontWeight: '500',
  [theme.breakpoints.up('sm')]: {
    fontSize: '20px'
  }
}

theme.typography.body2 = {
  color: '#000000',
  fontSize: '30px'

}
