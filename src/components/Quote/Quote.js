import { useTheme } from '@emotion/react'
import { Star } from '@mui/icons-material'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'

const Quote = ({ author = 'John Stone' }) => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        width: '650px',
        height: '300px',
        display: 'grid',
        placeContent: 'center',
        fontSize: '20px',
        color: '#0D0D0D',
        position: 'relative',
        paddingBlock: '2rem',
        [theme.breakpoints.up('lg')]: {
          fontSize: '25px',
          maxWidth: '550px'
        }
      }}
    >
      &quot;Lorem Ipsum is a really great company because the team is passionate about the projects they produce, the people they work with, the quality of the work they do.&quot;`
      <Typography
        variant='main'
        sx={{
          marginTop: '1rem',
          display: 'flex',
          gap: '1rem',
          color: '#0D0D0D',
          zIndex: 1
        }}
      >
        {author}
        <Box component='span' sx={{
          color: 'primary.main',
          display: 'flex',
          alignItems: 'center',
          gap: '.75rem'
        }}>
          <Star /><Star /><Star /><Star /><Star />
        </Box>
      </Typography>

      <Typography
        sx={{
          color: '#797979',
          zIndex: 1
        }}
      >
        Ukraine, Chernivtsi
      </Typography>
    </Box>
  )
}

export default Quote
