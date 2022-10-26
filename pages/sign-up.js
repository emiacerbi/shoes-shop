import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Form from '../src/components/Form/Form'
import PrimaryInput from '../src/components/PrimaryInput/PrimaryInput'
import PrimaryButton from '../src/components/PrimaryButton/PrimaryButton'

import styles from '../styles/SignUp.module.css'
import SignUpOverlay from '../src/components/SignUpOverlay/SignUpOverlay'
import Star from '../src/components/Star/Star'
import Wedge from '../src/components/Wedge/Wedge'
import Link from 'next/link'
import useSignUpForm from '../src/hooks/useSignUpForm'
import HeaderBeforeLogin from '../src/components/Header/Header'

const SignUp = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true)
  const [mobileWidth, setMobileWidth] = useState()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setMobileWidth(window.innerWidth)
    }
  }, [mobileWidth])

  const { handleSubmit, handleInputChange } = useSignUpForm()

  return (

    <div className={styles.container}>
      <div className={styles.leftContainer}>

        <HeaderBeforeLogin />

        <div className={styles.formWrapper}>
          <Typography variant="h1">Create an account</Typography>
          <Typography variant='p'>Create an account to get an easy access to your dream shopping</Typography>

          <Form onSubmit={handleSubmit}>
            <PrimaryInput label='Name' placeholder='Hayman Andres' name='name' onChange={handleInputChange} />
            <PrimaryInput label='Email' placeholder='example@gmail.com' name='email' onChange={handleInputChange} />
            <PrimaryInput label='Password' placeholder='at least 8 characters' name='password' onChange={handleInputChange} />
            <PrimaryInput label='Repeat password' placeholder='at least 8 characters' name='repeatedPassword' onChange={handleInputChange} />

            <label className={styles.checkbox}>
              <input type='checkbox'/>
            Remember me
            </label>

            <PrimaryButton>
              Sign up
            </PrimaryButton>

            <p className={styles.text}>
              Already have an account?
              <span className={styles.span}>
                <Link href='/' className={styles.span}>
                  <a>
                  Log in
                  </a>
                </Link>
              </span>
            </p>
          </Form>
        </div>
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
