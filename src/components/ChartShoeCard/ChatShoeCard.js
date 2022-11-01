import { Divider, FormControl, Grid, MenuItem, Select, Stack, Typography, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import { useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

const ChartShoeCard = ({ img, alt }) => {
  const theme = useTheme()

  const [size, setSize] = useState('')

  const handleChange = (event) => {
    setSize(event.target.value)
  }

  return (

    <Grid container

      sx={{
        // [theme.breakpoints.up('sm')]: {
        // }
      }}
    >
      <Grid
        item xs={4} sm={3}
        sx={{ display: 'flex' }}
      >
        <Box sx={{
          minWidth: '105px',
          width: '90%',
          position: 'relative',
          [theme.breakpoints.up('sm')]: {
            height: '200px'
          }
        }}>
          <Image src='/air-force.png' alt={alt} layout='fill' objectFit="cover" />
        </Box>
      </Grid>

      <Grid item xs={5} sm={6}
        sx={{ display: 'flex', flexDirection: 'column' }}
      >
        <Typography variant='h3'>Nike Air Max 270</Typography>
        <Typography variant='subtitle1'>{'Women\'s Shoes'}</Typography>

        <Box sx={{ marginTop: 'auto' }}>
          <FormControl size='small' sx={{ m: 0, minWidth: 120 }}>
            <Select
              value={size}
              onChange={handleChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              sx={{ m: 1, minWidth: 120, padding: 0, margin: 0, fontSize: '12px' }}
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
              sx={{ m: 1, minWidth: 120, padding: 0, margin: 0, fontSize: '12px' }}

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
              sx={{ m: 1, minWidth: 120, padding: 0, margin: 0, fontSize: '12px' }}

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
        sx={{ display: 'flex', flexDirection: 'column', pb: '.25rem' }}
      >
        <Typography variant='h3'>$160</Typography>
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
