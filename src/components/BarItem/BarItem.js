import styles from './styles.module.css'

export default function BarItem ({ name, num, children }) {
  return (
    <div className={styles['bar-item']}>
      {children}
      <p className={styles['bar-item__name']}>{name}</p>
      {num ? <div className={styles['bar-item__notif-num']}> <p >{num}</p> </div> : null}
    </div>
  )
}
