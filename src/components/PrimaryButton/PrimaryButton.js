import { Button } from '@mui/material'
import styles from './styles.module.css'

// Children: Button text content

const PrimaryButton = ({ children }) => {
  return (
    <Button
      type='submit'
      variant='contained'
      className={styles.button}
    >
      {children}
    </Button>
  )
}

export default PrimaryButton
