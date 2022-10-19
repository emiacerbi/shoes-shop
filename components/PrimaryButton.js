import { Button } from '@mui/material'
import React from 'react'

const PrimaryButton = ({ children }) => {
  return (
    <Button
      variant='contained'
      color='primary'
      style={{
        width: '436px',
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
