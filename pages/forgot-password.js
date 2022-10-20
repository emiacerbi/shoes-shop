import Form from '../src/components/Form/Form'
import PrimaryButton from '../src/components/PrimaryButton/PrimaryButton'
import PrimaryInput from '../src/components/PrimaryInput/PrimaryInput'
import Heading from '../src/components/Heading/heading'
import StyledText from '../src/components/StyledText/StyledText'
import Header from '../src/components/Header/Header'
import Link from 'next/link'

import styles from '../styles/forgotpassword.module.css'

export default function ForgotPassword () {
  return (
    <div className={styles['forgot-password-page']}>
      <Header className={styles['forgot-password-header']} />
      <main className={styles['forgot-password-main']}>
        <Heading headingText='Forgot Password?' />

        <StyledText text='Don’t worry, we’ll send you reset instructions.' />

        <Form onSubmit={(e) => e.preventDefault()}>
          <PrimaryInput
            type='email'
            label='Email'
            placeholder='example@mail.com'
          />
          <PrimaryButton type='submit'>Reset password</PrimaryButton>
        </Form>

        <Link href='/index.js'>
          <a className={styles['forgot-password__go-back']}>Back to log in</a>
        </Link>
      </main>
      <aside className={styles['forgot-password-aside']}>
        <div>
          <img
            src='/shoes.png'
            alt='shoe pic'
            className={styles['forgot-password-aside__image']}
          />
        </div>
      </aside>
    </div>
  )
}
