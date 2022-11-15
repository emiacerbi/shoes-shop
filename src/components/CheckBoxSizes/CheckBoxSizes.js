import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'

function CheckBoxSizes ({ label }) {
  return (
    <>
      <FormGroup aria-label="position" column >
        {
          label.data.map(size => (
            <>
              <FormControlLabel
                label={size.attributes.value}
                control={<Checkbox/>}
              />
            </>
          ))
        }
      </FormGroup>

    </>
  )
}

export default CheckBoxSizes
