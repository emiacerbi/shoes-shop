import { Box, FormControl, MenuItem, Select, Typography } from '@mui/material'
const SelectInput = ({ inputValues, name, onChange, label }) => {
  return (
    <Box sx={{ width: '100%', display: 'flex', gap: '.5rem', flexDirection: 'column' }}>
      <Typography variant='p' sx={{ fontWeight: '500' }} >
        {label}  <Box component='span' sx={{ color: 'primary.main' }}>*</Box></Typography>
      <FormControl fullWidth>
        {/* <InputLabel id={`select-input-${name}`}>{label}</InputLabel> */}
        <Select
          labelId={`select-input-${name}`}
          id="select"
          // label={label}
          // name={name}
          onChange={onChange}
          defaultValue=''
          required
        >
          {inputValues.map((value, i) => <MenuItem key={i} value={value}>{value}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>
  )
}

export default SelectInput
