import { useState } from 'react'
import { Box } from '@mui/material'

import Form from '../Form/Form'
import PrimaryInput from '../PrimaryInput/PrimaryInput'
import SelectInput from '../SelectInput/SelectInput'
import TextArea from '../TextArea/TextArea'

const AddProductForm = ({ brands, genders, sizes }) => {
  const [inputInfo, setInputInfo] = useState({
    productName: '',
    category: '',
    Gender: '',
    Brand: '',
    Description: '',
    Size: ''
  })

  const handleInputChange = (e) => {
    const focus = e.target
    const value = focus.value
    const name = focus.name

    setInputInfo({
      ...inputInfo,
      [name]: value
    })
  }

  return (

    <Form>
      <PrimaryInput
        required
        label="Product Name"
        placeholder="Nike Air Max 90"
        name="productName"
        onChange={handleInputChange}
        type="text"
      />
      <PrimaryInput
        required
        label="Category"
        placeholder="Sport"
        name="category"
        onChange={handleInputChange}
        type="text"
      />
      <Box sx={{ display: 'flex', gap: '5%' }}>
        <SelectInput required onChange={handleInputChange} name={'Gender'} inputValues={genders}></SelectInput>
        <SelectInput required onChange={handleInputChange} name={'Brand'} inputValues={brands}></SelectInput>
      </Box>
      <TextArea placeholder='Do not exceed 300 characters' label='Description' rows={7} onChange={handleInputChange} />
      <SelectInput required onChange={handleInputChange} name={'Size'} inputValues={sizes}></SelectInput>

    </Form>

  )
}

export default AddProductForm
