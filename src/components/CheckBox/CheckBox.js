import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'

function CheckBox({ label, name, handleFilters }) {
  return (
    <>
      <FormGroup aria-label="position">
        {label.map((data) => (
          <FormControlLabel
            key={data}
            name={data.toString().toLowerCase()}
            label={data}
            control={
              <Checkbox
                onClick={(e) => handleFilters(e, name, data)}
                value={toString().toLowerCase()}
              />
            }
          />
        ))}
      </FormGroup>
    </>
  )
}

export default CheckBox
