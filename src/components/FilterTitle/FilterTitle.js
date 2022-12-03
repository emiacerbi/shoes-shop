import { useState } from 'react'
import { CheckBox } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'

function FilterTitle({ filterName, handleFilters, category }) {
  const [isFilterVisible, setIsFilterVisible] = useState(false)

  return (
    <Box display={'flex'} sx={{ width: 'auto', alignItems: 'end', mb: '20px' }}>
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: '16px',
          lineHeight: '19px',
          mt: '28px'
        }}
        onClick={() => setIsFilterVisible(!isFilterVisible)}
      >
        {filterName}
      </Typography>
      {isFilterVisible && (
        <Box
          component="img"
          src="/vector.png"
          alt="vector icon"
          sx={{
            marginLeft: 'auto',
            width: '8px',
            height: '16px',
            marginRight: '20px',
            transition: 'all 0.5s ease',
            '&:hover': {
              transform: 'rotate(180deg)',
              cursor: 'pointer'
            }
          }}
        >
          <CheckBox
            label={category}
            name={category}
            handleFilters={handleFilters}
          />{' '}
        </Box>
      )}
    </Box>
  )
}

export default FilterTitle
