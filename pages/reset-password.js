import Form from '../src/components/Form/Form'
import PrimaryButton from '../src/components/PrimaryButton/PrimaryButton'
import PrimaryInput from '../src/components/PrimaryInput/PrimaryInput'
import Heading from '../src/components/Heading/heading'
import StyledText from '../src/components/StyledText/StyledText'
import Header from '../src/components/Header/Header'
import Link from 'next/link'

import styles from '../styles/ResetPassword.module.css'

export default function ResetPassword () {
  return (
    <div className={styles['reset-password-page']}>
      <Header className={styles['reset-password-header']} />
      <main className={styles['reset-password-main']}>
        <Heading headingText='Reset password' />

        <StyledText text='Please create new password here.' />

        <Form onSubmit={(e) => console.log('form submitted') || e.preventDefault()} className={ styles.form} > { /* change onSubmit later */}
          <PrimaryInput
            type='password'
            label='Password'
            placeholder='at least 8 characters'
          />
          <PrimaryInput
            type='password'
            label='Confirm password'
            placeholder='at least 8 characters'
          />
          <PrimaryButton type='submit'>Reset password</PrimaryButton>
        </Form>

        <Link href='/'>
          <a className={styles['reset-password__go-back']}>Back to log in</a>
        </Link>
      </main>
      <aside className={styles['reset-password-aside']}>
        <img
          src='/shoes.png'
          alt='shoe pic'
          className={styles['reset-password-aside__image']}
        />
      </aside>
    </div>
  )
}
