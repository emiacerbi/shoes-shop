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
        width: '436px',
        display: 'block',
        height: '48px',
        borderRadius: '8px'
      }}
    >
      {children}
    </Button>
  )
}

export default PrimaryButton
