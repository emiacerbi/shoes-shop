import Form from '../src/components/Form/Form'
import PrimaryButton from '../src/components/PrimaryButton/PrimaryButton'
import PrimaryInput from '../src/components/PrimaryInput/PrimaryInput'
import Header from '../src/components/Header/Header'
import Link from 'next/link'
import { Typography } from '@mui/material'

import styles from '../styles/ForgotPassword.module.css'

export default function ForgotPassword () {
  return (
    <div className={styles['forgot-password-page']}>
      <div className={styles.leftContainer}>
        <Header className={styles['forgot-password-header']} />
        <main className={styles['forgot-password-main']}>
          <Typography variant='h1'>Forgot Password?</Typography>
          <Typography variant='p'> Don’t worry, we’ll send you reset instructions. </Typography>

          <Form onSubmit={(e) => console.log('form submitted') || e.preventDefault()} className={ styles.form} > { /* change onSubmit later */}
            <PrimaryInput
              type='email'
              label='Email'
              placeholder='example@mail.com'
            />
            <PrimaryButton type='submit'>Reset password</PrimaryButton>
          </Form>

          <Link href='/'>
            <a className={styles['forgot-password__go-back']}>Back to log in</a>
          </Link>
        </main>
      </div>
      <div className={styles.rightContainer}></div>
    </div>
  )
}
