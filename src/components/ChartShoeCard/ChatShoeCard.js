import { Divider, FormControl, Grid, MenuItem, Select, Stack, Typography, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import { useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

const ChartShoeCard = ({ img, alt, name, price, gender }) => {
  const theme = useTheme()

  const [size, setSize] = useState('')

  const handleChange = (event) => {
    setSize(event.target.value)
  }

  return (

    <Grid container
    >
      <Grid
        item xs={4} sm={3}
        sx={{
          display: 'flex',
          height: '100px',
          [theme.breakpoints.up('sm')]: {
            height: '200px'
          }
        }}
      >
        <Box sx={{
          minWidth: '105px',
          width: '90%',
          position: 'relative',
          [theme.breakpoints.up('sm')]: {
            height: '100%'
          }
        }}>
          <Image src={img} alt={alt} layout='fill' objectFit="cover" />
        </Box>
      </Grid>

      <Grid item xs={5} sm={6}
        sx={{ display: 'flex', flexDirection: 'column' }}
      >
        <Typography variant='h3'>{name}</Typography>
        <Typography variant='subtitle1'>{gender} {'\''}s Shoes</Typography>

        <Box sx={{ marginTop: '.1rem' }} />
        <Typography sx={{
          display: 'none',
          [theme.breakpoints.up('sm')]: {
            display: 'block'
          }
        }} variant='main'>In stock</Typography>

        <Box sx={{ marginTop: 'auto' }}>
          <FormControl size='small' sx={{ m: 0, minWidth: 120 }}>
            <Select
              value={size}
              onChange={handleChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              outline={false}
              sx={{ height: '25px', minWidth: 120, fontSize: '12px', boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
            >
              <MenuItem value="">
                Size
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <FormControl size='small' sx={{ m: 0, minWidth: 120 }}>
            <Select
              value={size}
              onChange={handleChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              sx={{ height: '25px', minWidth: 120, fontSize: '12px', boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}

            >
              <MenuItem value="">
                Color
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <FormControl size='small' sx={{ m: 0, minWidth: 120 }}>
            <Select
              value={size}
              onChange={handleChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              sx={{ height: '25px', minWidth: 120, fontSize: '12px', boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}

            >
              <MenuItem value="">
                Quantity
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Grid>

      <Grid
        item
        xs={3}
        sx={{ display: 'flex', flexDirection: 'column', pb: '.25rem', alignItems: 'flex-end' }}
      >
        <Typography variant='h3'>{price}</Typography>
        <Stack
          sx={{
            marginTop: 'auto',
            flexDirection: 'column',
            gap: '.25rem',
            [theme.breakpoints.up('md')]: {
              flexDirection: 'row',
              gap: '1rem'
            }
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '.25rem', opacity: '.5' }}>
            <FavoriteBorderIcon color='common' fontSize='small' />
            <Typography variant='p'>Save</Typography>
          </Box>
          <Divider
            orientation='vertical'
            sx={{
              display: 'none',
              [theme.breakpoints.up('md')]: {
                display: 'block'
              }
            }}

          />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '.25rem', opacity: '.5' }}>
            <DeleteOutlineIcon color='common' fontSize='small' />
            <Typography variant='p'>Delete</Typography>
          </Box>
        </Stack>
      </Grid>

    </Grid>

  )
}

export default ChartShoeCard
