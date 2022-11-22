import { useEffect, useState } from 'react'
import AddShoppingCart from '@mui/icons-material/AddShoppingCart'
import { Box, Typography } from '@mui/material'

export default function AddItemToCart({ product }) {
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
          component="p"
          sx={{
            color: '#5C5C5C',
            fontSize: { xs: '11px', sm: '20px' },
            lineHeight: { xs: '10px', sm: '22px' },
            px: 1
          }}
        >
          {quantity}
        </Typography>
      )}
    </Box>
  )
}
