import { Avatar, Button } from '@mui/material'
import { Box } from '@mui/system'
// import Header from '../src/components/Header/Header'
import Heading from '../src/components/Heading/heading'
import styles from '../styles/updateProfile.module.css'

export default function UpdateProfile () {
  return (
    <>
      <div className={styles.container}>
        <Heading headingText={'My Profile'}/>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 2
        }} >
          <Avatar
            src="/profile_img.png"
            sx={{ width: 100, height: 100 }}/>
          <Box
            sx={{ width: 177, alignContent: 'space-between' }} >
            <Button variant="outlined" className={styles.button_outlined}>
                Change photo
            </Button>
            <br />
            <Button variant='contained'
              className={styles.button_contained}>
                Delete
            </Button>
          </Box>
        </Box>
      </div>
    </>
  )
}
