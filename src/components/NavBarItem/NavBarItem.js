import { Box, Typography } from '@mui/material'

export default function BarItem ({ name, num, children }) {
  const numTag = num
    ? (<Box>
      <Typography
        sx = {{
          backgroundColor: 'primary.main',
          color: 'white',
          borderRadius: '50%',
          fontsize: '16px',
          fontWeight: '500',
          lineHeight: '100%',
          width: '20px',
          height: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: '9px',
          padding: '2px'
        }}
      > {num} </Typography>
    </Box>)
    : null

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start'
      }}
    >
      {children}
      <Typography
        sx={{
          marginLeft: '15px',
          fontSize: '16px',
          fontWeight: '500',
          color: 'black',
          textAlign: 'center'
        }}
        component='a'
      >
        {name}
      </Typography>
      {numTag }
    </Box>
  )
}
