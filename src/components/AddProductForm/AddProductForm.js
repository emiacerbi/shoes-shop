import { Box } from '@mui/material'

import PrimaryInput from '../PrimaryInput/PrimaryInput'
import Form from '../Form/Form'
import TextArea from '../TextArea/TextArea'
import useSignInForm from '../../hooks/useSignInForm'

const AddProductForm = () => {
  const { handleInputChange, handleSubmit } = useSignInForm()

  return (

    <Form onSubmit={handleSubmit}>
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
        <PrimaryInput
          required
          label="Gender"
          placeholder="Male"
          name="gender"
          onChange={handleInputChange}
          type="text"
          list="gender"
        />
        <PrimaryInput
          required
          label="Brand"
          placeholder="Nike"
          name="brand"
          onChange={handleInputChange}
          type="text"
          list="brands"
        />
        <datalist id="brands">
          <option>Nike</option>
          <option>Adidas</option>
          <option>Fila</option>
          <option>Puma</option>
        </datalist>
        <datalist id="gender">
          <option>Male</option>
          <option>Female</option>
        </datalist>

      </Box>
      <TextArea placeholder='Do not exceed 300 characters' label='Description' rows={7} />
      <PrimaryInput
        required
        label="Add Size"
        placeholder="Sizes"
        name="sizes"
        onChange={handleInputChange}
        type="text"
        list='sizes'
      />
      <datalist id="sizes">
        <option>EUR-36</option>
        <option>EUR-37</option>
        <option>EUR-38</option>
        <option>EUR-39</option>
        <option>EUR-40</option>
        <option>EUR-41</option>
        <option>EUR-42</option>
        <option>EUR-43</option>
      </datalist>
    </Form>

  )
}

export default AddProductForm
