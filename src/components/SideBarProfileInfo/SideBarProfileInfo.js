import { Avatar, Box, Typography } from '@mui/material'

export default function ProfileInfoSideBar () {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      paddingInline: '2rem',
      height: 134,
      width: '100%',
      borderBottom: '1px solid #EAECF0'
    }}>
      <Avatar src='/jane-meldrum.png' sx={{ width: 64, height: 64, border: '2px solid #FFFFFF' }}/>
      <Box sx={{ ml: '16px' }} >
        <Typography variant='p' sx={{ fontSize: '12px', fontWeight: 500, lineHeight: '18px' }}>Welcome</Typography>
        <Typography variant='h3' sx={{ fontSize: '16px !important', lineHeight: '19px !important' }}>Julian Oviedo</Typography>
      </Box>
    </Box>
  )
}
