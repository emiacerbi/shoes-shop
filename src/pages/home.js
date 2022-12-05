import { useState } from 'react'
import HeaderLoggedIn from '@components/HeaderLoggedIn/HeaderLoggedIn'
import Loading from '@components/Loading/Loading'
import BarItem from '@components/NavBarItem/NavBarItem'
import PrimaryButton from '@components/PrimaryButton/PrimaryButton'
import ProductCard from '@components/ProductCard/ProductCard'
import ProfileInfoSideBar from '@components/SideBarProfileInfo/SideBarProfileInfo'
import SubHeader from '@components/SubHeader/SubHeader'
import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined'
import LogoutIcon from '@mui/icons-material/Logout'
import { Box, Typography, useTheme } from '@mui/material'
import { BASE_URL } from 'constants/ConstantDeclaration'
import { getQueryById } from 'helpers/getQueryById'
import { getProducts } from 'helpers/products/getProducts'
import { getUserInfo } from 'helpers/user-auth/getUserInfo'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { getToken } from 'next-auth/jwt'
import { signOut } from 'next-auth/react'

export async function getServerSideProps(context) {
  const token = await getToken(context)

  const userRes = await getUserInfo(token.accessToken)
  const userData = userRes.data
  const userId = userRes.data.id

  const query = getQueryById(userId)

  const res = await getProducts(`?${query}`)
  const products = res.data

  return {
    props: {
      products,
      userData
    }
  }
}

export default function Home({ products, userData }) {
  const theme = useTheme()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleLogOut = () => {
    signOut()
    localStorage.removeItem('shoes')
  }

  const refreshData = async () => {
    setIsLoading(true)
    router.replace(router.asPath)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

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
          <ProfileInfoSideBar userData={userData} />
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
            onClick={handleLogOut}
            sx={{ display: 'flex', mt: '30px', ml: '46px', cursor: 'pointer' }}
          >
            <BarItem name="Log out">
              {' '}
              <LogoutIcon sx={{ color: '#6E7278' }} />
            </BarItem>
          </Box>
        </Box>
        <Box
          component="main"
          sx={{ m: { xs: 0, sm: '20px' }, width: '100%', pb: 8 }}
        >
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
            <SubHeader userData={userData} />
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
                gap: '2rem',
                [theme.breakpoints.down('sm')]: {
                  overflow: 'auto',
                  maxHeight: 400,
                  justifyContent: 'center'
                }
              }}
            >
              {products.length === 0 && !isLoading && (
                <Typography variant="main">No shoes available yet</Typography>
              )}

              {isLoading && <Loading />}
              {!isLoading &&
                products.map(({ id, attributes }) => (
                  <ProductCard
                    key={id}
                    productTitle={attributes.name}
                    productDescription={attributes.description}
                    image={`${
                      BASE_URL + attributes.images.data[0].attributes.url
                    }`}
                    productPrice={attributes.price}
                    id={id}
                    isFromUser={true}
                    refreshData={refreshData}
                  />
                ))}
            </Box>
            <Box
              sx={{
                display: { xs: 'flex', md: 'none' },
                justifyContent: 'center',
                mt: '5rem'
              }}
            >
              <PrimaryButton maxWidth="152px">
                <Link href="/add-product">Add Products</Link>
              </PrimaryButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}
