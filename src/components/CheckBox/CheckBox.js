import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'

function CheckBox ({ label, handleChecked, checked }) {
  return (
    <>
      <FormGroup aria-label="position" column >
        {
          label.data.map(data => (
            <>
              <FormControlLabel
                label={data.attributes.name}
                control={
                  <Checkbox onChange={() => {
                    data.attributes.name === 'Adidas' && handleChecked()
                    data.attributes.name === 'Asics' && handleChecked()
                    data.attributes.name === 'New Balance' && handleChecked()
                    data.attributes.name === 'Nike' && handleChecked()
                    data.attributes.name === 'Puma' && handleChecked()
                    data.attributes.name === 'Reebok' && handleChecked()
                  }}

                  inputProps={{ 'aria-label': 'controlled' }} >
                  </Checkbox>
                }
              />

              {/* {checked &&
        <Typography
          sx={{ position: 'absolute', mt: '10px', ml: '90px', fontSize: '16px', color: '#6E7278', lineHeight: '19px' }}>
        (+3500)
        </Typography>} */}

            </>
          ))
        }
      </FormGroup>

    </>

  )
}

export default CheckBox
