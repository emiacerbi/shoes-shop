import { Box } from '@mui/material'

import Form from '../Form/Form'
import PrimaryInput from '../PrimaryInput/PrimaryInput'
import SelectInput from '../SelectInput/SelectInput'
import TextArea from '../TextArea/TextArea'

const AddProductForm = ({ brands, genders, sizes }) => {
  const [inputInfo, setInputInfo] = useState({
    productName: '',
    category: '',
    gender: '',
    brand: '',
    size: ''
  })


  return (

    <Form onSubmit={}>
      <PrimaryInput
        required
        label="Product Name"
        placeholder="Nike Air Max 90"
        name="productName"
        onChange={}
        type="text"
      />
      <PrimaryInput
        required
        label="Category"
        placeholder="Sport"
        name="category"
        onChange={}
        type="text"
      />
      <Box sx={{ display: 'flex', gap: '5%' }}>
        <SelectInput required onChange={} name={'Gender'} inputValues={genders}></SelectInput>
        <SelectInput required onChange={} name={'Brand'} inputValues={brands}></SelectInput>
      </Box>
      <TextArea placeholder='Do not exceed 300 characters' label='Description' rows={7} />
      <SelectInput required onChange={} name={'Size'} inputValues={sizes}></SelectInput>

    </Form>

  )
}

export default AddProductForm
