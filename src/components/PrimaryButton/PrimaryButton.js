import { Button } from '@mui/material'
import { useTheme } from '@mui/material/styles'

const PrimaryButton = ({ children, onClick, maxWidth = '436px' }) => {
  const theme = useTheme()

  return (
    <Button
      type='submit'
      onClick={onClick}
      variant='contained'
      sx={{
        color: 'white',
        backgroundColor: '',
        textTransform: 'none',
        maxWidth,
        fontSize: '12px',
        width: '100%',
        [theme.breakpoints.up('md')]: {
          fontSize: '16px'
        }
      }}
    >
      {children}
    </Button>
  )
}

export default PrimaryButton
