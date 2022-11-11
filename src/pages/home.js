import { useContext } from 'react'
import HeaderLoggedIn from '@components/HeaderLoggedIn/HeaderLoggedIn'
import BarItem from '@components/NavBarItem/NavBarItem'
import PrimaryButton from '@components/PrimaryButton/PrimaryButton'
import ProductCard from '@components/ProductCard/ProductCard'
import ProfileInfoSideBar from '@components/SideBarProfileInfo/SideBarProfileInfo'
import SubHeader from '@components/SubHeader/SubHeader'
import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined'
import LogoutIcon from '@mui/icons-material/Logout'
import { Box, Button, Skeleton, Typography, useTheme } from '@mui/material'
import { UserContext } from 'context/UserContext'
import { getProducts } from 'helpers/products/getProducts'
import Image from 'next/image'
import Link from 'next/link'
import { signOut } from 'next-auth/react'

export async function getServerSideProps () {
  const res = await getProducts()
  const products = await res.json()

  const filteredProducts = products.data.filter(product => product.attributes.teamName === 'ea-team')
  return {
    props: {
      filteredProducts,
      products
    }
  }
}

export default function Home ({ filteredProducts, products }) {
  const theme = useTheme()
  const context = useContext(UserContext)

  console.log(products)
  console.log(filteredProducts)

  console.log(context, 'USER INFO')
  return (
    <>
      <HeaderLoggedIn pages={['Home', 'Products']} burger={true} links={['home', 'bag']}/>
      <Box sx={{ [theme.breakpoints.up('sm')]: { display: 'flex', flexDirection: 'row' } }}>
        <Box sx={{ display: 'none', [theme.breakpoints.up('sm')]: { width: 360, padding: '5px', display: 'block', flexDirection: 'column' } }}>
          <ProfileInfoSideBar name = { context?.user?.userInfo?.username ? context?.user?.userInfo?.username : <Skeleton variant="rectangular" width={100} height={20} />}/>
          <Box sx={{ display: 'flex', mt: '30px', ml: '46px', cursor: 'pointer' }}>
            <AccountCircleOutlined sx={{ color: '#6E7278' }}/>
            <BarItem name="My Profile"/>
          </Box>
          <Box sx={{ display: 'flex', mt: '30px', ml: '46px', cursor: 'pointer' }}>
            <Button
              onClick={() => signOut()}
              sx={{ textTransform: 'none', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <BarItem name="Log out"> <LogoutIcon sx={{ color: '#6E7278' }}/></BarItem>
            </Button>
          </Box>
        </Box>
        <Box component='main' sx={{ m: { xs: 0, sm: '20px' }, width: '100%' }}>
          <Box sx={{ width: '100%', height: { xs: 132, sm: 260 }, mb: '-30px', position: 'relative' }}>
            <Image src='/bgHomeImg.png' alt='panelImage' layout='fill' ></Image>
          </Box>
          <Box sx={{ width: '100%', p: '20px' }}>
            <SubHeader name = { context?.user?.userInfo?.username ? context?.user?.userInfo?.username : <Skeleton variant="rectangular" width={100} height={20} />}/>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant='h1'>My Products</Typography>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <PrimaryButton maxWidth='152px' ><Link href='/add-product'>Add Products</Link></PrimaryButton>
              </Box>
            </Box>
            <Box sx={{ mt: '20px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', [theme.breakpoints.down('sm')]: { overflow: 'auto', maxHeight: 400 } }}>
              <ProductCard image={'/airmax-270.png'} productTitle="Nike AirMax 90" productPrice="140" productDescription="Men's Shoes"/>
              <ProductCard image={'/shoes.png'} productTitle="Nike AirMax 270" productPrice="160" productDescription="Women's Shoes"/>
              <ProductCard image={'/air-force.png'} productTitle="Nike Air Force 1 '07 SE" productPrice="110" productDescription="Women's Shoes"/>
              <ProductCard image={'/air-zoom-pegasus.png'} productTitle="Nike Air Zoom Pegasus" productPrice="120" productDescription="Men's Shoes"/>
            </Box>
            <Box sx={{ display: { xs: 'block', sm: 'none' }, mt: '1rem' }}>
              <PrimaryButton maxWidth='100%'><Link href='/add-product'>Add Products</Link></PrimaryButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}
