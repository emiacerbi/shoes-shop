import { Avatar, Box, Typography, useTheme } from '@mui/material'

export default function SubHeader () {
  const theme = useTheme()

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-end',
      width: 180,
      height: 40,
      margin: '20px 0px',
      [theme.breakpoints.up('sm')]: {
        width: 280,
        height: 80,
        marginLeft: '20px',
        marginTop: '-20px'
      }
    }}>
      <Avatar src='/jane-meldrum.png' sx={{
        width: { xs: 60, sm: 120 },
        height: { xs: 60, sm: 120 },
        border: '1px solid #FFFFFF'
      }}/>
      <Box sx={{ marginLeft: 'auto', marginBottom: '0px' }}>
        <Typography variant='h1' sx={{
          fontSize: { xs: '14px', sm: '20px' },
          lineHeight: { xs: '12px', sm: '24px' }
        }}>Jane Meldrum</Typography>
        <Typography variant='p' sx={{ lineHeight: '14px' }}>1374 bonus points</Typography>
      </Box>
    </Box>
  )
}
