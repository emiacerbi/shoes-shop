import { Box, Typography } from '@mui/material'

import HeaderLoggedIn from '../src/components/HeaderLoggedIn/HeaderLoggedIn'
import SideBarProfileInfo from '../src/components/SideBarProfileInfo/SideBarProfileInfo'
import NavBarItem from '../src/components/NavBarItem/NavBarItem'
import PrimaryButton from '../src/components/PrimaryButton/PrimaryButton'
import SecondaryButton from '../src/components/SecondaryButton.js/SecondaryButton'

import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import ListAltIcon from '@mui/icons-material/ListAlt'
import ChatIcon from '@mui/icons-material/Chat'

export default function AddProduct () {
  return (
    <>
      <HeaderLoggedIn pages={['Home', 'For Women', 'For Man', 'Accesories', 'Sale']} burger={true} links={['Test1', 'Test2']} />
      <Box sx={{ display: 'flex' }}>

        <Box sx={{ flexDirection: 'column' }}>
          <SideBarProfileInfo/>
          <Box sx={{ display: 'flex', mt: '30px', ml: '46px' }} >
            <ShoppingBagIcon sx={{ color: '#6E7278' }}/>
            <NavBarItem name="My Orders"/>
          </Box>
          <Box sx={{ display: 'flex', mt: '30px', ml: '46px' }} >
            <ListAltIcon sx={{ color: '#6E7278' }}/>
            <NavBarItem name="Wish List" num={4} />
          </Box>
          <Box sx={{ display: 'flex', mt: '30px', ml: '46px' }} >
            <ChatIcon sx={{ color: '#6E7278' }}/>
            <NavBarItem name="Newsletters" />
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <Box>
            <Typography variant='h1'>Add Product</Typography>
            <Typography variant='p'>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage<br/>
           is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus<br/>
            Bonorum et Malorum for use in a type specimen book. It usually begins with:</Typography>
          </Box>
          <Box sx={{ display: 'flex', height: 40, width: 323, gap: '19px' }} >
            <PrimaryButton maxWidth='152px'>Schedule</PrimaryButton>
            <SecondaryButton maxWidth='152px'>Save</SecondaryButton>
          </Box>
        </Box>

      </Box>
    </>
  )
}
