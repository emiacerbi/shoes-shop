import { Button, useTheme } from '@mui/material'

const SecondaryButton = ({ children, onClick, maxWidth = '436px' }) => {
  const theme = useTheme()
  return (
    <Button
      onClick={onClick}
      sx={{
        backgroundColor: 'transparent',
        border: '1px solid var(--primary)',
        width: '100%',
        borderRadius: '5px',
        fontFamily: '"Work Sans", sans-serif',
        color: 'var(--primary)',
        fontWeight: 500,
        textTransform: 'none',
        maxWidth,
        fontSize: '12px',
        [theme.breakpoints.up('md')]: {
          fontSize: '16px'
        }
      }}
    >
      {children}
    </Button>
  )
}

export default SecondaryButton
