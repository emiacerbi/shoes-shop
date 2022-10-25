import styles from './styles.module.css'

export default function SideBarItem ({ name, notifNumber, icon }) {
  return (

    <div className={styles['side-bar-item']}>
      <img src={icon} className={styles['side-bar-item__icon']} alt = ''/>
      <p className={styles['side-bar-item__name']}>{name}</p>
      <div className={styles['side-bar-item__notif-num']}>
        {notifNumber ? <p>{notifNumber}</p> : null}
      </div>
    </div>
  )
}
