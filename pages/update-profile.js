import { Avatar, Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import styles from '../styles/updateProfile.module.css'
import PrimaryInput from '../src/components/PrimaryInput/PrimaryInput'
import Header from '../src/components/Header/Header'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined'
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined'
import { useState } from 'react'
export default function UpdateProfile () {
  const [settings, setSettings] = useState(true)

  function handleSettings () {
    return setSettings(!settings)
  }
  return (
    <>
      <Header/>
      <Box sx={{ display: 'flex', alignItems: 'baseline', mt: 12.5 }} >
        <div className={styles.container_settings}>
          {settings
            ? (
              <Box >
                <img src="/vector.png" alt="vector icon" className={styles.vector} onClick={handleSettings}/>
                <Typography className={styles.settings_text}>Settings</Typography>
              </Box>
            )
            : (
              <>
                <Box >
                  <img src="/vector.png" alt="vector icon" className={styles.vector} onClick={handleSettings}/>
                  <Typography className={styles.settings_text}>Settings</Typography>
                </Box>
                <div className={styles.line}></div>
                <Box className={styles.myProfile}>
                  <AccountCircleOutlinedIcon sx={{ color: '#6E7278' }}/>
                  <Typography className={styles.myProfile_text}>My Profile</Typography>
                </Box>

                <Box className={styles.myProfile}>
                  <DashboardCustomizeOutlinedIcon sx={{ color: '#6E7278' }}/>
                  <Typography className={styles.preferences_text}>Preferences</Typography>
                </Box>

                <Box className={styles.myProfile}>
                  <GppGoodOutlinedIcon sx={{ color: '#6E7278' }}/>
                  <Typography className={styles.security_text}>Security</Typography>
                </Box>

                <Box className={styles.myProfile}>
                  <AccountBalanceWalletOutlinedIcon sx={{ color: '#6E7278' }}/>
                  <Typography className={styles.myWallet_text}>My Wallet</Typography>
                </Box>
              </>
            )}
        </div>

        <div className={styles.container_profile}>
          <p className={styles.heading}> My Profile</p>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mt: 4
          }} >
            <Avatar src="/profile_img.png" sx={{ width: 100, height: 100 }}/>
            <Box sx={{ ml: 4 }} >
              <Button variant="outlined" className={styles.button_outlined}>
                Change photo
              </Button>
              <Button variant='contained' className={styles.button_contained}>
                Delete
              </Button>
            </Box>
          </Box>
          <Typography className={styles.welcomeBack_text} >
            Welcome back! Please enter your details to log into your account.
          </Typography>

          <form className={styles.form}>
            <PrimaryInput label='Name' placeholder={'Jane'} ></PrimaryInput>
            <PrimaryInput label='Surname'placeholder={'Meldrum'}></PrimaryInput>
            <PrimaryInput label= "Email" placeholder={'example@mail.com'}></PrimaryInput>
            <PrimaryInput label='Phone Number' placeholder={'(949 354-2574)'}></PrimaryInput>
          </form>
        </div>
      </Box>
    </>
  )
}
