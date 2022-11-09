import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'

function CheckBox ({ label, checked, handleChangeAdidas, handleChangeAsics, handleChangeNB, handleChangeNike, handleChangePuma, handleChangeReebok }) {
  return (
    <>
      <FormGroup aria-label="position" column >
        <FormControlLabel
          control={<Checkbox onChange={() => {
            label === 'Adidas' && handleChangeAdidas()
            label === 'Asics' && handleChangeAsics()
            label === 'New Balance' && handleChangeNB()
            label === 'Nike' && handleChangeNike()
            label === 'Puma' && handleChangePuma()
            label === 'Reebok' && handleChangeReebok()
          }}
          inputProps={{ 'aria-label': 'controlled' }} />}
          label={label}
        />
      </FormGroup>

    </>
  )
}

export default CheckBox
