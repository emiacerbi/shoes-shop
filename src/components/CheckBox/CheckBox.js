import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'

function CheckBox ({ label }) {
  return (
    <>
      <FormGroup aria-label="position" column >
        {
          label.map(data => (
            <>
              <FormControlLabel
                label={data}
                control={<Checkbox/>}/>
            </>
          ))
        }
      </FormGroup>
    </>
  )
}

export default CheckBox
