import { Typography } from '@mui/material'
import Header from '../src/components/Header/Header'
import PrimaryButton from '../src/components/PrimaryButton/PrimaryButton'

import styles from '../styles/error500.module.css'

export default function Custom500 () {
  return (
    <>
      <div className={styles.header}>
        <Header></Header>
      </div>
      <main className= {styles['error-500']}>
        <section>
          <Typography className= {styles['error-500__text']} variant='h1'>Oh snap!</Typography>
          <Typography className= {styles['error-500__text']} variant='p'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh  minim veniam.</Typography>
        </section>
        <div className= {styles['error-500__button']}>
          <PrimaryButton>Back Home</PrimaryButton>
        </div>
      </main>
    </>
  )
}
