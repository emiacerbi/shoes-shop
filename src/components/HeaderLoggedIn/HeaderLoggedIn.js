import { useState } from 'react'
import BurgerMenu from '@components/BurgerMenu/BurgerMenu'
import Cart from '@components/Cart/Cart'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import { AppBar, Button, InputBase, Link } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Image from 'next/image'

function HeaderLoggedIn ({ pages, links, cart, burger }) {
  const [searchInput, setSearchInput] = useState(false) // Hook to show/hide the search input
  const [value, setValue] = useState('') // Value to handle search input

  const handleSearchInput = () => {
    setSearchInput(!searchInput)
  }

  return (
    <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none', padding: '1.75rem', borderBottom: '1px solid #EAECF0' }}>
      {/* Desktop */}
      <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }} >
        <Link href={'/'}>
          <Image src='/logo.png' width={35} height={26} alt='logo' />
        </Link>
        <Box sx={{ display: 'flex', gap: '2rem', marginLeft: '2.5rem' }} >
          {pages.map((page, index) => (
            <Link key={index} sx={{ textDecoration: 'none', color: '#000000' }} href={page.toLowerCase()}>
              <Typography
                sx={{
                  color: '#000000',
                  lineHeight: '19px',
                  fontWeight: 500,
                  fontSize: '16px'

                }}
                textAlign="center">{page}</Typography>
            </Link>
          )
          )}
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 'auto', position: 'relative' }}>
          <SearchOutlinedIcon
            sx={{
              color: '#494949',
              position: 'absolute',
              width: '18px',
              height: '18px',
              left: 20
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
        {cart && <Box sx={{ marginLeft: '1rem' }}><Cart /> </Box>}
      </Box>

      {/* Mobile  */}
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href={'/'} sx={{ mt: 'auto' }}>
          <Image src='/logo.png' width={35} height={26} alt='logo' />
        </Link>
        <Box sx={{ maxWidth: '200px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'end', gap: '1rem' }}>
          {cart && <Cart />}
          <SearchOutlinedIcon sx={{ color: '#494949', width: '23px', height: '23px', cursor: 'pointer' }} onClick={handleSearchInput}/>
          {searchInput && (
            <>
              <InputBase
                sx={{
                  border: '1px solid #494949',
                  borderRadius: '42px',
                  width: '200px',
                  height: '30px',
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
                  sx={{ borderRadius: '10px', color: '#ffffff', minWidth: '30px', padding: 0 }}
                > OK </Button>
              </form>
            </>
          )}
          {burger && <BurgerMenu pages={pages} links={links}/>}
        </Box>
      </Box>
    </AppBar>
  )
}

export default HeaderLoggedIn
