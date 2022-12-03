import { Box, Typography } from '@mui/material'

export default function NavBarItem ({ name, num, children }) {
  const numTag = num
    ? (<Box sx={{ cursor: 'pointer' }}>
      <Typography
        sx={{
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
      >
        {num}
      </Typography>
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
          textAlign: 'center',
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: -1,
            left: 0,
            width: '100%',
            height: '0.125rem',
            backgroundColor: 'primary.main',
            transition: 'opacity 300ms, transform 300ms',
            opacity: '1',
            transform: 'scale(0)',
            transformOrigin: 'center'
          },
          '&:hover::after': {
            transform: 'scale(1)'
          }
        }}
        component='a'
      >
        {name}
      </Typography>
      {numTag}
    </Box>
  )
}
