import { AppBar, Link } from '@mui/material'
import * as React from 'react'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import MenuItem from '@mui/material/MenuItem'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import styles from './styles.module.css'
const pages = ['Home', 'For women', 'For Men', 'Accesories', 'Sale']
const links = ['/', '/for-women', '/for-men', '/accesories', '/sale']

function HeaderLogedIn () {
  const [anchorElNav, setAnchorElNav] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar position="static" sx={{ background: 'none', boxShadow: 'none' }}>
      <Toolbar disableGutters >
        {/* Desktop */}
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, ml: '30px' }} className={styles.box}>
          <Link href={'/'}>
            <img src="/logo.png" alt="logo" className={styles.logo} />
          </Link>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1900px', width: '100%' }}>
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
                      textAlign="center">{page}</Typography>
                  </Link>
                </>
              )
              )}
            </Box>
            <Box className={styles.searchBox} >
              <SearchOutlinedIcon sx={{ color: '#494949', position: 'absolute', ml: '16px', width: '18px', height: '18px' }}/>
              <input type="text" placeholder='Search' className={styles.searchInput} />
              <Link href={'/cart'}>
                <LocalMallOutlinedIcon sx={{ mr: 2, color: '#292D32' }}/>
              </Link>
            </Box>
          </Box>
        </Box>

        {/* Mobile  */}
        <Box sx={{ mt: '20px', flexGrow: 1, display: { xs: 'flex', sm: 'none' }, justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href={'/'} sx={{ mt: 'auto' }}>
            <img src="/logo.png" alt="logo" className={styles.logo} />
          </Link>
          <Box sx={{ maxWidth: '150px', width: '100%', mr: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
            <Link href={'/cart'}>
              <LocalMallOutlinedIcon sx={{ color: '#292D32' }}/>
            </Link>
            <SearchOutlinedIcon sx={{ color: '#494949', width: '23px', height: '23px' }}/>

            <IconButton
              sx={{ padding: 0 }}
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {/* Links menu pages */}
              {pages.map((page, index) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link sx={{ textDecoration: 'none', color: '#000000' }} href={`${links[index]}`}>
                    <Typography textAlign="center">{page}</Typography>
                  </Link>
                </MenuItem>
              )
              )}
            </Menu>
          </Box>
        </Box>
      </Toolbar>
      <div className={styles.separationLine}></div>
    </AppBar>
  )
}

export default HeaderLogedIn
