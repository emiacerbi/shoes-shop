import { useContext, useState } from 'react'
import ChangePhotoButton from '@components/ChangePhotoButton/ChangePhotoButton'
import Form from '@components/Form/Form'
import HeaderLoggedIn from '@components/HeaderLoggedIn/HeaderLoggedIn'
import BarItem from '@components/NavBarItem/NavBarItem'
import PrimaryButton from '@components/PrimaryButton/PrimaryButton'
import PrimaryInput from '@components/PrimaryInput/PrimaryInput'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import LogoutIcon from '@mui/icons-material/Logout'
import { Avatar, Button, Modal, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { UserContext } from 'context/UserContext'
import useUpdateProfileForm from 'hooks/useUpdateProfileForm'
import Head from 'next/head'
import { signOut } from 'next-auth/react'

import { theme } from '../styles/theme'

const baseURL = 'https://shoes-shop-strapi.herokuapp.com'

export default function UpdateProfile() {
  const [settings, setSettings] = useState(true)
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  function handleSettings() {
    return setSettings(!settings)
  }
  const { handleInputChange, handleSubmit } = useUpdateProfileForm()

  const context = useContext(UserContext)

  const userData = context?.user.userInfo

  localStorage.setItem('id', JSON.stringify(userData.id))

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    gap: '1rem'
  }

  return (
    <>
      <Head>
        <title>Profile - Shoes Shop</title>
      </Head>
      <HeaderLoggedIn
        pages={['Home', 'Bag', 'Add Product', 'Search']}
        links={['/home', '/bag', '/add-product', '/search-results']}
        cart={true}
        burger={true}
      />
      <Box sx={{ display: 'flex', alignItems: 'baseline', mt: 4 }}>
        <Box
          sx={{
            display: { xs: 'none' },
            [theme.breakpoints.up('sm')]: {
              display: 'block',
              height: 'auto',
              maxWidth: '320px',
              width: '100%'
            }
          }}
        >
          <Box>
            <Box
              component="img"
              src="/vector.png"
              alt="vector icon"
              onClick={handleSettings}
              sx={{
                position: 'absolute',
                marginLeft: '46px',
                marginTop: '2px',
                transition: 'all 0.5s ease',
                '&:hover': {
                  transform: 'rotate(-90deg)',
                  cursor: 'pointer'
                }
              }}
            />
            <Typography
              sx={{
                fontWeight: '500',
                fontSize: '20px',
                lineHeight: '23px',
                ml: '80px',
                cursor: 'pointer'
              }}
            >
              {' '}
              Settings{' '}
            </Typography>
          </Box>
          {settings && (
            <>
              <Box
                sx={{
                  width: '320px',
                  color: '#EAECF0',
                  border: '1px solid',
                  mt: '40px'
                }}
              ></Box>
              <Box sx={{ display: 'flex', mt: '30px', ml: '46px' }}>
                <AccountCircleOutlinedIcon sx={{ color: '#6E7278' }} />
                <BarItem name="My Profile" />
              </Box>
              <Box
                onClick={() => signOut()}
                sx={{
                  display: 'flex',
                  mt: '30px',
                  ml: '46px',
                  cursor: 'pointer'
                }}
              >
                <BarItem name="Log out">
                  {' '}
                  <LogoutIcon sx={{ color: '#6E7278' }} />
                </BarItem>
              </Box>
            </>
          )}
        </Box>

        <Box
          sx={{
            [theme.breakpoints.down('sm')]: {
              maxWidth: '350px',
              width: '100%',
              ml: 'auto',
              mr: 'auto '
            },
            [theme.breakpoints.up('sm')]: {
              width: '400px'
            }
          }}
        >
          <Typography
            sx={{
              color: '#000000',
              fontFamily: 'Work Sans',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: '30px',
              lineHeight: '35px',
              ml: '10px'
            }}
          >
            {' '}
            My Profile{' '}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mt: 4,
              ml: '10px'
            }}
          >
            <Avatar
              src={`${baseURL + userData.avatar.url}`}
              sx={{ width: 100, height: 100 }}
            />
            <Box
              sx={{
                ml: '50px',
                height: '80px',
                display: 'grid'
              }}
            >
              <ChangePhotoButton />
              <Button
                sx={{
                  color: '#FFFFFF',
                  fontFamily: 'Work Sans',
                  fontSize: '11px',
                  width: '120px',
                  borderRadius: '6px',
                  height: '30px',
                  boxShadow: 'none'
                }}
                variant="contained"
              >
                Delete
              </Button>
            </Box>
          </Box>
          <Typography
            sx={{
              width: 'auto',
              height: '28px',
              color: '#5C5C5C',
              fontSize: '12px',
              fontWight: '300',
              mt: '16px',
              ml: '10px',
              [theme.breakpoints.up('sm')]: {
                maxWidth: '400px',
                width: 'auto',
                height: 'auto',
                fontSize: '15px'
              }
            }}
          >
            Welcome back! Please enter your details to log into your account.
          </Typography>

          <Form
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              paddingBlock: '1.5rem',
              gap: '1.5rem',
              maxWidth: '350px',
              marginTop: '20px'
            }}
          >
            <PrimaryInput
              label="First Name"
              name="firstName"
              placeholder={userData.firstName}
              onChange={handleInputChange}
            ></PrimaryInput>
            <PrimaryInput
              label="Last Name"
              name="lastName"
              placeholder={userData.lastName}
              onChange={handleInputChange}
            ></PrimaryInput>
            <PrimaryInput
              label="User Name"
              name="username"
              placeholder={userData.username}
              onChange={handleInputChange}
            ></PrimaryInput>
            <PrimaryInput
              label="Phone Number"
              name="phoneNumber"
              placeholder={userData.phoneNumber}
              onChange={handleInputChange}
            ></PrimaryInput>
            <Button
              sx={{
                color: 'white',
                textTransform: 'none',
                maxWidth: '436px',
                fontSize: { sx: '12px', sm: '16px' },
                width: '100%'
              }}
              variant="contained"
              onClick={handleOpen}
            >
              Save
            </Button>
            <Modal open={open} onClose={handleClose}>
              <Box sx={modalStyle}>
                <Typography id="modal-modal-title" variant="h3" component="h3">
                  Confirm Credentials
                </Typography>
                <PrimaryInput
                  isRequired={true}
                  label="You need to confirm your email and password"
                  placeholder="email"
                  name="email"
                  onChange={handleInputChange}
                  type="email"
                />
                <PrimaryInput
                  placeholder="User password"
                  name="password"
                  onChange={handleInputChange}
                  type="password"
                />
                <PrimaryButton onClick={handleSubmit}>Save</PrimaryButton>
              </Box>
            </Modal>
          </Form>
        </Box>
      </Box>
    </>
  )
}
