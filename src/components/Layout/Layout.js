import { Container } from '@mui/system'
import Image from 'next/image'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <Container
      sx={{
        paddingTop: '0',
        paddingInline: '0'
      }}
    >
      <div style={{ padding: '1.5rem' }}>
        <Image src='/logo.png' alt='asd' width={40} height={30} />
      </div>

      <div style={{ width: '100%', height: '1px', backgroundColor: 'lightgray' }}></div>

      {children}
    </Container>
  )
}

export default Layout
