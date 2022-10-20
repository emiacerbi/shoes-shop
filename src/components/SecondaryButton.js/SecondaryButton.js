import styles from './styles.module.css'

const SecondaryButton = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  )
}

export default SecondaryButton
