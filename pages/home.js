import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../src/context/UserContext'
import { Box, Typography, useTheme } from '@mui/material'

import ProductCard from '../src/components/ProductCard/ProductCard'
import SubHeader from '../src/components/SubHeader/SubHeader'
import SideBarProfileInfo from '../src/components/SideBarProfileInfo/SideBarProfileInfo'
import HeaderLoggedIn from '../src/components/HeaderLoggedIn/HeaderLoggedIn'
import PrimaryButton from '../src/components/PrimaryButton/PrimaryButton'

export default function Home () {
  const [screenWidth, setscreenWidth] = useState()

  console.log(context, 'USER INFO')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setscreenWidth(window.innerWidth)
    }
  }, [screenWidth])

  const theme = useTheme()
  return (
    <>
      <HeaderLoggedIn pages={['Home', 'Products']} burger={true} links={['Test1', 'Test2']}/>
      <Box sx={{ [theme.breakpoints.up('sm')]: { display: 'flex', flexDirection: 'row' } }}>
        <Box sx={{ display: 'none', [theme.breakpoints.up('sm')]: { width: 360, padding: '5px', display: 'inline-flex' } }}>
          <SideBarProfileInfo/>
        </Box>
        <Box component='main' sx={{ m: '20px', width: '100%' }}>
          <Box sx={{ height: { xs: 132, sm: 260 }, m: { xs: '-20px', sm: 0 }, backgroundImage: "url('/bgHomeImg.png')", backgroundSize: 'cover' }}></Box>
          <SubHeader/>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant='h1'>My Products</Typography>
            {screenWidth > 599 && (<PrimaryButton maxWidth='152px' >Add Products</PrimaryButton>)}
          </Box>
          <Box sx={{ mt: '20px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
            <ProductCard image={'/airmax-270.png'} productTitle="Nike AirMax 90" productPrice="140" productDescription="Men's Shoes"/>
            <ProductCard image={'/shoes.png'} productTitle="Nike AirMax 270" productPrice="160" productDescription="Women's Shoes"/>
            <ProductCard image={'/air-force.png'} productTitle="Nike Air Force 1 '07 SE" productPrice="110" productDescription="Women's Shoes"/>
            <ProductCard image={'/air-zoom-pegasus.png'} productTitle="Nike Air Zoom Pegasus" productPrice="120" productDescription="Men's Shoes"/>
          </Box>
        </Box>
      </Box>
    </>
  )
}
