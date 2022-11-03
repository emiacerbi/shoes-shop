import { useState } from 'react'
import HeaderLoggedIn from '../src/components/HeaderLoggedIn/HeaderLoggedIn'
import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material'
import ProductCard from '../src/components/ProductCard/ProductCard'
import { theme } from '../styles/theme'

export default function SearchResults () {
  const [showFilters, setShowFilters] = useState(true) // State to show/hide the side filters
  const [filter, setFilter] = useState(true)
  const pages = ['Home', 'For women', 'For Men', 'Accesories', 'Sale']
  const links = ['/', '/for-women', '/for-men', '/accesories', '/sale']

  const handleFilterOn = () => {
    return setShowFilters(!showFilters)
  }

  function handleGender () {
    return setFilter(!filter)
  }

  return (
    <>
      <HeaderLoggedIn pages={pages} links={links} cart={true} burger={true}/>
      <Box display={{ xs: 'flex', sm: 'flex' }} sx={{ maxWidth: '1920px' }}>
        {showFilters &&
        <Box sx={{ width: '320px', heigth: 'auto', display: { xs: 'none', sm: 'flex' }, flexDirection: 'column', border: '1px solid', ml: '40px', mr: '40px' }}>
          <Typography
            sx={{
              fontWeight: 300,
              fontSize: '15px',
              lineHeight: '18px'
            }}
          >
            Shoes/Air Force 1
          </Typography>
          <Typography {...theme.typography.h1}>
            Air Force 1 (137)
          </Typography>
          <Box
            sx={{
              width: '320px',
              color: '#EAECF0',
              border: '1px solid',
              mt: '16px'
            }}
          ></Box>
          {/* GENDER BLOCK */}
          <Box sx={{ maxWidth: '320px' }}>
            <Box display={'flex'} sx={{ width: 'auto', alignItems: 'end' }}>
              <Typography sx={{ fontWeight: 500, fontSize: '16px', lineHeight: '19px', mt: '28px' }}>Gender</Typography>
              <Box
                component="img"
                src="/vector.png"
                alt="vector icon"
                onClick={handleGender}
                sx={{
                  // position: 'absolute',
                  marginLeft: '180px',
                  width: '8px',
                  height: '16px',
                  transition: 'all 0.5s ease',
                  '&:hover': {
                    transform: 'rotate(180deg)',
                    cursor: 'pointer'
                  }
                }}
              ></Box>
            </Box>
            <Box display={'flex'} sx={{ flexDirection: 'column' }}>
              <FormControlLabel
                control={<Checkbox/>}
                label={'Men'}
              />
              <FormControlLabel
                control={<Checkbox/>}
                label={'Women'}
              />
            </Box>
          </Box>
        </Box> }
        <Box sx={{ width: '1540px', m: '20px' }}> {/* CONTAINER ZAPATILLAS */}
          <Box sx={{ width: 'auto', display: 'flex', justifyContent: 'space-between' }}>
            <Typography sx={{
              fontWeight: 500,
              fontSize: '45px',
              lineHeight: '53px'
            }}> Search Results
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {showFilters
                ? <Typography sx={{
                  fontWeight: 400,
                  fontSize: '24px',
                  lineHeight: '28px',
                  mr: '6px'
                }}>
              Hide Filters
                </Typography>
                : <Typography sx={{
                  fontWeight: 400,
                  fontSize: '24px',
                  lineHeight: '28px',
                  mr: '6px'
                }}>
              Filters
                </Typography>}
              {/* FILTER-REMOVE ICON */}
              <Box
                onClick={() => { handleFilterOn() }}
                component="img"
                src="/filter-remove.png"
                sx={{ width: '24px', height: '24px', cursor: 'pointer' }}/>
            </Box>
          </Box>
          <Box sx={{ mt: '20px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
            <ProductCard image={'/airmax-270.png'} productTitle="Nike AirMax 90" productPrice="140" productDescription="Men's Shoes"/>
            <ProductCard image={'/airmax-270.png'} productTitle="Nike AirMax 90" productPrice="140" productDescription="Men's Shoes"/>
            <ProductCard image={'/airmax-270.png'} productTitle="Nike AirMax 90" productPrice="140" productDescription="Men's Shoes"/>
            <ProductCard image={'/airmax-270.png'} productTitle="Nike AirMax 90" productPrice="140" productDescription="Men's Shoes"/>
            <ProductCard image={'/airmax-270.png'} productTitle="Nike AirMax 90" productPrice="140" productDescription="Men's Shoes"/>
            <ProductCard image={'/airmax-270.png'} productTitle="Nike AirMax 90" productPrice="140" productDescription="Men's Shoes"/>
            <ProductCard image={'/airmax-270.png'} productTitle="Nike AirMax 90" productPrice="140" productDescription="Men's Shoes"/>
            <ProductCard image={'/airmax-270.png'} productTitle="Nike AirMax 90" productPrice="140" productDescription="Men's Shoes"/>
          </Box>
        </Box>
      </Box>
    </>
  )
}
