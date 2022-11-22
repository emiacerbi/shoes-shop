import HeaderLoggedIn from '@components/HeaderLoggedIn/HeaderLoggedIn'
import BarItem from '@components/NavBarItem/NavBarItem'
import PrimaryButton from '@components/PrimaryButton/PrimaryButton'
import ProductCard from '@components/ProductCard/ProductCard'
import ProfileInfoSideBar from '@components/SideBarProfileInfo/SideBarProfileInfo'
import SubHeader from '@components/SubHeader/SubHeader'
import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined'
import LogoutIcon from '@mui/icons-material/Logout'
import { Box, Typography, useTheme } from '@mui/material'
import { getProducts } from 'helpers/products/getProducts'
import { getUserInfo } from 'helpers/user-auth/getUserInfo'
import Image from 'next/image'
import Link from 'next/link'
import { getToken } from 'next-auth/jwt'
import { signOut } from 'next-auth/react'

export async function getServerSideProps(context) {
  const qs = require('qs')

  const token = await getToken(context)

  const userRes = await getUserInfo(token.accessToken)
  const userId = userRes.data.id

  const query = qs.stringify(
    {
      populate: '*',
      pagination: {
        page: 1,
        pageSize: 100
      },
      filters: {
        userID: {
          id: {
            $eq: userId
          }
        }
      }
    },
    {
      encodeValuesOnly: true // prettify URL
    }
  )

  const res = await getProducts(`?${query}`)
  const products = res.data

  return {
    props: {
      products
    }
  }
}

export default function Home({ products }) {
  const theme = useTheme()

  return (
    <>
      <HeaderLoggedIn
        pages={['Bag', 'Add Product', 'Search']}
        burger={true}
        links={['/bag', '/add-product', '/search-results']}
      />
      <Box
        sx={{
          [theme.breakpoints.up('sm')]: {
            display: 'flex',
            flexDirection: 'row'
          }
        }}
      >
        <Box
          sx={{
            display: 'none',
            [theme.breakpoints.up('md')]: {
              width: 360,
              padding: '5px',
              display: 'block',
              flexDirection: 'column'
            }
          }}
        >
          <ProfileInfoSideBar />
          <Link href="/update-profile">
            <Box
              sx={{
                display: 'flex',
                mt: '30px',
                ml: '46px',
                cursor: 'pointer'
              }}
            >
              <AccountCircleOutlined sx={{ color: '#6E7278' }} />
              <BarItem name="My Profile" />
            </Box>
          </Link>
          <Box
            onClick={() => signOut()}
            sx={{ display: 'flex', mt: '30px', ml: '46px', cursor: 'pointer' }}
          >
            <BarItem name="Log out">
              {' '}
              <LogoutIcon sx={{ color: '#6E7278' }} />
            </BarItem>
          </Box>
        </Box>
        <Box component="main" sx={{ m: { xs: 0, sm: '20px' }, width: '100%' }}>
          <Box
            sx={{
              width: '100%',
              height: { xs: 132, sm: 260 },
              mb: '-30px',
              position: 'relative'
            }}
          >
            <Image src="/bgHomeImg.png" alt="panelImage" layout="fill"></Image>
          </Box>
          <Box sx={{ width: '100%', p: '20px' }}>
            <SubHeader />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <Typography variant="h1">My Products</Typography>
              <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <PrimaryButton maxWidth="152px">
                  <Link href="/add-product">Add Products</Link>
                </PrimaryButton>
              </Box>
            </Box>
            <Box
              sx={{
                mt: '20px',
                display: 'flex',
                flexWrap: 'wrap',
                flex: '50%',
                gap: '4rem',
                [theme.breakpoints.down('sm')]: {
                  overflow: 'auto',
                  maxHeight: 400
                }
              }}
            >
              <ProductCard
                image={'/airmax-270.png'}
                productTitle="Nike AirMax 90"
                productPrice="140"
                productDescription="Men's Shoes"
              />
              <ProductCard
                image={'/shoes.png'}
                productTitle="Nike AirMax 270"
                productPrice="160"
                productDescription="Women's Shoes"
              />
              <ProductCard
                image={'/air-force.png'}
                productTitle="Nike Air Force 1 '07 SE"
                productPrice="110"
                productDescription="Women's Shoes"
              />

              {products.map(({ id, attributes }) => (
                <ProductCard
                  key={id}
                  productTitle={attributes.name}
                  productDescription={attributes.description}
                  image={attributes.images[0] || '/shoes.png'}
                  productPrice={attributes.price}
                />
              ))}
            </Box>
            <Box sx={{ display: { xs: 'block', md: 'none' }, mt: '1rem' }}>
              <PrimaryButton maxWidth="100%">
                <Link href="/add-product">Add Products</Link>
              </PrimaryButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}
