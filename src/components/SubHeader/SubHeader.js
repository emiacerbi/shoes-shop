import { Avatar } from '@mui/material'
import styles from './styles.module.css'

export default function SubHeader () {
  return (
    <div className={styles['sub-header-container']}>
      <Avatar src='/jane-meldrum.png' className={styles.avatar} sx={{ width: 60, height: 60, border: '1px solid #FFFFFF' }}/>
      <div className={styles['sub-header-info']}>
        <h2 className={styles.h2}>Jane Meldrum</h2>
        <p className={styles.p}>1374 bonus points</p>
      </div>
    </div>
  )
}
