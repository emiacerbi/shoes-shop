import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'

function CheckBoxBrand ({ label }) {
  return (
    <>
      <FormGroup aria-label="position" column >
        {
          label.map(brand => (
            <>
              <FormControlLabel
                label={brand.attributes.name}
                control={<Checkbox/>}
              />
            </>
          ))
        }
      </FormGroup>

    </>
  )
}

export default CheckBoxBrand
