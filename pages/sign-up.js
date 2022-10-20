import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Form from '../src/components/Form/Form'
import Layout from '../src/components/Layout/Layout'
import PrimaryInput from '../src/components/PrimaryInput/PrimaryInput'
import PrimaryButton from '../src/components/PrimaryButton/PrimaryButton'

import styles from '../styles/SignUp.module.css'

const SignUp = () => {
  return (

    <Layout>
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
            Sign Up
          </PrimaryButton>

          <p className={styles.text}>
            Already have an account?
            <span className={styles.span}>
              Log in
            </span>
          </p>
        </Form>
      </Box>
    </Layout>
  )
}

export default SignUp
