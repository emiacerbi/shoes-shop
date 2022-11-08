import { Button } from '@mui/material'

const PrimaryButton = ({ children, onClick, maxWidth = '436px' }) => {
  return (
    <Button
      type='submit'
      onClick={onClick}
      variant='contained'
      sx={{
        color: 'white',
        textTransform: 'none',
        maxWidth,
        fontSize: { sx: '12px', sm: '16px' },
        width: '100%'
      }}
    >
      {children}
    </Button>
  )
}

export default PrimaryButton
