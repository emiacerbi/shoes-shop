import { useState } from 'react'
import HeaderLoggedIn from '../src/components/HeaderLoggedIn/HeaderLoggedIn'
import { Box, Typography } from '@mui/material'
import ProductCard from '../src/components/ProductCard/ProductCard'

export default function SearchResults () {
  const [filtersOn, setFiltersOn] = useState(true) // State to show/hide the side filters
  const pages = ['Home', 'For women', 'For Men', 'Accesories', 'Sale']
  const links = ['/', '/for-women', '/for-men', '/accesories', '/sale']

  const handleFilterOn = () => {
    setFiltersOn(!filtersOn)
  }

  return (
    <>
      <HeaderLoggedIn pages={pages} links={links} cart={true} burger={true}/>
      <Box display={{ xs: 'flex', sm: 'flex' }} sx={{ maxWidth: '1920px' }}>
        {filtersOn &&
        <Box sx={{ width: '320px', heigth: 'auto', display: { xs: 'none', sm: 'flex' }, flexDirection: 'column', border: '1px solid', ml: '15px', mr: '15px' }}>
          {/* FILTROS */}
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
              {filtersOn
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
