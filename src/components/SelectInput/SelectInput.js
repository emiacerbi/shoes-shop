import { Box, FormControl, InputLabel, MenuItem, Select, Typography, useTheme } from '@mui/material'
const SelectInput = ({ inputValues, name, onChange }) => {
  const theme = useTheme()
  return (

    <Box sx={{ width: '100%', display: 'flex', gap: '.5rem', flexDirection: 'column' }}>
      <Typography variant='p' sx={{ fontWeight: '500' }} >
        {name}  <Box component='span' sx={{ color: theme.palette.primary.main }}>*</Box></Typography>
      <FormControl fullWidth>
        <InputLabel id={`select-input-${name}`}>{name}</InputLabel>
        <Select
          labelId={`select-input-${name}`}
          id="select"
          label={name}
          name={name}
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
