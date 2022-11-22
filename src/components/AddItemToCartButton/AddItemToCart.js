import { useEffect, useState } from 'react'
import AddShoppingCart from '@mui/icons-material/AddShoppingCart'
import { Box, Typography } from '@mui/material'

export default function AddItemToCartButton({ product }) {
  const [quantity, setQuantity] = useState(0)

  useEffect(() => {
    if (localStorage.getItem('shoes')) {
      const shoes = JSON.parse(localStorage.getItem('shoes'))
      const shoe = shoes.find((shoe) => shoe.id === product.id)
      if (shoe) {
        setQuantity(shoe.quantity)
      }
    }
  }, [])

  const addProduct = () => {
    const shoppingBag = JSON.parse(localStorage.getItem('shoes')) || []
    // if product is already in the bag add 1 to the quantity and
    // update the local storage
    if (shoppingBag && shoppingBag.find((shoe) => shoe.id === product.id)) {
      const newShoppingBag = shoppingBag.map((shoe) =>
        shoe.id === product.id ? { ...shoe, quantity: shoe.quantity + 1 } : shoe
      )
      localStorage.setItem('shoes', JSON.stringify(newShoppingBag))
      setQuantity(quantity + 1)
    } else {
      // if product is not in the bag add it to the bag and update the local storage
      const newShoppingBag = [...shoppingBag, { ...product, quantity: 1 }]
      localStorage.setItem('shoes', JSON.stringify(newShoppingBag))
      setQuantity(quantity + 1)
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
      }}
      onClick={addProduct}
    >
      <AddShoppingCart />
      {quantity > 0 && (
        <Typography
          sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            borderRadius: '50%',
            fontsize: '16px',
            fontWeight: '500',
            lineHeight: '100%',
            width: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: '9px',
            padding: '2px'
          }}
        >
          {quantity}
        </Typography>
      )}
    </Box>
  )
}
