import { useState } from 'react'
import CheckBox from '@components/CheckBox/CheckBox'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import { Box, InputBase, Typography } from '@mui/material'

function CustomFilter({
  filterName,
  category,
  handleFilters,
  isBrand,
  handleInput
}) {
  const [isFilterVisible, setIsFilterVisible] = useState(false)

  return (
    <Box>
      <Box
        display={'flex'}
        sx={{ width: 'auto', alignItems: 'end', mb: '20px', cursor: 'pointer' }}
        onClick={() => setIsFilterVisible(!isFilterVisible)}
      >
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '19px',
            mt: '28px'
          }}
        >
          {filterName}
        </Typography>
        <Box
          component="img"
          src="/vector.png"
          alt="vector icon"
          sx={{
            marginLeft: 'auto',
            width: '8px',
            height: '16px',
            transition: 'transform .2s ease',
            transform: isFilterVisible ? 'rotate(-90deg)' : 'rotate(0)',
            cursor: 'pointer'
          }}
        />
      </Box>

      {isBrand && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mb: '35px',
            gap: '.5rem',
            border: '1px solid lightgray',
            px: '.5rem',
            borderRadius: '2rem'
          }}
        >
          <SearchOutlinedIcon
            sx={{
              color: '#494949',
              width: '18px',
              height: '18px'
            }}
          />
          <InputBase
            sx={{
              borderRadius: '42px',
              width: '260px'
            }}
            type="text"
            onChange={handleInput}
            // value={search}
            placeholder="Search"
          />
        </Box>
      )}
      {isFilterVisible && (
        <Box>
          <CheckBox
            key={category}
            label={category}
            filterName={filterName}
            handleFilters={handleFilters}
          />
        </Box>
      )}
    </Box>
  )
}

export default CustomFilter
