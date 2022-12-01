import { Button, CircularProgress } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import { deleteProduct } from 'helpers/products/deleteProduct'

const DeleteProductButton = ({ id, refreshData }) => {
  const mutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: (res) => {
      console.log(res)
      refreshData()
    }
  })

  return (
    <Button
      variant="contained"
      size="small"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textTransform: 'none',
        color: 'white',
        gap: '.25rem',
        width: '130px',
        height: '35px'
      }}
      onClick={() => mutation.mutate(id)}
    >
      {mutation.isLoading ? (
        <CircularProgress size={28} color="action" />
      ) : (
        'Delete product'
      )}
    </Button>
  )
}

export default DeleteProductButton
