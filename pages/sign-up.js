import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Form from '../src/components/Form/Form'
import PrimaryInput from '../src/components/PrimaryInput/PrimaryInput'
import PrimaryButton from '../src/components/PrimaryButton/PrimaryButton'

import styles from '../styles/SignUp.module.css'
import SignUpOverlay from '../src/components/SignUpOverlay/SignUpOverlay'
import Star from '../src/components/Star/Star'
import Wedge from '../src/components/Wedge/Wedge'

const SignUp = () => {
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
      </div>

      <div className={styles.imageContainer}>
        <div className={styles.blockquoteContainer}>

        </div>

        <blockquote className={styles.blockquote}>
          <button className={styles.arrowRight}><Wedge /></button>
          <button className={styles.arrowLeft}><Wedge /></button>
            &quot;Lorem Ipsum is a really great company because the team is passionate about the projects they produce, the people they work with, the quality of the work they do.&quot;`
        </blockquote>
        <p className={styles.quoteAuthor}>John Stone <Star /><Star /><Star /><Star /><Star /></p>
        <p className={styles.quoteLocation}>Ukraine, Chernivtsi</p>
      </div>

      {
        isOverlayVisible && mobileWidth < 380 && (
          <SignUpOverlay setIsOverlayVisible={setIsOverlayVisible} />
        )
      }
    </div>

  )
}

export default SignUp
