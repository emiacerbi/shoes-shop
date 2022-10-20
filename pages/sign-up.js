import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import Form from '../src/components/Form/Form'
import PrimaryInput from '../src/components/PrimaryInput/PrimaryInput'
import PrimaryButton from '../src/components/PrimaryButton/PrimaryButton'

import styles from '../styles/SignUp.module.css'
import SignUpOverlay from '../src/components/SignUpOverlay/SignUpOverlay'

const SignUp = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true)
  return (

    <div className={styles.container}>
      <Box sx={{ paddingInline: '1.25rem', paddingBlock: '2rem' }}>
        <Typography variant="h1">Create an account</Typography>
        <Typography variant='p'>Create an account to get an easy access to your dream shopping</Typography>

        <Form onSubmit={console.log('onSubmit')}>
          <PrimaryInput label='Name' placeholder='Hayman Andres' />
          <PrimaryInput label='Email' placeholder='example@gmail.com' />
          <PrimaryInput label='Password' placeholder='at least 8 characters' />
          <PrimaryInput label='Repeat password' placeholder='at least 8 characters' />

          <label className={styles.checkbox}>
            <input type='checkbox'/>
            Remember me
          </label>

          <PrimaryButton>
            Sign In

          </PrimaryButton>

          <p className={styles.text}>
            Already have an account?
            <span className={styles.span}>
              Log in
            </span>
          </p>
        </Form>
      </Box>

      {
        isOverlayVisible && (
          <SignUpOverlay setIsOverlayVisible={setIsOverlayVisible} />
        )
      }
    </div>

  // </Layout>
  )
}

export default SignUp
