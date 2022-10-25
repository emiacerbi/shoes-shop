import React, { useState } from 'react'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

function BurgerMenu () {
  const [anchorElNav, setAnchorElNav] = useState(null)
  const pages = ['Home', 'For women', 'For Men', 'Accesories', 'Sale']
  const links = ['/', '/for-women', '/for-men', '/accesories', '/sale']

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <>
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
    </>
  )
}

export default BurgerMenu
