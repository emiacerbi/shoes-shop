import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'

export default function ProductCard ({ productTitle, productDescription, productPrice, image }) {
  return (
    <Grid item xs={5} lg={3} sx={{ width: { xs: 150, sm: 320 } }}>
      <Box sx={{ position: 'relative', minWidth: '150px', height: { xs: '178px', sm: '380px' } }}>
        <Image src={image} layout='fill' alt="product" objectFit='cover'/>
      </Box>
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
    </Grid>
  )
}
