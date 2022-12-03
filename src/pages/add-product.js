import { useContext } from 'react'
import AddProductForm from '@components/AddProductForm/AddProductForm'
import HeaderLoggedIn from '@components/HeaderLoggedIn/HeaderLoggedIn'
import BarItem from '@components/NavBarItem/NavBarItem'
import PrimaryButton from '@components/PrimaryButton/PrimaryButton'
import ProfileInfoSideBar from '@components/SideBarProfileInfo/SideBarProfileInfo'
import LogoutIcon from '@mui/icons-material/Logout'
import { Box, Button, Typography, useTheme } from '@mui/material'
import { UserContext } from 'context/UserContext'
import { getBrands } from 'helpers/products/getBrands'
import { getCategories } from 'helpers/products/getCategories'
import { getColors } from 'helpers/products/getColors'
import { getGenders } from 'helpers/products/getGenders'
import { getSizes } from 'helpers/products/getSizes'
import useAddProductForm from 'hooks/useAddProductForm'
import Head from 'next/head'
import { signOut } from 'next-auth/react'

export const getStaticProps = async () => {
  const brands = await getBrands()
  const genders = await getGenders()
  const sizes = await getSizes()
  const categories = await getCategories()
  const colors = await getColors()

  return {
    props: {
      brands: brands.data.map((data) => data.attributes.name),
      genders: genders.data.map((data) => data.attributes.name),
      sizes: sizes.data.map((data) => data.attributes.value),
      categories: categories.data.map((data) => data.attributes.name),
      colors: colors.data.map((data) => data.attributes.name)
    }
  }
}

export default function AddProduct({
  brands,
  genders,
  sizes,
  categories,
  colors
}) {
  const {
    inputInfo,
    setInputInfo,
    handleInputChange,
    handleInputImg,
    handleSubmit
  } = useAddProductForm()

  console.log(inputInfo)

  const theme = useTheme()

  const handleLogout = () => {
    localStorage.removeItem('shoes')
    signOut()
  }

  const context = useContext(UserContext)

  console.log(context.user)

  return (
    <>
      <Head>
        <title>Add - Shoes Shop</title>
      </Head>
      <HeaderLoggedIn
        pages={['Home', 'Search', 'Bag']}
        burger={true}
        links={['/home', '/search-results', '/bag']}
      />
      <Box component="main" sx={{ display: 'flex' }}>
        <Box
          sx={{ display: { xs: 'none', sm: 'block' }, flexDirection: 'column' }}
        >
          <ProfileInfoSideBar userData={context?.user.userInfo} />
          <Box
            sx={{ display: 'flex', mt: '30px', ml: '46px', cursor: 'pointer' }}
          >
            <Button
              onClick={handleLogout}
              sx={{
                textTransform: 'none',
                padding: '0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <LogoutIcon sx={{ color: '#6E7278' }} />
              <BarItem name="Log out" />
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flex: '1',
            flexDirection: 'column',
            p: { xs: '20px', sm: '55px' },
            width: '100%'
          }}
        >
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                flex: '1',
                mb: '15px',
                alignItems: 'center'
              }}
            >
              <Box sx={{ flex: '1', maxWidth: 890 }}>
                <Typography
                  variant="h1"
                  sx={{ [theme.breakpoints.down('md')]: { fontSize: '30px' } }}
                >
                  Add Product
                </Typography>
              </Box>
              <Box
                sx={{
                  display: { xs: 'none', lg: 'flex' },
                  height: 40,
                  width: 323,
                  gap: '19px',
                  flex: '1',
                  justifyContent: 'flex-end'
                }}
              >
                <PrimaryButton maxWidth="152px">Save</PrimaryButton>
              </Box>
            </Box>
            <Box sx={{ maxWidth: '900px' }}>
              <Typography variant="p">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts of Ciceros De Finibus Bonorum et
                Malorum for use in a type specimen book. It usually begins with:
              </Typography>
            </Box>

            <AddProductForm
              id="addProduct"
              brands={brands}
              genders={genders}
              sizes={sizes}
              categories={categories}
              colors={colors}
              setInputInfo={setInputInfo}
              handleInputChange={handleInputChange}
              handleInputImg={handleInputImg}
              inputInfo={inputInfo}
            />
          </form>
        </Box>
      </Box>
    </>
  )
}
