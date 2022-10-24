import { Avatar } from '@mui/material'
import styles from './styles.module.css'

export default function SubHeader () {
  return (
    <div className={styles['sub-header-container']}>
      <Avatar sx={{ width: 60, height: 60, border: '2px solid #FFFFFF' }}/>
      <div className={styles['sub-header-info']}>
        <h2 className={styles.h2}>User Name</h2>
        <p className={styles.p}>123124 bonus points</p>
      </div>
    </div>
  )
}
