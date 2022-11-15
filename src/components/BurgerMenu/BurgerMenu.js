import React, { useState } from 'react'
import BarItem from '@components/NavBarItem/NavBarItem'
import LogoutIcon from '@mui/icons-material/Logout'
import MenuIcon from '@mui/icons-material/Menu'
import { Box } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import { signOut } from 'next-auth/react'

function BurgerMenu ({ pages, links }) {
  const [anchorElNav, setAnchorElNav] = useState(null)

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
        <MenuItem>
          <Typography onClick={() => signOut()} textAlign="center">Log out</Typography>
        </MenuItem>
      </Menu>
    </>
  )
}

export default BurgerMenu
