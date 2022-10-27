import { Button } from '@mui/material'
import styles from './styles.module.css'

// Children: Button text content

const PrimaryButton = ({ children, onClick, maxWidth = '436px' }) => {
  return (
    <Button
      type='submit'
      onClick={onClick}
      variant='contained'
      className={styles.button}
      sx={{ color: 'white', textTransform: 'none', maxWidth }}
    >
      {children}
    </Button>
  )
}

export default PrimaryButton
