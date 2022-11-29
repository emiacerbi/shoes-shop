import { useEffect, useState } from 'react'
import CustomFilter from '@components/CustomFilter/CustomFilter'
import HeaderLoggedIn from '@components/HeaderLoggedIn/HeaderLoggedIn'
import ProductCard from '@components/ProductCard/ProductCard'
import SeparationLine from '@components/SeparationLine/SeparationLine'
import { Box, Grid, Typography } from '@mui/material'
import { theme } from '@styles/theme'
import { useQuery } from '@tanstack/react-query'
import { baseQuery } from 'constants/variables'
import { getBrands } from 'helpers/products/getBrands'
import { getColors } from 'helpers/products/getColors'
import { getGenders } from 'helpers/products/getGenders'
import { getProducts } from 'helpers/products/getProducts'
import { getSizes } from 'helpers/products/getSizes'
import { useRouter } from 'next/router'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export const getStaticProps = async () => {
  const genders = await getGenders()
  const brands = await getBrands()
  const colors = await getColors()
  const sizes = await getSizes()

  return {
    props: {
      brands: brands.data.map((brand) => brand.attributes.name),
      genders: genders.data.map((gender) => gender.attributes.name),
      colors: colors.data.map((color) => color.attributes.name),
      sizes: sizes.data.map((size) => size.attributes.value)
    }
  }
}

