import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Form from '../src/components/Form/Form'
import PrimaryInput from '../src/components/PrimaryInput/PrimaryInput'
import PrimaryButton from '../src/components/PrimaryButton/PrimaryButton'

import styles from '../styles/SignIn.module.css'
import Link from 'next/link'
import SignInOverlay from '../src/components/SignInOverlay/SignInOverlay'

const SignIn = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true)
  const [mobileWidth, setMobileWidth] = useState()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setMobileWidth(window.innerWidth)
    }
  }, [mobileWidth])

  return (

    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <Typography variant="h1">Welcome back</Typography>
        <Typography variant='p'>Welcome back! Please enter your details to log into your account.</Typography>

        <Form onSubmit={console.log('onSubmit')}>
          {/* <PrimaryInput label='Name' placeholder='Hayman Andres' /> */}
          <PrimaryInput label='Email' placeholder='example@gmail.com' />
          <PrimaryInput label='Password' placeholder='at least 8 characters' />
          {/* <PrimaryInput label='Repeat password' placeholder='at least 8 characters' /> */}

          <div className={styles.flex}>
            <label className={styles.checkbox}>
              <input type='checkbox'/>
            Remember me
            </label>

            <Link href='forgot-password' ><a className={styles.forgotPassword}>Forgot password?</a></Link>
          </div>

          <PrimaryButton>
            Sign In
          </PrimaryButton>

          <p className={styles.text}>
            {'Don\'t'} have an account?
            <span className={styles.span}>
              Sign up
            </span>
          </p>
        </Form>
      </div>

      <div className={styles.imageContainer}></div>
      {
        isOverlayVisible && mobileWidth < 380 && (
          <SignInOverlay setIsOverlayVisible={setIsOverlayVisible} />
        )
      }

    </div>

  )
}

export default SignIn
