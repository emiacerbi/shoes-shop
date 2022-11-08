import ChartShoeCard from '@components/ChartShoeCard/ChatShoeCard'
import HeaderLoggedIn from '@components/HeaderLoggedIn/HeaderLoggedIn'
import PrimaryButton from '@components/PrimaryButton/PrimaryButton'
import SecondaryButton from '@components/SecondaryButton/SecondaryButton'
import { Divider, Grid, Stack, Typography, useTheme } from '@mui/material'
import { Box } from '@mui/system'

const pages = ['Home', 'For women', 'For men', 'Accesories', 'Sale']
const links = ['/home', '/for-women', 'for-men', 'accesories', 'sale']

const Bag = () => {
  const theme = useTheme()
  return (
    <>
      <HeaderLoggedIn pages={pages} links={links} burger={true} cart={true} />

      <Grid
        container
        p={2}
      >

        <Box
          py={8}
          sx={{
            display: 'flex',
            width: '100%',
            maxWidth: '1500px',
            marginInline: 'auto',
            [theme.breakpoints.up('md')]: {
              gap: '1.5rem'
            }
          }}

        >

          {/* Left container */}
          <Box sx={{ width: '100%', maxWidth: '963px' }}>
            <Typography variant='h1'>Chart</Typography>

            {/* Cards */}
            <Grid item xs={12} mt={5} sx={{ marginInline: 'auto' }} >
              <Stack spacing={3} mb={3}>
                <ChartShoeCard name='Nike Air Max 270' price='$160' gender='Women' img='/airmax-270.png' />
                <ChartShoeCard name='Nike Air Max 90' price='$140' gender='Men' img='/airmax-90.png' />
                <ChartShoeCard name={'Nike Air Force 1 07 SE'} price='$160' gender='Women' img='/air-force.png' />
              </Stack>

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
          </Box>

          {/* Summary - Right Container */}
          <Box
            sx={{
              marginLeft: 'auto'
            }}
          >

            <Box
              sx={{
                width: '399px',
                marginInline: 'auto',
                textAlign: 'left',
                display: 'none',
                [theme.breakpoints.up('md')]: {
                  display: 'block'
                }
              }}
            >
              <Typography variant='h1'>Summary</Typography>

              <Box sx={{ marginTop: '3rem' }} />

              <Typography variant='p'>Do you have a promocode?</Typography>

              <Box sx={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '.5rem' }}>

                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant='body2'>Subtotal</Typography>
                  <Typography variant='body2'>$410</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant='body2'>Shipping</Typography>
                  <Typography variant='body2'>$20</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant='body2'>Tax</Typography>
                  <Typography variant='body2'>$0</Typography>
                </Box>

                <Divider sx={{ marginBlock: '1rem' }} />

                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant='body2'>Total</Typography>
                  <Typography variant='body2'>$430</Typography>
                </Box>

                <Divider sx={{ marginBlock: '1rem' }} />

                <SecondaryButton>PayPal</SecondaryButton>
                <PrimaryButton>Checkout</PrimaryButton>
              </Box>
            </Box>
          </Box>
        </Box>

      </Grid>

    </>

  )
}

export default Bag
