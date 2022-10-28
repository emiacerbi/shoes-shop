import { AppBar, Link, Button } from '@mui/material'
import React, { useState } from 'react'
import Box from '@mui/material/Box'
// import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import styles from './styles.module.css'
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import BarItem from '../BarItem/BarItem'
import Cart from '../Cart/Cart'

function HeaderLoggedIn ({ pages, links, cart, burger }) {
  const [searchInput, setSearchInput] = useState(false) // Hook to show/hide the search input
  const [value, setValue] = useState('') // Value to handle search input

  const handleSearchInput = () => {
    setSearchInput(!searchInput)
  }

  return (
    <Box position="static" sx={{ background: 'none', boxShadow: 'none' }}>
      {/* <Toolbar disableGutters > */}
      {/* Desktop */}
      <Box sx={{ display: { xs: 'none', sm: 'flex' } }} className={styles.box}>
        <Link href={'/'}>
          <Box
            component="img"
            sx={{ marginTop: '50px', marginLeft: '20px' }}
            src="/logo.png"
            alt="logo"/>

        </Link>
        {/* <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1900px', width: '100%' }}> */}
        <Box sx={{ display: 'flex', ml: '50px', mt: '50px' }} className={styles.menuItems}>

          {pages.map((page, index) => (
            <>
              <Link sx={{ textDecoration: 'none', color: '#000000' }} href={`${links[index]}`}>
                <Typography
                  sx={{
                    color: '#000000',
                    lineHeight: '19px',
                    mr: '36px',
                    fontWeight: 500,
                    fontSize: '16px'
                  }}
                  textAlign="center"><BarItem name={page}/></Typography>
              </Link>
            </>
          )
          )}
        </Box>
        <Box className={styles.searchBox} >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <SearchOutlinedIcon sx={{ color: '#494949', position: 'absolute', ml: '16px', width: '18px', height: '18px' }} className={styles.searchIcon}/>
            <input type="text" placeholder='Search' className={styles.searchInput} />
          </Box>
          {cart && <Cart/>}
        </Box>
        {/* </Box> */}
      </Box>

      {/* Mobile  */}
      <Box sx={{ mt: '20px', flexGrow: 1, display: { xs: 'flex', sm: 'none' }, justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href={'/'} sx={{ mt: 'auto' }}>
          <Box
            component="img"
            sx={{ marginLeft: '20px' }}
            src="/logo.png"
            alt="logo"/>
        </Link>
        <Box sx={{ maxWidth: '150px', width: '100%', mr: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
          {cart && <Cart className={styles.cart}/>}
          <SearchOutlinedIcon sx={{ color: '#494949', width: '23px', height: '23px', cursor: 'pointer' }} onClick={handleSearchInput}/>
          {searchInput && (
            <>
              <input type="text" placeholder='Search' className={styles.searchInput} value={value} onChange={(e) => setValue(e.target.value)} />
              <form onSubmit={(e) => console.log(value) || e.preventDefault()}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ borderRadius: '10px', color: '#ffffff', minWidth: '30px', padding: 0, margin: '0 5px' }}
                > OK </Button>
              </form>
            </>
          )}
          {burger && <BurgerMenu pages={pages} links={links}/>}
        </Box>
      </Box>
      {/* </Toolbar> */}
      <Box className={styles.separationLine}></Box>
    </Box>
  )
}

export default HeaderLoggedIn
