import styles from './styles.module.css'

const PrimaryInput = ({ label, placeholder, onChange, name, type }) => {
  return (
    <label className={styles.label} >
      <h3 className={styles.heading}>
        {label} <span className={styles.span}>*</span>
      </h3>
      <input
        placeholder={placeholder}
        className={`roundedInput ${styles.input}`}
        onChange={onChange}
        name={name}
        type={type}
        required
      />
    </label>
  )
}

export default PrimaryInput
