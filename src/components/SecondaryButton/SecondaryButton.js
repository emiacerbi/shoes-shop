import { Button, useTheme } from '@mui/material'

const SecondaryButton = ({ children, onClick, maxWidth = '436px' }) => {
  const theme = useTheme()
  return (
    <Button
      onClick={onClick}
      sx={{
        backgroundColor: 'transparent',
        border: '1px primary.main solid',
        width: '100%',
        borderRadius: '5px',
        fontFamily: '"Work Sans", sans-serif',
        fontWeight: 500,
        textTransform: 'none',
        cursor: 'pointer',
        maxWidth,
        [theme.breakpoints.up('md')]: {
          fontSize: '16px'
        }
      }}
      variant = 'outlined'
    >
      {children}
    </Button>
  )
}

export default SecondaryButton
