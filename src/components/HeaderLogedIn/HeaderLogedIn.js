import { AppBar, Link } from '@mui/material'
import * as React from 'react'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import AdbIcon from '@mui/icons-material/Adb'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import styles from './styles.module.css'
// const pages = ['Products', 'Pricing', 'Blog']
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

function HeaderLogedIn () {
  // const [anchorElNav, setAnchorElNav] = React.useState(null)
  // const [anchorElUser, setAnchorElUser] = React.useState(null)

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget)
  // }
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget)
  // }

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null)
  // }

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null)
  // }

  return (
    <AppBar position="static" sx={{ background: 'none', boxShadow: 'none' }}>
      {/* <Container maxWidth="xl"> */}
      <Toolbar disableGutters >
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, ml: '30px' }} className={styles.box}>
          <Link href={'/'}>
            <img src="/logo.png" alt="logo" className={styles.logo} />
          </Link>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1900px', width: '100%' }}>

            <Box sx={{ display: 'flex', ml: '50px', mt: '50px' }} className={styles.menuItems}>
              <Link href={'/'} sx={{ textDecoration: 'none' }}>
                <Typography variant="h6"
                  sx={{
                    // display: { xs: 'none', sm: 'flex' },
                    color: '#000000',
                    lineHeight: '19px',
                    mr: '36px'
                  }}>  Home  </Typography>
              </Link>
              <Link href={'/for-women'} sx={{ textDecoration: 'none' }}>
                <Typography variant="h6" sx={{
                  // display: { xs: 'none', sm: 'flex' },
                  color: '#000000',
                  lineHeight: '19px',
                  mr: '36px',
                  textAlign: 'center'
                }}> For women </Typography>
              </Link>
              <Link href={'/form-men'} sx={{ textDecoration: 'none' }}>
                <Typography variant="h6" sx={{
                  // display: { xs: 'none', sm: 'flex' },
                  color: '#000000',
                  lineHeight: '19px',
                  mr: '36px',
                  textAlign: 'center'
                }}> For men </Typography>
              </Link>
              <Link href={'/accesories'} sx={{ textDecoration: 'none' }}>
                <Typography variant="h6" sx={{
                  // display: { xs: 'none', sm: 'flex' },
                  color: '#000000',
                  lineHeight: '19px',
                  mr: '36px'
                }}> Accesories </Typography>
              </Link>
              <Link href={'/sale'} sx={{ textDecoration: 'none' }}>
                <Typography variant="h6" sx={{
                  // display: { xs: 'none', sm: 'flex' },
                  color: '#000000',
                  lineHeight: '19px'
                }}> Sale </Typography>
              </Link>
            </Box>

            <Box className={styles.searchBox}>
              <SearchOutlinedIcon sx={{ color: '#494949', position: 'absolute', ml: '16px', width: '18px', height: '18px' }}/>
              <input type="text" placeholder='Search' className={styles.searchInput} />
              <Link href={'/cart'}>
                <LocalMallOutlinedIcon sx={{ mr: 2, color: '#292D32' }}/>
              </Link>
            </Box>
          </Box>
        </Box>

        {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
            <IconButton
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>

          </Box> */}
      </Toolbar>
      {/* </Container> */}
      <div className={styles.separationLine}></div>
    </AppBar>
  )
}

export default HeaderLogedIn
