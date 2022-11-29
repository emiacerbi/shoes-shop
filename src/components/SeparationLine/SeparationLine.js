import { Box } from '@mui/material'

function SeparationLine({ width }) {
  return (
    <Box
      sx={{
        width: `${width}`,
        color: '#EAECF0',
        borderTop: '1px solid'
      }}
    ></Box>
  )
}

export default SeparationLine
