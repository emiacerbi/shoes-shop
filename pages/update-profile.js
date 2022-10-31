import { Avatar, Button, FormControl, Typography } from '@mui/material'
import { Box } from '@mui/system'
// import styles from '../styles/updateProfile.module.css'
import PrimaryInput from '../src/components/PrimaryInput/PrimaryInput'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined'
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined'
import { useState } from 'react'
import HeaderLoggedIn from '../src/components/HeaderLoggedIn/HeaderLoggedIn'
import NavBarItem from '../src/components/NavBarItem/NavBarItem'
// import theme from '../styles/theme'
export default function UpdateProfile () {
  const [settings, setSettings] = useState(true)
  const pages = ['Home', 'For women', 'For Men', 'Accesories', 'Sale']
  const links = ['/', '/for-women', '/for-men', '/accesories', '/sale']

  function handleSettings () {
    return setSettings(!settings)
  }

  return (
    <>
      <HeaderLoggedIn pages={pages} links={links} cart={true} burger={true}/>
      <Box sx={{ display: 'flex', alignItems: 'baseline', mt: 4 }} >
        <Box
          sx={{
            display: { xs: 'none' },
            '@media (min-width: 600px)': {
              display: 'block',
              height: 'auto',
              maxWidth: '320px',
              width: '100%'
            }
          }}
          // className={styles.container_settings}
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
            {/* <img src="/vector.png" alt="vector icon" className={styles.vector} onClick={handleSettings}/> */}
            <Typography sx={{
              fontWeight: '500',
              fontSize: '20px',
              lineHeight: '23px',
              ml: '80px',
              cursor: 'pointer'
            }}
            // className={styles.settings_text}
            > Settings </Typography>
          </Box>
          {settings && (
            <>
              <Box sx={{
                width: '320px',
                color: '#EAECF0',
                border: '1px solid',
                mt: '40px'
              }}
              // className={styles.line}
              ></Box>
              <Box sx={{ display: 'flex', mt: '30px', ml: '46px' }}
              // className={styles.myProfile}
              >
                <AccountCircleOutlinedIcon sx={{ color: '#6E7278' }}/>
                <NavBarItem name="My Profile"/>
                {/* <Typography
                  sx={{
                    ml: '15px',
                    color: '#000000',
                    transition: 'all 0.5s ease',
                    fontWeight: '500',
                    fontSize: '16px',
                    lineHeight: '19px'
                  }} */}
                {/* // className={styles.myProfile_text} */}
                {/* > */}
                {/* My Profile</Typography> */}
              </Box>

              <Box sx={{ display: 'flex', mt: '30px', ml: '46px' }}>
                <DashboardCustomizeOutlinedIcon sx={{ color: '#6E7278' }}/>
                <NavBarItem name="Preferences"/>
                {/* <Typography className={styles.preferences_text}>Preferences</Typography> */}
              </Box>

              <Box sx={{ display: 'flex', mt: '30px', ml: '46px' }}>
                <GppGoodOutlinedIcon sx={{ color: '#6E7278' }}/>
                <NavBarItem name="Security"/>

                {/* <Typography className={styles.security_text}>Security</Typography> */}
              </Box>

              <Box sx={{ display: 'flex', mt: '30px', ml: '46px' }}>
                <AccountBalanceWalletOutlinedIcon sx={{ color: '#6E7278' }}/>
                <NavBarItem name="My Wallet"/>
                {/* <Typography className={styles.myWallet_text}>My Wallet</Typography> */}
              </Box>
            </>
          )}

        </Box>

        <Box sx={{
          '@media (max-width: 600px)': {
            maxWidth: '350px',
            width: '100%',
            ml: 'auto',
            mr: 'auto '
          },
          '@media (min-width: 601px)': {
            width: '400px'
            // width: '100%'
          }
        }}
        // className={styles.container_profile}
        >
          <Typography sx={{
            color: '#000000',
            fontFamily: 'Work Sans',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '30px',
            lineHeight: '35px',
            ml: '10px'
          }}
          // className={styles.heading}
          > My Profile </Typography>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            // justifyContent: 'space-between',
            mt: 4,
            ml: '10px'
          }} >
            <Avatar src="/profile_img.png" sx={{ width: 100, height: 100 }}/>
            <Box sx={{
              ml: '50px',
              height: '80px',
              display: 'grid'
            }} >
              <Button variant="outlined"
                sx={{
                  color: '#FE645E',
                  fontFamily: 'Work Sans',
                  fontSize: '11px',
                  width: '120px',
                  borderRadius: '6px',
                  height: '35px',
                  mb: '16px'
                }}
                // className={styles.button_outlined}
              >
                Change photo
              </Button>
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
                variant='contained'
                // className={styles.button_contained}
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
              '@media (min-width: 600px)': {
                maxWidth: '400px',
                width: 'auto',
                height: 'auto',
                fontSize: '15px'
              }
            }}
            // className={styles.welcomeBack_text}
          >
            Welcome back! Please enter your details to log into your account.
          </Typography>

          <FormControl
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              paddingBlock: '1.5rem',
              gap: '1.5rem',
              maxWidth: '350px',
              /* width: 100%; */
              marginTop: '20px'
            }}
            // className={styles.form}
          >
            <PrimaryInput label='Name' placeholder={'Jane'} ></PrimaryInput>
            <PrimaryInput label='Surname'placeholder={'Meldrum'}></PrimaryInput>
            <PrimaryInput label= "Email" placeholder={'example@mail.com'}></PrimaryInput>
            <PrimaryInput label='Phone Number' placeholder={'(949) 354-2574)'}></PrimaryInput>
          </FormControl>
        </Box>
      </Box>
    </>
  )
}
