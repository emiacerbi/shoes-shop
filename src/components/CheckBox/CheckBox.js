import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'

function CheckBox({ label, handleFilters, filterName, isDisabled = false }) {
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
                onClick={(e) =>
                  handleFilters(e, filterName.toLowerCase(), data)
                }
                disabled={isDisabled}
              />
            }
          />
        ))}
      </FormGroup>
    </>
  )
}

export default CheckBox
