import PrimaryButton from '@components/PrimaryButton/PrimaryButton'
import { Box } from '@mui/material'

import Form from '../Form/Form'
import PrimaryInput from '../PrimaryInput/PrimaryInput'
import SelectInput from '../SelectInput/SelectInput'
import TextArea from '../TextArea/TextArea'

const AddProductForm = ({ brands, genders, sizes, id, handleInputChange, handleSubmit }) => {
  return (

    <Form id={id} onSubmit={handleSubmit}>
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
        <SelectInput required onChange={handleInputChange} label='Gender' name={'gender'} inputValues={genders}></SelectInput>
        <SelectInput required onChange={handleInputChange} label='Brand' name={'brand'} inputValues={brands}></SelectInput>
      </Box>
      <TextArea placeholder='Do not exceed 300 characters' label='Description' rows={7} onChange={handleInputChange} />
      <SelectInput required onChange={handleInputChange} label='Size' name={'size'} inputValues={sizes}></SelectInput>
      <Box sx={{ display: { xs: 'flex', sm: 'none' }, flexDirection: 'column', gap: '1rem' }}>
        <PrimaryInput
          required
          label="Product Image"
          placeholder="Nike Air Max 90"
          name="img"
          onChange={handleInputChange}
          type="file"/>
        <PrimaryButton>Save</PrimaryButton>
      </Box>
    </Form>

  )
}

export default AddProductForm
