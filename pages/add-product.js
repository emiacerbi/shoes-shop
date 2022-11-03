import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'

import HeaderLoggedIn from '../src/components/HeaderLoggedIn/HeaderLoggedIn'
import SideBarProfileInfo from '../src/components/SideBarProfileInfo/SideBarProfileInfo'
import NavBarItem from '../src/components/NavBarItem/NavBarItem'
import PrimaryButton from '../src/components/PrimaryButton/PrimaryButton'
import SecondaryButton from '../src/components/SecondaryButton.js/SecondaryButton'

import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import ListAltIcon from '@mui/icons-material/ListAlt'
import ChatIcon from '@mui/icons-material/Chat'
import AddProductForm from '../src/components/AddProductForm/AddProductForm'
import ProductImageStore from '../src/components/ProductImageStore/ProductImageStore'

export default function AddProduct () {
  const [screenWidth, setscreenWidth] = useState()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setscreenWidth(window.innerWidth)
    }
  }, [])

  return (
    <>
      <HeaderLoggedIn
        pages={['Home', 'For Women', 'For Man', 'Accesories', 'Sale']}
        burger={true}
        links={['Test1', 'Test2']}
      />
      <Box component="main" sx={{ display: 'flex' }}>

        {screenWidth > 599 &&
        <Box sx={{ flexDirection: 'column' }}>
          <SideBarProfileInfo/>
          <Box sx={{ display: 'flex', mt: '30px', ml: '46px' }} >
            <ShoppingBagIcon sx={{ color: '#6E7278' }}/>
            <NavBarItem name="My Orders"/>
          </Box>
          <Box sx={{ display: 'flex', mt: '30px', ml: '46px' }}>
            <ListAltIcon sx={{ color: '#6E7278' }} />
            <NavBarItem name="Wish List" num={4} />
          </Box>
          <Box sx={{ display: 'flex', mt: '30px', ml: '46px' }}>
            <ChatIcon sx={{ color: '#6E7278' }} />
            <NavBarItem name="Newsletters" />
          </Box>
        </Box>
        }

        <Box
          sx={{
            display: 'flex',
            flex: '1',
            flexDirection: 'column',
            p: { xs: '20px', sm: '55px' }
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'row', flex: '1' }}>
            <Box sx={{ flex: '1', maxWidth: 890 }}>
              <Typography variant="h1">Add Product</Typography>
              <Typography variant="p" >
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage
                is attributed to an unknown typesetter in the 15th century who
                is thought to have scrambled parts of Ciceros De Finibus
                Bonorum et Malorum for use in a type specimen book. It usually
                begins with:
              </Typography>
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, height: 40, width: 323, gap: '19px', flex: '1', justifyContent: 'flex-end' }}>
              <PrimaryButton maxWidth="152px">Schedule</PrimaryButton>
              <SecondaryButton maxWidth="152px">Save</SecondaryButton>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <AddProductForm/>
            {screenWidth > 599 && <ProductImageStore/>}
          </Box>
        </Box>
      </Box>
    </>
  )
}
