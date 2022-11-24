import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import AddShoppingCart from '@mui/icons-material/AddShoppingCart'
import { Button, CircularProgress, Typography } from '@mui/material'

export default function AddItemToCart({ product }) {
  const [quantity, setQuantity] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('shoes')) {
      const shoes = JSON.parse(localStorage.getItem('shoes'))
      const shoe = shoes.find((shoe) => shoe.id === product.id)
      if (shoe) {
        setQuantity(shoe.quantity)
      }
    }
  }, [product.id])

  const addProduct = () => {
    setIsLoading(true)
    setTimeout(() => {
      const shoppingBag = JSON.parse(localStorage.getItem('shoes')) || []
      // if product is already in the bag add 1 to the quantity and
      // update the local storage
      if (shoppingBag && shoppingBag.find((shoe) => shoe.id === product.id)) {
        const newShoppingBag = shoppingBag.map((shoe) =>
          shoe.id === product.id
            ? { ...shoe, quantity: +shoe.quantity + 1 }
            : shoe
        )
        localStorage.setItem('shoes', JSON.stringify(newShoppingBag))
        setQuantity(quantity + 1)
      } else {
        // if product is not in the bag add it to the bag and update the local storage
        const newShoppingBag = [...shoppingBag, { ...product, quantity: 1 }]
        localStorage.setItem('shoes', JSON.stringify(newShoppingBag))
        setQuantity(quantity + 1)
      }

      setIsLoading(false)
      toast.success('Product added to bag !')
    }, 1000)
  }

  return (
    <Button
      variant="contained"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textTransform: 'none',
        color: 'white',
        gap: '.25rem',
        width: '180px',
        height: '40px'
      }}
      onClick={addProduct}
    >
      {isLoading ? (
        <CircularProgress size={28} color="action" />
      ) : (
        <>
          Add product
          <AddShoppingCart />
          {quantity > 0 && <Typography component="p">({quantity})</Typography>}
        </>
      )}
    </Button>
  )
}
