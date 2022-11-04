import { FormGroup, FormControlLabel, Checkbox } from '@mui/material'

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

      {/* { checked === false
        ? label === 'Adidas' && <Typography sx={{ position: 'absolute', mt: '-31px', ml: '90px', fontSize: '16px', color: '#6E7278', lineHeight: '19px' }}>stock</Typography>
        : checked === false
          ? label === 'Asics' && <Typography sx={{ position: 'absolute', mt: '-31px', ml: '90px', fontSize: '16px', color: '#6E7278', lineHeight: '19px' }}>stock</Typography>
          : checked === false
            ? label === 'New Balance' && <Typography sx={{ position: 'absolute', mt: '-31px', ml: '90px', fontSize: '16px', color: '#6E7278', lineHeight: '19px' }}>stock</Typography>
            : checked === false
              ? label === 'Nike'
              : checked === false
                ? label === 'Puma'
                : checked === false
                  ? label === 'Reebok'
                // <Typography sx={{ position: 'absolute', mt: '-31px', ml: '90px', fontSize: '16px', color: '#6E7278', lineHeight: '19px' }}>stock</Typography>

                  : null } */}
    </>
  )
}

export default CheckBox
