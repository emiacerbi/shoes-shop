import { useState } from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { Grid, Stack, TextField, Typography, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'

const ChartShoeCard = ({
  img,
  alt,
  name,
  price,
  deleteShoe,
  id,
  changeQuantity,
  description,
  initialQuantity
}) => {
  const theme = useTheme()

  const [quantity, setQuantity] = useState(initialQuantity)

  const handleChange = (event) => {
    const value = event.target.value
    const valueLength = value.length

    if (valueLength && value.match(/[0-9]/g).length === valueLength) {
      // if all digits are numbers
      const aux = parseInt(event.target.value)
      setQuantity(aux)
      changeQuantity(id, aux)
    }
    if ((value === '' || value === '0') && valueLength <= 1) {
      // user wanted to put quantity to 0
      setQuantity(0)
      changeQuantity(0)
    }
  }

  return (
    <Grid container>
      <Grid
        item
        xs={4}
        sm={3}
        sx={{
          display: 'flex',
          height: { xs: '100px', sm: '200px' }
        }}
      >
        <Box
          sx={{
            minWidth: '105px',
            width: '90%',
            position: 'relative',
            [theme.breakpoints.up('sm')]: {
              height: '100%'
            }
          }}
        >
          <Image src={img} alt={alt} layout="fill" objectFit="cover" priority />
        </Box>
      </Grid>

      <Grid
        item
        xs={5}
        sm={6}
        sx={{ display: 'flex', flexDirection: 'column' }}
      >
        <Typography variant="h3">{name}</Typography>
        <Typography variant="subtitle1">
          {/* {gender} {"'"}s Shoes */}
          {description}
        </Typography>

        <Box sx={{ marginTop: '.1rem' }} />
        <Typography
          sx={{ display: { xs: 'none', sm: 'block' } }}
          variant="main"
        >
          In stock
        </Typography>

        <Box sx={{ marginTop: 'auto', minWidth: 120 }}>
          <TextField
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            value={quantity}
            onChange={handleChange}
            label="Quantity"
            variant="standard"
          />
        </Box>
      </Grid>

      <Grid
        item
        xs={3}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end'
        }}
      >
        <Typography variant="h3">${price}</Typography>
        <Stack
          sx={{
            marginTop: 'auto',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: '.25rem', md: '1rem' }
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '.25rem',
              opacity: '.5',
              cursor: 'pointer'
            }}
            onClick={() => deleteShoe(id)}
          >
            <DeleteOutlineIcon color="common" fontSize="small" />
            <Typography variant="p">Delete</Typography>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  )
}

export default ChartShoeCard
