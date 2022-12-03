import { Box, FormControl, MenuItem, Select, Typography } from '@mui/material'
const SelectInput = ({ inputValues, name, onChange, label }) => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        gap: '.5rem',
        py: '.5rem',
        flexDirection: 'column'
      }}
    >
      <Typography variant="p" sx={{ fontWeight: '500' }}>
        {label}{' '}
        <Box component="span" sx={{ color: 'primary.main' }}>
          *
        </Box>
      </Typography>
      <FormControl fullWidth size="small">
        <Select
          labelId={`select-input-${name}`}
          id="select"
          name={name}
          onChange={onChange}
          defaultValue={1}
          required
          sx={{
            width: '100%',
            fontFamily: "'Work Sans', sans-serif",
            borderRadius: '8px',
            padding: '0'
          }}
        >
          {inputValues.map((value, i) => (
            <MenuItem key={i} value={i + 1}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default SelectInput
