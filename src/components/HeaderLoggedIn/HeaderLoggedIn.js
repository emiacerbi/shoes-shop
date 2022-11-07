import { useState } from 'react'
import BurgerMenu from '@components/BurgerMenu/BurgerMenu'
import Cart from '@components/Cart/Cart'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import { AppBar, Button, InputBase, Link } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function HeaderLoggedIn ({ pages, links, cart, burger }) {
  const [searchInput, setSearchInput] = useState(false) // Hook to show/hide the search input
  const [value, setValue] = useState('') // Value to handle search input

  const handleSearchInput = () => {
    setSearchInput(!searchInput)
  }

  return (
    <AppBar position="static" sx={{ background: 'none', boxShadow: 'none' }}>
      {/* Desktop */}
      <Box sx={{ display: { xs: 'none', sm: 'flex' } }} >
        <Link href={'/'}>
          <Box
            component="img"
            sx={{ marginTop: '50px', marginLeft: '20px' }}
            src="/logo.png"
            alt="logo"/>
        </Link>
        <Box sx={{ display: 'flex', ml: '50px', mt: '50px' }} >

          {pages.map((page, index) => (
            <Link key={index} sx={{ textDecoration: 'none', color: '#000000' }} href={page.toLowerCase()}>
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
          )
          )}
        </Box>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          marginTop: '40px',
          marginLeft: 'auto',
          marginRight: '20px'
        }} >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <SearchOutlinedIcon
              sx={{
                color: '#494949',
                position: 'absolute',
                ml: '16px',
                width: '18px',
                height: '18px',
                '@media (min-width: 601px) and (max-width: 767px)': {
                  ml: '8px'
                }
              }} />
            <InputBase
              sx={{
                '@media (min-width: 600px)': {
                  border: '1px solid #494949',
                  borderRadius: '42px',
                  width: '100%',
                  height: '48px',
                  ml: '5px',
                  paddingLeft: '40px',
                  input: {
                    '&::placeholder': {
                      fontSize: '1.25rem',
                      color: '#494949'
                    }
                  }
                },
                '@media (min-width: 601px) and (max-width: 767px)': {
                  height: '40px',
                  paddingLeft: '20px',
                  input: {
                    '&::placeholder': {
                      fontSize: '1rem',
                      color: '#494949'
                    }
                  }
                }
              }}
              type="text"
              placeholder='Search' />
          </Box>
          {cart && <Cart/>}
        </Box>
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
        <Box sx={{ maxWidth: '200px', width: '100%', mr: 2, display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
          {cart && <Cart />}
          <SearchOutlinedIcon sx={{ color: '#494949', width: '23px', height: '23px', cursor: 'pointer', ml: '5px', mr: '5px' }} onClick={handleSearchInput}/>
          {searchInput && (
            <>
              <InputBase
                sx={{
                  border: '1px solid #494949',
                  borderRadius: '42px',
                  width: '200px',
                  height: '30px',
                  paddingLeft: '10px',
                  input: {
                    '&::placeholder': {
                      fontSize: '1rem',
                      color: '#494949'
                    }
                  }
                }}
                type="text"
                placeholder='Search'
                value={value}
                onChange={(e) => setValue(e.target.value)} />
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

      {/* Separation line */}
      <Box sx={{
        marginTop: '40px',
        borderBottom: '1px solid #EAECF0'
      }}/>
    </AppBar>
  )
}

export default HeaderLoggedIn
