import { useState } from 'react'
import AddItemToCart from '@components/AddItemToCartButton/AddItemToCart'
import { Grid, Typography } from '@mui/material'
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

  return (
    <Grid
      item
      xs={5}
      lg={3}
      sx={{
        position: 'relative',
        width: { xs: 150, md: 320 },
        maxWidth: { xs: 120, md: 320 }
      }}
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
      </Box>

      {isModalVisible && (
        <Box
          sx={{
            position: 'absolute',
            top: '2rem',
            right: '.5rem'
          }}
        >
          <AddItemToCart
            product={{
              name: productTitle,
              price: productPrice,
              description: productDescription,
              img: image,
              id
            }}
          />
        </Box>
      )}
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
        <Box>
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
      </Box>
    </Grid>
  )
}
