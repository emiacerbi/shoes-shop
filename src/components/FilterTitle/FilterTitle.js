import { Box, Typography } from '@mui/material'

function FilterTitle ({ filterName }) {
  return (
    <Box display={'flex'} sx={{ width: 'auto', alignItems: 'end', mb: '20px' }}>
      <Typography sx={{ fontWeight: 500, fontSize: '16px', lineHeight: '19px', mt: '28px' }}>{filterName}</Typography>
      <Box
        component="img"
        src="/vector.png"
        alt="vector icon"
        // onClick={handleGender}
        sx={{
          marginLeft: '180px',
          width: '8px',
          height: '16px',
          transition: 'all 0.5s ease',
          '&:hover': {
            transform: 'rotate(180deg)',
            cursor: 'pointer'
          }
        }}
      ></Box>
    </Box>
  )
}

export default FilterTitle
