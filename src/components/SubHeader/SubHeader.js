import { Avatar, Box, Typography } from '@mui/material'

export default function SubHeader () {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-end',
      width: 180,
      height: 40,
      margin: '20px 0px',
      '@media (min-width: 600px)': {
        width: 280, height: 80, marginLeft: '20px', marginTop: '-20px'
      }
    }}>
      <Avatar src='/jane-meldrum.png' sx={{
        width: 60,
        height: 60,
        border: '1px solid #FFFFFF',
        '@media (min-width: 600px)': {
          width: 120, height: 120
        }
      }}/>
      <Box sx={{ marginLeft: 'auto', marginBottom: '0px' }}>
        <Typography component='h1' sx={{
          fontWeight: '500',
          fontSize: '14px',
          lineHeight: '12px',
          '@media (min-width: 600px)': {
            fontWeight: '500', fontSize: '20px', lineHeight: '24px'
          }
        }}>Jane Meldrum</Typography>
        <Typography variant='p' sx={{ lineHeight: '14px' }}>1374 bonus points</Typography>
      </Box>
    </Box>
  )
}
