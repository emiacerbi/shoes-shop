import PrimaryButton from '@components/PrimaryButton/PrimaryButton'
import { Box } from '@mui/material'

import Form from '../Form/Form'
import PrimaryInput from '../PrimaryInput/PrimaryInput'
import SelectInput from '../SelectInput/SelectInput'
import TextArea from '../TextArea/TextArea'

const AddProductForm = ({
  brands,
  genders,
  sizes,
  categories,
  colors,
  id,
  handleInputChange,
  handleSubmit
}) => {
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
      <SelectInput
        required
        label="Category"
        placeholder="Sport"
        name="category"
        onChange={handleInputChange}
        inputValues={categories}
      />
      <Box sx={{ display: 'flex', gap: '5%' }}>
        <SelectInput
          required
          onChange={handleInputChange}
          label="Gender"
          name="gender"
          inputValues={genders}
        ></SelectInput>
        <SelectInput
          required
          onChange={handleInputChange}
          label="Brand"
          name="brand"
          inputValues={brands}
        ></SelectInput>
      </Box>
      <SelectInput
        required
        label="Color"
        placeholder="Sport"
        name="colors"
        onChange={handleInputChange}
        inputValues={colors}
      />
      <TextArea
        placeholder="Do not exceed 300 characters"
        label="Description"
        rows={7}
        onChange={handleInputChange}
      />
      <SelectInput
        required
        onChange={handleInputChange}
        label="Sizes"
        name={'size'}
        inputValues={sizes}
      ></SelectInput>
      <Box
        sx={{
          display: { xs: 'flex', lg: 'none' },
          flexDirection: 'column',
          gap: '1rem'
        }}
      >
        <PrimaryInput
          required
          label="Product Image"
          placeholder="Nike Air Max 90"
          name="img"
          onChange={handleInputChange}
          type="file"
        />
        <PrimaryButton>Save</PrimaryButton>
      </Box>
    </Form>
  )
}

export default AddProductForm
