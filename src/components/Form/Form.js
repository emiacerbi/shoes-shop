import styles from './style.module.css'

const Form = ({ onSubmit, children }) => {
  return (
    <form
      className={styles.form}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  )
}

export default Form
