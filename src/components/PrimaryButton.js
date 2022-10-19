import { Button } from '@mui/material'
import React from 'react'

// Children: Button text content

const PrimaryButton = ({ children }) => {
  return (
    <Button
      type='submit'
      variant='contained'
      color='primary'
      style={{
        width: '436px',
        display: 'block',
        height: '48px',
        borderRadius: '8px',
        fontFamily: "'Work Sans', sans-serif",
        fontWeight: '500',
        color: 'white'
      }}
    >
      {children}
    </Button>
  )
}

export default PrimaryButton
