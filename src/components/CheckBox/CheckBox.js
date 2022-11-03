import { FormGroup, FormControlLabel, Checkbox } from '@mui/material'

function CheckBox ({ label }) {
  return (
    <FormGroup aria-label="position" column >
      <FormControlLabel
        control={<Checkbox/>}
        label={label}
      />
    </FormGroup>)
}

export default CheckBox
