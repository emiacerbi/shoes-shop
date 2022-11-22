import { useState } from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import {
  FormControl,
  Grid,
  MenuItem,
  Select,
  Stack,
  Typography,
  useTheme
} from '@mui/material'
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
  description
}) => {
  const theme = useTheme()

  const [quantity, setQuantity] = useState(1)

  const handleChange = (event) => {
    setQuantity(event.target.value)
    changeQuantity(id, event.target.value)
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
          <FormControl>
            <Select
              value={quantity}
              onChange={handleChange}
              sx={{
                height: '25px',
                minWidth: 120,
                fontSize: '12px',
                boxShadow: 'none',
                '.MuiOutlinedInput-notchedOutline': { border: 0 }
              }}
              displayEmpty
            >
              <MenuItem value="">Quantity</MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
            </Select>
          </FormControl>
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
