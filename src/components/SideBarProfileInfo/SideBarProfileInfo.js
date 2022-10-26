import { Avatar } from '@mui/material'
import styles from './styles.module.css'

export default function ProfileInfoSideBar () {
  return (
    <div className={styles['profile-info-container']}>
      <Avatar className={styles.avatar} sx={{ width: 64, height: 64, border: '2px solid #FFFFFF' }}/>
      <div className={styles['profile-info-text']}>
        <p className={styles.p}>Welcome</p>
        <h2 className={styles.h2}>Julian Oviedo</h2>
      </div>
    </div>
  )
}
