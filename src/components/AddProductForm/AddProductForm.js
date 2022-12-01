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
  handleInputChange,
  handleInputImg,
  inputInfo
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        paddingBlock: '2.5rem',
        width: '100%',
        gap: '5rem'
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '436px',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <PrimaryInput
          isRequired={true}
          label="Product Name"
          placeholder="Nike Air Max 90"
          name="productName"
          onChange={handleInputChange}
          type="text"
        />
        <SelectInput
          isRequired={true}
          label="Category"
          placeholder="Sport"
          name="category"
          onChange={handleInputChange}
          inputValues={categories}
        />
        <Box sx={{ display: 'flex', gap: '5%' }}>
          <SelectInput
            isRequired={true}
            onChange={handleInputChange}
            label="Gender"
            name="gender"
            inputValues={genders}
          />
          <SelectInput
            isRequired={true}
            onChange={handleInputChange}
            label="Brand"
            name="brand"
            inputValues={brands}
          />
        </Box>
        <SelectInput
          isRequired={true}
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
          isRequired={true}
          onChange={handleInputChange}
          label="Sizes"
          name={'size'}
          inputValues={sizes}
        />
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
      <ProductImageStore
        handleInputImg={handleInputImg}
        inputInfo={inputInfo}
      />
    </Box>
  )
}

export default AddProductForm
