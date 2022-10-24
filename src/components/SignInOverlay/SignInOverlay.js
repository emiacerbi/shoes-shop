import PrimaryButton from '../PrimaryButton/PrimaryButton'
import styles from './styles.module.css'

const SignInOverlay = ({ setIsOverlayVisible }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.imageContainer}>
        <h1 className={styles.heading}>Welcome to Wellrun</h1>

      </div>
      <div className={styles.background}></div>

      <div className={styles.buttons}>
        <PrimaryButton onClick={() => setIsOverlayVisible(false)}>
          Sign In
        </PrimaryButton>

        <p className={styles.text}>
          {'Don\'t'} have an account?
          <span className={styles.span}>
              Sign up
          </span>
        </p>

      </div>

      <div className={styles.blur}></div>
    </div>
  )
}

export default SignInOverlay
