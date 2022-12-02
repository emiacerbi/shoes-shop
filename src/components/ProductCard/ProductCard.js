import { useState } from 'react'
import AddItemToCart from '@components/AddItemToCartButton/AddItemToCart'
import DeleteProductButton from '@components/DeleteProductButton/DeleteProductButton'
import EditProductButton from '@components/EditProductButton/EditProductButton'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { Grid, Typography, useMediaQuery } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'

export default function ProductCard({
  productTitle,
  productDescription,
  productPrice,
  image,
  id,
  isFromUser = false,
  refreshData
}) {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [imgSrc, setImgSrc] = useState(image)

  const matches = useMediaQuery('(min-width:600px)')

  return (
    <Grid
      item
      xs={5}
      lg={3}
      sx={{
        position: 'relative'
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: { xs: '150px', sm: '300px' },
          height: { xs: '178px', sm: '380px' }
        }}
      >
        <Image
          src={imgSrc}
          layout="fill"
          alt="product"
          objectFit="cover"
          onError={() => setImgSrc('/shoes.png')}
        />
      </Box>

      {/* Modal button */}

      {isFromUser && (
        <Box
          sx={{
            position: 'absolute',
            width: '25px',
            height: '25px',
            top: { xs: 2, md: 2 },
            right: { xs: 10, md: 10 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '.25rem',
            cursor: 'pointer'
          }}
          onClick={() => setIsModalVisible(!isModalVisible)}
        >
          <MoreHorizIcon
            fontSize="large"
            sx={{
              '&:hover': {
                transform: 'scale(1.2)',
                color: 'primary.main',
                transition: 'transform 300ms'
              }
            }}
          />
        </Box>
      )}

      {isModalVisible && (
        <Box
          sx={{
            position: 'absolute',
            top: { xs: 30, md: 20 },
            right: { xs: 8, md: '.5rem' },
            pointerEvents: 'inherit',
            display: 'flex',
            flexDirection: 'column',
            gap: '.5rem'
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
            matches={matches}
          />

          <DeleteProductButton
            id={id}
            refreshData={refreshData}
            matches={matches}
          />

          <EditProductButton
            id={id}
            product={{
              name: productTitle,
              price: productPrice,
              description: productDescription,
              img: image
            }}
            refreshData={refreshData}
            matches={matches}
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
