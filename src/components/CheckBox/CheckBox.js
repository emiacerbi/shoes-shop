import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { useRouter } from 'next/router'

// Array to store the values of the checked checkboxes
const valueArr = []

function CheckBox({ label }) {
  const router = useRouter()

  const handleValue = (e) => {
    const val = e.target.value
    const checked = e.target.checked
    if (checked) {
      valueArr.push(val)
    }
    console.log(valueArr)
  }

  router.push(
    {
      pathname: router.pathname,
      query: { param: valueArr.map((data) => data) }
    },
    undefined,
    { shallow: true }
  )

  return (
    <>
      <FormGroup aria-label="position" column>
        {label.map((data) => (
          <>
            <FormControlLabel
              label={data}
              control={<Checkbox onClick={handleValue} value={data} />}
            />
          </>
        ))}
      </FormGroup>
    </>
  )
}

export default CheckBox
