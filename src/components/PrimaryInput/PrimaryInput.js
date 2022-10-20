import styles from './styles.module.css'

const PrimaryInput = ({ label, placeholder }) => {
  return (
    <label className={styles.label} >
      <h3 className={styles.heading}>
        {label} <span className={styles.span}>*</span>
      </h3>
      <input
        placeholder={placeholder}
        className={`roundedInput ${styles.input}`}
      />
    </label>
  )
}

export default PrimaryInput
