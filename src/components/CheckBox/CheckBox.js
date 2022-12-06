import { useEffect, useState } from 'react'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { useRouter } from 'next/router'

function CheckBox({ label, handleFilters, filterName, isDisabled = false }) {
  const [isChecked, setIsChecked] = useState(Array(label.length).fill(false))
  const router = useRouter()

  useEffect(() => {
    const checkedAux = label.map(
      (item) => !!JSON.stringify(router.query).includes(item)
    )
    setIsChecked(checkedAux)
  }, [router.query])

  return (
    <>
      <FormGroup aria-label="position">
        {label.map((data, index) => {
          return (
            <FormControlLabel
              key={data}
              name={data.toString().toLowerCase()}
              label={data}
              control={
                <Checkbox
                  onClick={(e) => {
                    handleFilters(e, filterName.toLowerCase(), data)
                    const aux = [...isChecked]
                    aux[index] = !aux[index]
                    setIsChecked(aux)
                  }}
                  disabled={isDisabled}
                  checked={isChecked[index]}
                  value={isChecked[index]}
                />
              }
            />
          )
        })}
      </FormGroup>
    </>
  )
}

export default CheckBox
