import styles from './styles.module.css'

export default function SideBarItem ({ name, notifNumber, children }) {
  return (
    <div className={styles['side-bar-item']}>
      {children}
      <p className={styles['side-bar-item__name']}>{name}</p>
      {notifNumber ? <div className={styles['side-bar-item__notif-num']}> <p >{notifNumber}</p> </div> : null}
    </div>
  )
}
