import { Button } from '@mui/material'

const SecondaryButton = ({ children, onClick, maxWidth = '436px', form, type }) => {
  return (
    <Button
      form={form}
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
        fontSize: { md: '16px' }
      }}
      variant='outlined'
      type={type}
    >
      {children}
    </Button>
  )
}

export default SecondaryButton
