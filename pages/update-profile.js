import { Avatar, Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
// import Header from '../src/components/Header/Header'
import Heading from '../src/components/Heading/heading'
import styles from '../styles/updateProfile.module.css'
import PrimaryInput from '../src/components/PrimaryInput/PrimaryInput'

export default function UpdateProfile () {
  return (
    <>
      <div className={styles.container}>
        <Heading headingText={'My Profile'}/>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mt: 2
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
        <Typography sx={{ width: 314, height: 28, color: '#5C5C5C', fontSize: 12, fontWeight: 300, mt: 2, ml: 0.5 }}>
            Welcome back! Please enter your details to log into your account.
        </Typography>

        <form className={styles.form}>
          <PrimaryInput label='Name' placeholder={'Jane'} ></PrimaryInput>
          <PrimaryInput label='Surname'placeholder={'Meldrum'}></PrimaryInput>
          <PrimaryInput label= "Email" placeholder={'example@mail.com'}></PrimaryInput>
          <PrimaryInput label='Phone Number' placeholder={'(949 354-2574)'}></PrimaryInput>
        </form>
      </div>
    </>
  )
}
