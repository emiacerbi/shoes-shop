import { useState } from 'react'
import toast from 'react-hot-toast'
import PrimaryButton from '@components/PrimaryButton/PrimaryButton'
import PrimaryInput from '@components/PrimaryInput/PrimaryInput'
import { Box, Button, CircularProgress, Modal, Typography } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import { postFiles } from 'helpers/products/postFiles'
import {
  updateProduct,
  updateProductWithImage
} from 'helpers/products/updateProduct'

import useAddProductForm from '../../hooks/useAddProductForm'

const EditProductButton = ({ id, product, refreshData }) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [isImageLoading, setIsImageLoading] = useState(false)

  const mutation = useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      refreshData()
      toast.success('Product edited succesfully')
    }
  })

  const mutationWithImage = useMutation({
    mutationFn: updateProductWithImage,
    onSuccess: () => {
      refreshData()
      toast.success('Product edited succesfully')
      setIsImageLoading(false)
    }
  })

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
  }

  const { inputInfo, handleInputChange, handleInputImg } = useAddProductForm()

  console.log(inputInfo)

  // Different submit from the useAddProductForm hook since we need put method instead of post
  const handleSubmit = async (e) => {
    const { productName, productDescription, img, productPrice } = inputInfo

    e.preventDefault()

    if (!productName && !productDescription && !img) {
      toast.error('Please add at least one field')
      return
    }

    if (img) {
      setIsImageLoading(true)
      postFiles({ img }).then((data) => {
        const IMAGE_ID = data[0].id
        mutationWithImage.mutate({
          name: productName || product.name,
          images: [IMAGE_ID],
          description: productDescription || product.description,
          price: productPrice || product.price,
          productID: id
        })
      })
    }

    if (!img) {
      mutation.mutate({
        name: productName || product.name,
        description: productDescription || product.description,
        price: productPrice || product.price,
        productID: id
      })
    }
  }

  return (
    <div>
      <Button
        variant="contained"
        size="small"
        sx={{
          justifyContent: 'center',
          textTransform: 'none',
          color: 'white',
          width: '130px',
          height: '35px'
        }}
        onClick={handleOpen}
      >
        Edit product
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
          >
            <Typography id="modal-modal-title" variant="h3" component="h3">
              Edit your product
            </Typography>

            <PrimaryInput
              label="Name"
              placeholder="New name (optional)"
              name="productName"
              onChange={handleInputChange}
              type="text"
            />
            <PrimaryInput
              label="Description"
              placeholder="New description (optional)"
              name="productDescription"
              onChange={handleInputChange}
              type="text"
            />
            <PrimaryInput
              label="Product Price"
              placeholder="New price (optional)"
              name="productPrice"
              onChange={handleInputChange}
              type="text"
            />
            <PrimaryInput
              label="Product Image"
              placeholder="New image (optional)"
              name="productImg"
              onChange={handleInputImg}
              type="file"
            />
            <PrimaryButton>
              {mutation.isLoading || isImageLoading ? (
                <CircularProgress size={28} color="action" />
              ) : (
                'Edit product'
              )}
            </PrimaryButton>
          </form>
        </Box>
      </Modal>
    </div>
  )
}

export default EditProductButton
