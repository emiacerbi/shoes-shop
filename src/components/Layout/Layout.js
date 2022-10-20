import { Container } from '@mui/system'
import Image from 'next/image'

import styles from './style.module.css'

const Layout = ({ children }) => {
  return (
    <Container
      className={styles.container}
    >
      <div className={styles.logo_wrapper}>
        <Image src='/logo.png' alt='asd' width={40} height={30} />
      </div>

      <div className={styles.divider}></div>
      {children}
    </Container>
  )
}

export default Layout
