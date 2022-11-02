import { Box } from '@mui/system'
import React from 'react'
import Image from 'next/image'
import { Typography } from '@mui/material'

export default function ProductCard ({ productTitle, productDescription, productPrice, image }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: { xs: 150, sm: 320 } }}>
      <Image src={image} layout='responsive' width={150} height={180} alt="product"/>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '2px' }}>
        <Box>
          <Typography variant='h1' sx={{
            fontSize: { xs: '10px', sm: '22px' },
            lineHeight: { xs: '12px', sm: '25px' }
          }} >{productTitle}</Typography>
          <Typography component='p' sx={{
            color: '#5C5C5C',
            fontWeight: 500,
            fontSize: { xs: '9px', sm: '18px' },
            lineHeight: { xs: '10px', sm: '22px' }
          }}>{productDescription}</Typography>
        </Box>
        <Typography variant='h1' sx={{
          fontSize: { xs: '10px', sm: '22px' },
          lineHeight: { xs: '12px', sm: '25px' }
        }} >${productPrice}</Typography>
      </Box>
    </Box>
  )
}
