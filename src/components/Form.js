import React from 'react'

const Form = ({ onSubmit, children }) => {
  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem'
      }}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  )
}

export default Form
