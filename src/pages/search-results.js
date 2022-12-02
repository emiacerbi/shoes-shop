import { useEffect, useState } from 'react'
import CustomFilter from '@components/CustomFilter/CustomFilter'
import HeaderLoggedIn from '@components/HeaderLoggedIn/HeaderLoggedIn'
import Loading from '@components/Loading/Loading'
import ProductCard from '@components/ProductCard/ProductCard'
import SecondaryButton from '@components/SecondaryButton/SecondaryButton'
import SeparationLine from '@components/SeparationLine/SeparationLine'
import { Box, Grid, Typography } from '@mui/material'
import { useTheme } from '@mui/system'
import { useQuery } from '@tanstack/react-query'
import { getBrands } from 'helpers/products/getBrands'
import { getColors } from 'helpers/products/getColors'
import { getGenders } from 'helpers/products/getGenders'
import { getProducts } from 'helpers/products/getProducts'
import { getSizes } from 'helpers/products/getSizes'
import Head from 'next/head'
import { useRouter } from 'next/router'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

const BASE_QUERY = {
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

export const getServerSideProps = async (context) => {
  const genders = await getGenders()
  const brands = await getBrands()
  const colors = await getColors()
  const sizes = await getSizes()

  return {
    props: {
      brands: brands.data.map((brand) => brand.attributes.name),
      genders: genders.data.map((gender) => gender.attributes.name),
      colors: colors.data.map((color) => color.attributes.name),
      sizes: sizes.data.map((size) => size.attributes.value),
      queryParams: context.query
    }
  }
}

export default function SearchResults({
  genders,
  brands,
  colors,
  sizes,
  queryParams
}) {
  const router = useRouter()
  // Filters
  const [showFilters, setShowFilters] = useState(false) // State to show/hide the side filters

  const theme = useTheme()

  const [filtersObj, setFiltersObj] = useState({
    color: [],
    gender: [],
    brand: [],
    size: []
  })

  const qs = require('qs')
  const [queryObj, setQueryObj] = useState(BASE_QUERY)
  const [isLoading, setIsLoading] = useState(false)

  const { data } = useQuery({
    queryKey: ['products', router],
    queryFn: () => {
      const isEmpty = Object.keys(queryParams).length === 0
      return getProducts(
        `?${qs.stringify(!isEmpty ? queryParams : BASE_QUERY)}`
      )
    },
    onSettled: () => {
      setIsLoading(false)
    }
  })

  const [opacity, setOpacity] = useState('')
  const [screenWidth, setScreenWidth] = useState(0)

  const handleSearchInput = (e) => {
    setIsLoading(true)
    e.preventDefault()
    const value = e.target.searchinput.value

    const newQueryObj = {
      ...queryObj,
      filters: {
        ...queryObj.filters,
        name: {
          $containsi: value
        }
      }
    }

    router.replace({
      pathname: '/search-results',
      query: qs.stringify(newQueryObj)
    })
    setQueryObj(newQueryObj)
  }

  useEffect(() => {
    // check router query to set filters obj
    const newFiltersObj = {
      ...filtersObj
    }

    // iterate over the query object and check if brands items are in the query
    brands.forEach((element) => {
      const query = JSON.stringify(router.query)
      if (query.includes(element) && !newFiltersObj.brand.includes(element)) {
        newFiltersObj.brand.push(element)
      }
    })

    // iterate over the query object and check if colors items are in the query
    colors.forEach((element) => {
      const query = JSON.stringify(router.query)
      if (query.includes(element) && !newFiltersObj.color.includes(element)) {
        newFiltersObj.color.push(element)
      }
    })

    // iterate over the query object and check if sizes items are in the query
    sizes.forEach((element) => {
      const query = JSON.stringify(router.query)
      if (query.includes(element) && !newFiltersObj.size.includes(element)) {
        newFiltersObj.size.push(element)
      }
    })

    // iterate over the query object and check if genders items are in the query
    genders.forEach((element) => {
      const query = JSON.stringify(router.query)
      if (query.includes(element) && !newFiltersObj.gender.includes(element)) {
        newFiltersObj.gender.push(element)
      }
    })

    setFiltersObj(newFiltersObj)
  }, [])

  const handleFilters = (e, key, value) => {
    setIsLoading(true)
    const checked = e.target.checked

    if (checked) {
      const newFilters = { ...filtersObj }
      newFilters[key].push(value)

      setFiltersObj(newFilters)

      if (key !== 'size') {
        const newQueryObj = {
          ...queryObj,
          filters: {
            ...queryObj.filters,
            [key]: {
              name: {
                $in: newFilters[key]
              }
            }
          }
        }
        router.replace({
          query: qs.stringify(newQueryObj)
        })
        setQueryObj(newQueryObj)
      } else {
        const newQueryObj = {
          ...queryObj,
          filters: {
            ...queryObj.filters,
            [key]: {
              value: {
                $in: newFilters[key]
              }
            }
          }
        }
        router.replace({
          query: qs.stringify(newQueryObj)
        })
        setQueryObj(newQueryObj)
      }
    }

    if (!checked) {
      const newFilters = { ...filtersObj }
      const relevantFilters = newFilters[key].filter((item) => item !== value)
      newFilters[key] = relevantFilters

      setFiltersObj(newFilters)

      if (key !== 'size') {
        const newQueryObj = {
          ...queryObj,
          filters: {
            ...queryObj.filters,
            [key]: {
              name: {
                $in: newFilters[key]
              }
            }
          }
        }
        router.replace({
          query: qs.stringify(newQueryObj)
        })
        setQueryObj(newQueryObj)
      } else {
        const newQueryObj = {
          ...queryObj,
          filters: {
            ...queryObj.filters,
            [key]: {
              value: {
                $in: newFilters[key]
              }
            }
          }
        }
        router.replace({
          query: qs.stringify(newQueryObj)
        })
        setQueryObj(newQueryObj)
      }
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

  return (
    <>
      <Head>
        <title>Search - Shoes Shop</title>
      </Head>
      <HeaderLoggedIn
        pages={['Home', 'Bag', 'Add Product']}
        links={['/', '/bag', '/add-product']}
        cart={true}
        burger={true}
        opacity={opacity}
        handleInputSubmit={handleSearchInput}
        shouldSearchInputBeDisabled={isLoading}
      />

      <Box
        display={{
          xs: 'block',
          sm: 'flex'
        }}
        sx={{
          width: '100%'
        }}
      >
        {/* DESKTOP FILTERS */}
        {showFilters && (
          <Box
            component="form"
            sx={{
              minWidth: '320px',
              heigth: 'auto',
              display: { xs: 'none', sm: 'flex' },
              flexDirection: 'column'
            }}
          >
            <Box sx={{ py: '1.75rem', px: '2.5rem' }}>
              <Typography variant="p" sx={{ fontWeight: '300' }}>
                Shoes/Air Force 1
              </Typography>
              <Typography variant="h3">Air Force 1 (137)</Typography>
            </Box>
            <SeparationLine />
            <Box sx={{ py: '1.75rem', px: '2.5rem' }}>
              <SecondaryButton
                onClick={() => {
                  router.push('/search-results').then(() => router.reload())
                }}
              >
                CLEAR ALL FILTERS
              </SecondaryButton>
            </Box>
            <SeparationLine />
            {/* FILTER BLOCK */}
            {/* Gender */}
            <CustomFilter
              filters={router.query}
              isCheckboxDisabled={isLoading}
              filterName="Gender"
              handleFilters={handleFilters}
              category={genders}
            />
            <SeparationLine />
            {/* Brand */}
            <CustomFilter
              filters={router.query}
              isCheckboxDisabled={isLoading}
              filterName="Brand"
              handleFilters={handleFilters}
              category={brands}
              isBrand={true}
              handleSearchInput={handleSearchInput}
            />
            <SeparationLine />
            {/* Color */}
            <CustomFilter
              filters={router.query}
              isCheckboxDisabled={isLoading}
              filterName="Color"
              handleFilters={handleFilters}
              category={colors}
            />
            <SeparationLine />
            {/* Size */}
            <CustomFilter
              filters={router.query}
              isCheckboxDisabled={isLoading}
              filterName="Size"
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
              background: 'white'
            }}
          >
            <Box sx={{ maxWidth: '320px' }}>
              <Typography
                sx={{
                  display: 'flex',
                  justifyContent: 'end',
                  my: '25px',
                  px: '2.5rem'
                }}
                onClick={showFiltersBlock}
              >
                X
              </Typography>

              <SeparationLine
                sx={{
                  mt: 2
                }}
              />

              <Box sx={{ py: '1.75rem', px: '2.5rem' }}>
                <SecondaryButton
                  onClick={() => {
                    router.push('/search-results').then(() => router.reload())
                  }}
                >
                  CLEAR ALL FILTERS
                </SecondaryButton>
              </Box>

              <SeparationLine />
              {/* Gender */}
              <CustomFilter
                filters={router.query}
                isCheckboxDisabled={isLoading}
                filterName={'Gender'}
                handleFilters={handleFilters}
                category={genders}
              />

              <SeparationLine />

              {/* Brand */}
              <CustomFilter
                filters={router.query}
                isCheckboxDisabled={isLoading}
                filterName={'Brand'}
                handleFilters={handleFilters}
                category={brands}
                isBrand={true}
                handleSearchInput={handleSearchInput}
              />

              <SeparationLine />

              {/* Color */}
              <CustomFilter
                filters={router.query}
                isCheckboxDisabled={isLoading}
                filterName={'Color'}
                handleFilters={handleFilters}
                category={colors}
              />

              <SeparationLine />

              {/* Size */}
              <CustomFilter
                filters={router.query}
                isCheckboxDisabled={isLoading}
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
            <Typography variant="h1">Search Results</Typography>

            {screenWidth < 599 && <SeparationLine />}

            <Typography sx={{ display: { sm: 'none' } }}>
              Shoes/Air Force 1
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between '
              }}
            >
              <Typography variant="h1" sx={{ display: { sm: 'none' } }}>
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
              gap: '3rem',
              rowGap: '5rem'
            }}
            columns={{ xs: 6, md: 11, lg: 14 }}
          >
            {!isLoading &&
              data?.data?.map(({ id, attributes }) => (
                <ProductCard
                  key={id}
                  image={BASE_URL + attributes.images?.data[0].attributes.url}
                  productTitle={attributes.name}
                  productPrice={attributes.price}
                  productDescription={
                    attributes.gender?.data?.attributes?.name + "'s shoes."
                  }
                />
              ))}
            {!isLoading && data?.data.length === 0 && (
              <Typography variant="main">No results found.</Typography>
            )}

            {isLoading && <Loading />}
          </Grid>
        </Box>
      </Box>
    </>
  )
}
