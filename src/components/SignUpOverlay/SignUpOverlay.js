import ColoredDash from '../ColoredDash/ColoredDash'
import PrimaryButton from '../PrimaryButton/PrimaryButton'
import SecondaryButton from '../SecondaryButton.js/SecondaryButton'
import styles from './styles.module.css'

const SignUpOverlay = ({ setIsOverlayVisible }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.imageContainer}>
        <h1 className={styles.heading}>Welcome to Wellrun</h1>
        <div style={{ display: 'flex', gap: '.5rem' }}>
          <ColoredDash />
          <ColoredDash opacity='.3' />
          <ColoredDash opacity='.3' />
          <ColoredDash opacity='.3' />
        </div>
      </div>
      <div className={styles.background}></div>

      <div className={styles.buttons}>
        <SecondaryButton onClick={() => setIsOverlayVisible(false)}>
          Sign up
        </SecondaryButton>

        <PrimaryButton onClick={() => setIsOverlayVisible(false)}>
          Sign In
        </PrimaryButton>

      </div>

    </div>
  )
}

export default SignUpOverlay
