import { useState } from 'react'
import CheckBox from '@components/CheckBox/CheckBox'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import { Box, InputBase, Typography, useTheme } from '@mui/material'

function CustomFilter({
  filterName,
  category,
  handleFilters,
  isBrand,
  handleInput
}) {
  const [isFilterVisible, setIsFilterVisible] = useState(false)
  const theme = useTheme()

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
            marginRight: '20px',
            transition: 'all 0.5s ease',
            '&:hover': {
              transform: 'rotate(180deg)',
              cursor: 'pointer'
            }
          }}
        />
      </Box>

      {isBrand && (
        <Box sx={{ display: 'flex', alignItems: 'center', mb: '35px' }}>
          <SearchOutlinedIcon
            sx={{
              color: '#494949',
              position: 'absolute',
              ml: '16px',
              width: '18px',
              height: '18px'
            }}
          />
          <InputBase
            sx={{
              [theme.breakpoints.up('sm')]: {
                border: '1px solid #494949',
                borderRadius: '42px',
                width: '260px',
                height: '33px',
                paddingLeft: '40px',
                input: {
                  '&::placeholder': {
                    fontSize: '1.25rem',
                    color: '#494949'
                  }
                }
              }
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
            name={category}
            handleFilters={handleFilters}
          />
        </Box>
      )}
    </Box>
  )
}

export default CustomFilter
