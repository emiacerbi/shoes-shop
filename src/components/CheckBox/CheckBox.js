import { useEffect, useState } from 'react'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { useRouter } from 'next/router'

function CheckBox({ label }) {
  const [value, setValue] = useState('')
  // const [checked, setChecked] = useState(false)

  const router = useRouter()

  useEffect(() => {
    router.push(
      {
        pathname: '/search-results'
      },
      `/search-results/${value}`,
      { shallow: true }
    )
  }, [value])

  return (
    <>
      <FormGroup aria-label="position" column>
        {label.map((data) => (
          <>
            <FormControlLabel
              label={data}
              control={
                <Checkbox
                  // onClick={() => setChecked(!checked)}
                  onChange={() => setValue(data)}
                />
              }
            />
          </>
        ))}
      </FormGroup>
    </>
  )
}

export default CheckBox
