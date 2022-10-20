import { TextField } from '@mui/material'
import React from 'react'

const PrimaryInput = ({ label, placeholder }) => {
  return (
    <label>
      <h3
        style={{
          fontSize: '15px',
          fontWeight: '500',
          color: '#494949'
        }}
      >
        {label} <span style={{ color: '#FE645E' }} >*</span>
      </h3>
      <TextField
        sx={{
          maxWidth: '436px',
          width : '100%',
          height: '48px',
          marginTop: '.5rem'
        }}
        placeholder={placeholder}
        className='inputRounded'
      />
    </label>
  )
}

export default PrimaryInput