export default function SearchResults({ genders, brands, colors, sizes }) {
  // Filters
  const [showFilters, setShowFilters] = useState(false) // State to show/hide the side filters

  const [filtersArray, setFiltersArray] = useState([])
  const router = useRouter()

  const [queryObj, setQueryObj] = useState(baseQuery)

  const { data } = useQuery({
    queryKey: ['products', queryObj],
    queryFn: () => {
      return getProducts(`?${qs.stringify(queryObj)}`)
    }
  })

  const qs = require('qs')

  const [opacity, setOpacity] = useState('')
  const [screenWidth, setScreenWidth] = useState(0)

  const handleFilters = (e, key, value) => {
    const checked = e.target.checked

    if (checked) {
      const newFilters = [...filtersArray, value]
      setFiltersArray(newFilters)

      const newQueryObj = {
        ...queryObj,
        filters: {
          ...queryObj.filters,
          [key]: {
            name: {
              $in: value
            }
          }
        }
      }

      setQueryObj(newQueryObj)

      router.push({
        pathname: router.pathname,
        query: qs.stringify(newQueryObj)
      })
    }

    if (!checked) {
      const newFilters = filtersArray.filter((item) => item !== value)
      setFiltersArray(newFilters)

      const newQueryObj = {
        ...queryObj
      }

      delete newQueryObj.filters[key]

      setQueryObj(newQueryObj)

      router.push({
        pathname: router.pathname,
        query: qs.stringify(newQueryObj)
      })
    }
  }

  useEffect(() => {
    window.addEventListener('resize', () => {
      setScreenWidth(window.innerWidth)
    })
  })

  const showFiltersBlock = () => {
    setShowFilters(!showFilters)
    ;(screenWidth <= 599) & (showFilters === false) && setOpacity('65%')
    ;(screenWidth <= 599) & (showFilters === true) && setOpacity('100%')
  }

  // Filter data
  // const [search, setSearch] = useState('')

  // const handleInput = (e) => {
  //   setSearch(e.target.value)
  // }

  // const brand = !search
  //   ? brands
  //   : brands.filter((brand) =>
  //       brand.toLowerCase().includes(search.toLocaleLowerCase())
  //     )

  console.log({ data })
  console.log({ queryObj })

  return (
    <>
      <HeaderLoggedIn
        pages={['Home', 'Bag', 'Add Product']}
        links={['/', '/bag', '/add-product']}
        cart={true}
        burger={true}
        opacity={opacity}
      />

      <Box display={{ xs: 'block', sm: 'flex' }}>
        {/* DESKTOP FILTERS */}
        {showFilters && (
          <Box
            sx={{
              width: '200px',
              heigth: 'auto',
              display: { xs: 'none', sm: 'flex' },
              flexDirection: 'column',
              mx: '40px',
              mt: '20px'
            }}
          >
            <Typography
              sx={{
                fontWeight: 300,
                fontSize: '15px',
                lineHeight: '18px'
              }}
            >
              Shoes/Air Force 1
            </Typography>
            <Typography variant="h1">Air Force 1 (137)</Typography>
            <SeparationLine width={'200px'} />

            {/* FILTER BLOCK */}
            <Box sx={{ maxWidth: '200px' }}>
              {/* Gender */}
              <CustomFilter
                filterName={'Gender'}
                handleFilters={handleFilters}
                category={genders}
              />

              <SeparationLine width={'200px'} />

              {/* Brand */}
              <CustomFilter
                filterName={'Brand'}
                handleFilters={handleFilters}
                category={brands}
                isBrand={true}
                // handleInput={handleInput}
              />
            </Box>

            <SeparationLine width={'200px'} />

            {/* Color */}
            <CustomFilter
              filterName={'Color'}
              handleFilters={handleFilters}
              category={colors}
            />

            <SeparationLine width={'200px'} />

            {/* Size */}
            <CustomFilter
              filterName={'Size'}
              handleFilters={handleFilters}
              category={sizes}
            />
          </Box>
        )}

        {/* MOBILE FILTERS */}
        {/* FILTER BLOCK */}
        {showFilters && (
          <Box
            sx={{
              maxWidth: '320px',
              minHeight: '100vh',
              width: 'auto',
              display: { xs: 'flex', sm: 'none' },
              flexDirection: 'column',
              right: 0,
              top: 0,
              position: 'absolute',
              zIndex: 100,
              background: 'white',
              px: '2rem'
            }}
          >
            <Box sx={{ maxWidth: '320px' }}>
              <Typography
                sx={{
                  display: 'flex',
                  justifyContent: 'end',
                  mt: '25px'
                }}
                onClick={showFiltersBlock}
              >
                X
              </Typography>

              {/* Gender */}
              <CustomFilter
                filterName={'Gender'}
                handleFilters={handleFilters}
                category={genders}
              />

              <SeparationLine />

              {/* Brand */}
              <CustomFilter
                filterName={'Brand'}
                handleFilters={handleFilters}
                category={brands}
                isBrand={true}
                // handleInput={handleInput}
              />

              <SeparationLine />

              {/* Color */}
              <CustomFilter
                filterName={'Color'}
                handleFilters={handleFilters}
                category={colors}
              />

              <SeparationLine />

              {/* Size */}
              <CustomFilter
                filterName={'Size'}
                handleFilters={handleFilters}
                category={sizes}
              />
            </Box>
          </Box>
        )}

        {/* CONTAINER ZAPATILLAS */}
        <Box
          sx={{
            mt: '20px',
            [theme.breakpoints.down('sm')]: { opacity: `${opacity}` },
            width: '100%'
          }}
        >
          <Box
            sx={{
              paddingInline: { xs: '1rem', md: '3.5rem' },

              [theme.breakpoints.up('sm')]: {
                mt: '68px',
                display: 'flex',
                justifyContent: 'space-between'
              },
              [theme.breakpoints.down('sm')]: {
                width: 'auto',
                mt: 'auto'
              }
            }}
          >
            <Typography
              sx={{
                fontWeight: 500,
                [theme.breakpoints.up('sm')]: {
                  fontSize: '45px',
                  lineHeight: '53px'
                },
                [theme.breakpoints.down('sm')]: {
                  fontSize: '30px',
                  lineHeight: '35px'
                }
              }}
            >
              {' '}
              Search Results
            </Typography>

            {screenWidth < 599 && <SeparationLine />}

            <Typography
              sx={{
                mt: '8px',
                fontWeight: 300,
                fontSize: '15px',
                lineHeight: '18px',
                [theme.breakpoints.up('sm')]: {
                  display: 'none'
                }
              }}
            >
              Shoes/Air Force 1
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between '
              }}
            >
              <Typography
                {...theme.typography.h6}
                sx={{
                  [theme.breakpoints.up('sm')]: {
                    display: 'none'
                  }
                }}
              >
                Air Force 1 (137)
              </Typography>
              <Box sx={{ display: 'flex' }}>
                {showFilters ? (
                  <Typography
                    sx={{
                      display: { xs: 'none', md: 'block' },
                      fontWeight: 400,
                      fontSize: '24px',
                      lineHeight: '28px',
                      mr: '6px'
                    }}
                  >
                    Hide Filters
                  </Typography>
                ) : (
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: '24px',
                      lineHeight: '28px',
                      mr: '6px'
                    }}
                  >
                    Filters
                  </Typography>
                )}

                {/* FILTER-REMOVE ICON */}
                <Box
                  onClick={showFiltersBlock}
                  component="img"
                  src="/filter-remove.png"
                  sx={{ width: '24px', height: '24px', cursor: 'pointer' }}
                />
              </Box>
            </Box>
          </Box>
          <Grid
            container
            sx={{
              my: '20px',
              justifyContent: { xs: 'center', md: 'start' },
              paddingInline: { xs: '1rem', md: '3.5rem' },
              gap: '4.25rem'
            }}
            columns={{ xs: 6, md: 11, lg: 14 }}
          >
            <ProductCard
              image={'/airmax-270.png'}
              productTitle="Nike Air Max 270"
              productPrice="140"
              productDescription="Women's Shoes"
            />
            <ProductCard
              image={'/airmax-90.png'}
              productTitle="Nike AirMax 90"
              productPrice="140"
              productDescription="Men's Shoes"
            />

            {data?.data.map(({ id, attributes }) => (
              <ProductCard
                key={id}
                image={BASE_URL + attributes.images.data[0].attributes.url}
                productTitle="Nike AirMax 90"
                productPrice="140"
                productDescription="Men's Shoes"
              />
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  )
}
