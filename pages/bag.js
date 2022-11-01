import { Divider, Grid, Stack, Typography, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import ChartShoeCard from '../src/components/ChartShoeCard/ChatShoeCard'
import HeaderLoggedIn from '../src/components/HeaderLoggedIn/HeaderLoggedIn'
import PrimaryButton from '../src/components/PrimaryButton/PrimaryButton'
import SecondaryButton from '../src/components/SecondaryButton.js/SecondaryButton'

const pages = ['Home', 'For women', 'For men', 'Accesories', 'Sale']
const links = ['/home', '/for-women', 'for-men', 'accesories', 'sale']

const Bag = () => {
  const theme = useTheme()
  return (
    <>
      <HeaderLoggedIn pages={pages} links={links} burger={true} cart={true} />

      <Box sx={{
        padding: '1rem',
        borderBottom: '1px solid #EAECF0'

      }}>
        <Typography variant='h1'>Chart</Typography>
      </Box>

      <Grid
        container
        p={2}
      >
        <Grid item xs={12} md={9} lg={8}>
          <Stack spacing={3} mb={3}>
            <ChartShoeCard />
            <ChartShoeCard />
            <ChartShoeCard />
          </Stack>

          {/* Button */}
          <Box sx={{
            maxWidth: '432px',
            marginInline: 'auto',
            marginTop: '3rem',
            [theme.breakpoints.up('md')]: {
              display: 'none'
            }
          }}
          >
            <PrimaryButton>
            Go to checkout
            </PrimaryButton>
          </Box>
        </Grid>

        {/* Summary */}

        <Grid item md={3} lg={4}
          sx={{
            maxWidth: '399px',
            marginInline: 'auto',
            textAlign: 'center',
            display: 'none',
            [theme.breakpoints.up('md')]: {
              display: 'block'
            }
          }}
        >
          <Typography sx={{ textAlign: 'left' }} variant='h1'>Summary</Typography>

          <Box sx={{ marginTop: '3rem' }} />
          <Typography variant='p'>Do you have a promocode?</Typography>

          <Box sx={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant='p'>Subtotal</Typography>
              <Typography variant='p'>$410</Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant='p'>Shipping</Typography>
              <Typography variant='p'>$20</Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant='p'>Tax</Typography>
              <Typography variant='p'>$0</Typography>
            </Box>

            <Divider sx={{ marginBlock: '1rem' }} />

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant='p'>Total</Typography>
              <Typography variant='p'>$430</Typography>
            </Box>
            <Divider sx={{ marginBlock: '1rem' }} />

            <PrimaryButton>Checkout</PrimaryButton>
            <SecondaryButton>PayPal</SecondaryButton>
          </Box>

        </Grid>

      </Grid>

    </>

  )
}

export default Bag
