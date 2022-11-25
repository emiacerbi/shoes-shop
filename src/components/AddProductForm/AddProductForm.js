import PrimaryButton from '@components/PrimaryButton/PrimaryButton'
import ProductImageStore from '@components/ProductImageStore/ProductImageStore'
import { Box } from '@mui/material'

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
  handleSubmit,
  handleInputImg
}) => {
  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        paddingBlock: '2.5rem',
        gap: '1.5rem',
        width: '100%'
      }}
      id={id}
      onSubmit={handleSubmit}
    >
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Box sx={{ width: { lg: '436px' } }}>
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
            name="color"
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
              onChange={handleInputImg}
              type="file"
            />
            <PrimaryButton>Save</PrimaryButton>
          </Box>
        </Box>
        <ProductImageStore handleInputImg={handleInputImg} />
      </Box>
    </form>
  )
}

export default AddProductForm
