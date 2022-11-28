import { useEffect, useState } from 'react'
import CheckBox from '@components/CheckBox/CheckBox'
import FilterTitle from '@components/FilterTitle/FilterTitle'
import HeaderLoggedIn from '@components/HeaderLoggedIn/HeaderLoggedIn'
import ProductCard from '@components/ProductCard/ProductCard'
import SeparationLine from '@components/SeparationLine/SeparationLine'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import { Box, Grid, InputBase, Typography } from '@mui/material'
import { theme } from '@styles/theme'
import { useQuery } from '@tanstack/react-query'
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
  const [filterGender, setFilterGender] = useState(true) // State to show/hide Gender filters
  const [filterBrand, setFilterBrand] = useState(true) // State to show/hide Brand filters
  const [filterPrice, setFilterPrice] = useState(true) // State to show/hide Price filters
  const [filterColor, setFilterColor] = useState(true) // State to show/hide Color filters
  const [filterSize, setFilterSize] = useState(true) // State to show/hide Color filters

  const [filtersArray, setFiltersArray] = useState([])
  const router = useRouter()

  const baseQuery = {
    filters: {
      userID: {
        id: {
          $notNull: true
        }
      },
      teamName: {
        $eq: 'ea-team'
      }
    },
    populate: '*',
    pagination: {
      page: 1,
      pageSize: 100
    }
  }

  const [queryObj, setQueryObj] = useState(baseQuery)

  const { data } = useQuery({
    queryKey: ['products', queryObj],
    queryFn: () => {
      return getProducts(`?${qs.stringify(queryObj)}`)
    }
  })

  const qs = require('qs')

  console.log(data)

  const [opacity, setOpacity] = useState('')
  const [screenWidth, setScreenWidth] = useState(0)

  // const handleValue = (e) => {
  //   const checked = e.target.checked
  //   const name = e.target.name

  //   if (checked) {
  //     setInputInfo({
  //       ...inputInfo,
  //       [name]: !inputInfo.name
  //     })
  //   }
  // }

  console.log(router)

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
              $in: newFilters
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

      console.log({ newQueryObj })

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

  function handleGender() {
    return setFilterGender(!filterGender)
  }

  function handleBrand() {
    return setFilterBrand(!filterBrand)
  }

  function handlePrice() {
    return setFilterPrice(!filterPrice)
  }

  function handleColor() {
    return setFilterColor(!filterColor)
  }

  function handleSize() {
    return setFilterSize(!filterSize)
  }

  // Filter data
  const [search, setSearch] = useState('')

  const handleInput = (e) => {
    setSearch(e.target.value)
  }

  const brand = !search
    ? brands
    : brands.filter((brand) =>
        brand.toLowerCase().includes(search.toLocaleLowerCase())
      )

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
              <FilterTitle filterName={'Gender'} handleGender={handleGender} />
              {filterGender && (
                <>
                  {' '}
                  <CheckBox
                    label={genders}
                    name="gender"
                    handleFilters={handleFilters}
                    // setQueryState={setQueryState}
                  />{' '}
                </>
              )}

              <SeparationLine width={'200px'} />

              {/* Brand */}
              <FilterTitle filterName={'Brand'} handleBrand={handleBrand} />
              {filterBrand && (
                <>
                  <Box
                    sx={{ display: 'flex', alignItems: 'center', mb: '35px' }}
                  >
                    <SearchOutlinedIcon
                      sx={{
                        color: '#494949',
                        position: 'absolute',
                        ml: '16px',
                        width: '18px',
                        height: '18px'
                      }}
                    />
                    <InputBase
                      sx={{
                        [theme.breakpoints.up('sm')]: {
                          border: '1px solid #494949',
                          borderRadius: '42px',
                          width: '260px',
                          height: '33px',
                          paddingLeft: '40px',
                          input: {
                            '&::placeholder': {
                              fontSize: '1.25rem',
                              color: '#494949'
                            }
                          }
                        }
                      }}
                      type="text"
                      onChange={handleInput}
                      value={search}
                      placeholder="Search"
                    />
                  </Box>

                  <CheckBox label={brand} />
                </>
              )}
            </Box>

            <SeparationLine width={'200px'} />

            {/* Price */}
            {/* <FilterTitle filterName={'Price'} handlePrice={handlePrice} />
            <SeparationLine width={'200px'} /> */}

            {/* Color */}
            <FilterTitle filterName={'Color'} handleColor={handleColor} />
            {filterColor && (
              <>
                {' '}
                <CheckBox label={colors} />{' '}
              </>
            )}
            <SeparationLine width={'200px'} />

            {/* Size */}
            <FilterTitle filterName={'Size'} handleSize={handleSize} />
            {filterSize && (
              <>
                {' '}
                <CheckBox label={sizes} />{' '}
              </>
            )}
          </Box>
        )}

        {/* MOBILE FILTERS */}
        {/* FILTER BLOCK */}
        {showFilters && (
          <Box
            sx={{
              maxWidth: '320px',
              width: 'auto',
              display: { xs: 'flex', sm: 'none' },
              flexDirection: 'column',
              right: 0,
              top: 0,
              position: 'absolute',
              zIndex: 100,
              background: 'white'
            }}
          >
            <Box sx={{ maxWidth: '320px', ml: '15px' }}>
              <Typography
                sx={{
                  display: 'flex',
                  justifyContent: 'end',
                  mt: '25px',
                  mr: '20px'
                }}
                onClick={showFiltersBlock}
              >
                {' '}
                X{' '}
              </Typography>

              {/* Gender */}
              <FilterTitle filterName={'Gender'} handleGender={handleGender} />
              {filterGender && (
                <>
                  {' '}
                  <CheckBox label={genders} />{' '}
                </>
              )}
              <SeparationLine />

              {/* Brand */}
              <FilterTitle filterName={'Brand'} handleBrand={handleBrand} />
              {filterBrand && (
                <>
                  <Box
                    sx={{ display: 'flex', alignItems: 'center', mb: '35px' }}
                  >
                    <SearchOutlinedIcon
                      sx={{
                        color: '#494949',
                        position: 'absolute',
                        ml: '16px',
                        width: '18px',
                        height: '18px'
                      }}
                    />
                    <InputBase
                      sx={{
                        [theme.breakpoints.down('sm')]: {
                          border: '1px solid #494949',
                          borderRadius: '42px',
                          width: '260px',
                          height: '33px',
                          paddingLeft: '40px',
                          input: {
                            '&::placeholder': {
                              fontSize: '1.25rem',
                              color: '#494949'
                            }
                          }
                        }
                      }}
                      type="text"
                      // onChange={handleInput}
                      value={search}
                      placeholder="Search"
                    />
                  </Box>

                  <CheckBox label={brand} />
                </>
              )}

              <SeparationLine />

              {/* Price */}
              <FilterTitle filterName={'Price'} handlePrice={handlePrice} />
              <SeparationLine />

              {/* Color */}
              <FilterTitle filterName={'Color'} handleColor={handleColor} />
              {filterColor && (
                <>
                  {' '}
                  <CheckBox label={colors} />{' '}
                </>
              )}
              <SeparationLine />

              {/* Size */}
              <FilterTitle filterName={'Size'} handleSize={handleSize} />
              {filterSize && (
                <>
                  {' '}
                  <CheckBox label={sizes} />{' '}
                </>
              )}
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
                [theme.breakpoints.down('sm')]: {
                  mt: '8px',
                  fontWeight: 300,
                  fontSize: '15px',
                  lineHeight: '18px'
                },
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
                      [theme.breakpoints.down('sm')]: {
                        display: 'none'
                      },
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
              justifyContent: { xs: 'center', md: 'space-between' },
              paddingInline: { xs: '1rem', md: '3.5rem' },
              gap: '2rem'
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
