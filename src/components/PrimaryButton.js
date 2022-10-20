import { Button } from '@mui/material'
import React from 'react'

// Children: Button text content

const PrimaryButton = ({ children }) => {
  return (
    <Button
      type='submit'
      variant='contained'
      sx={{
        fontWeight: 'medium',
        maxWidth: '436px',
        width: '100%',
        display: 'block',
        height: '48px',
        borderRadius: '8px',
        color: '#fff',
      }}
    >
      {children}
    </Button>
  )
}

export default PrimaryButton
