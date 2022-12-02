import DeleteIcon from '@mui/icons-material/Delete'
import { Button, CircularProgress } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import { deleteProduct } from 'helpers/products/deleteProduct'

const DeleteProductButton = ({ id, refreshData, matches }) => {
  const mutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: (res) => {
      console.log(res)
      refreshData()
    }
  })

  if (!matches) {
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
          width: '25px',
          height: '25px'
        }}
        onClick={() => mutation.mutate(id)}
      >
        {mutation.isLoading ? (
          <CircularProgress size={12} color="action" />
        ) : (
          <DeleteIcon fontSize="small" />
        )}
      </Button>
    )
  }

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
