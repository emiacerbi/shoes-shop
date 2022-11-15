import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'

function CheckBox ({ label }) {
  return (
    <>
      <FormGroup aria-label="position" column >
        {
          label.data.map(data => (
            <>
              <FormControlLabel
                label={data.attributes.name}
                control={<Checkbox/>}/>
            </>
          ))
        }
      </FormGroup>
    </>
  )
}

export default CheckBox
