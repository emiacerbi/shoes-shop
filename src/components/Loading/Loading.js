import { CircularProgress } from '@mui/material'
import { Box } from '@mui/system'

const Loading = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '20rem',
        display: 'grid',
        placeContent: 'center'
      }}
    >
      <CircularProgress size={50} color="primary" />
    </Box>
  )
}

export default Loading
