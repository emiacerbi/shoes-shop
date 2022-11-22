import { useState } from 'react'
import toast from 'react-hot-toast'
import { AddShoppingCart } from '@mui/icons-material'
import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'

export default function ProductCard({
  productTitle,
  productDescription,
  productPrice,
  image,
  id
}) {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const currentShoe = {
    name: productTitle,
    price: productPrice,
    description: productDescription,
    img: image,
    id
  }

  const addProduct = () => {
    const prevShoes = JSON.parse(localStorage.getItem('shoes'))

    console.log(prevShoes)

    if (prevShoes && prevShoes.some((shoe) => shoe.id === currentShoe.id)) {
      toast.error('That shoe is already in your cart!')
      return
    }

    if (prevShoes) {
      const newShoes = [...prevShoes, currentShoe]
      localStorage.setItem('shoes', JSON.stringify(newShoes))
      return
    }

    localStorage.setItem('shoes', JSON.stringify([currentShoe]))
  }

  return (
    <Grid
      item
      xs={5}
      lg={3}
      sx={{ position: 'relative', width: { xs: 150, sm: 320 } }}
    >
      <Box
        sx={{
          position: 'relative',
          minWidth: '150px',
          height: { xs: '178px', sm: '380px' }
        }}
      >
        <Image src={image} layout="fill" alt="product" objectFit="cover" />
      </Box>

      {/* Modal button */}
      <Box
        sx={{
          position: 'absolute',
          width: '25px',
          height: '25px',
          top: 5,
          right: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '.25rem',
          cursor: 'pointer'
        }}
        onClick={() => setIsModalVisible(!isModalVisible)}
      >
        <Box
          sx={{
            width: '5px',
            height: '5px',
            background: 'black',
            borderRadius: '50%'
          }}
        />
        <Box
          sx={{
            width: '5px',
            height: '5px',
            background: 'black',
            borderRadius: '50%'
          }}
        />
        <Box
          sx={{
            width: '5px',
            height: '5px',
            background: 'black',
            borderRadius: '50%'
          }}
        />

        {isModalVisible && (
          <Button
            variant="contained"
            sx={{
              minWidth: '150px',
              position: 'absolute',
              textAlign: 'center',
              top: '2rem',
              left: '-50px',
              transform: 'translateX(-50%)',
              padding: '.5rem',
              borderRadius: '.25rem',
              textTransform: 'none',
              color: 'white'
            }}
            onClick={addProduct}
          >
            Add product
            <AddShoppingCart sx={{ marginLeft: '.5rem' }} fontSize={'small'} />
          </Button>
        )}
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: '2px'
        }}
      >
        <Box>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '10px', sm: '22px' },
              lineHeight: { xs: '12px', sm: '25px' }
            }}
          >
            {productTitle}
          </Typography>
          <Typography
            component="p"
            sx={{
              color: '#5C5C5C',
              fontWeight: 500,
              fontSize: { xs: '9px', sm: '18px' },
              lineHeight: { xs: '10px', sm: '22px' }
            }}
          >
            {productDescription}
          </Typography>
        </Box>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '10px', sm: '22px' },
            lineHeight: { xs: '12px', sm: '25px' }
          }}
        >
          ${productPrice}
        </Typography>
      </Box>
    </Grid>
  )
}
