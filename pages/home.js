import { useContext } from 'react'
import { useRouter } from 'next/router'
import ProductCard from '../src/components/ProductCard/ProductCard'
import { UserContext } from '../src/context/UserContext'
import { useSession } from 'next-auth/react'
import SubHeader from '../src/components/SubHeader/SubHeader'
import { Button, Typography } from '@mui/material'

import styles from '../styles/Home.module.css'
import SideBarProfileInfo from '../src/components/SideBarProfileInfo/SideBarProfileInfo'
import HeaderLoggedIn from '../src/components/HeaderLoggedIn/HeaderLoggedIn'

export default function Home () {
  const router = useRouter()

  const { data: session } = useSession()

  const { user } = useContext(UserContext)

  if (!session?.accessToken) {
    router.push('/')
  }

  console.log(user, 'USER INFO')
  console.log('test dev branch')

  return (
    <>
      <HeaderLoggedIn pages={['Home', 'Products']} />
      <div className={styles['home-page-container']}>
        <div className={styles['home-page-container__side-bar']}>
          <SideBarProfileInfo/>
        </div>
        <main className={styles['home-page-container__main']}>
          <div className={styles['panel-container']}></div>
          <SubHeader className={styles.subheader}/>
          <div className={styles['titles-container']}>
            <Typography variant='h1'>My Produducs</Typography>
            <Button variant="contained" className={styles['titles-container__button']} > Add Product </Button>
          </div>
          <div className={styles.cards}>
            {/* this should be fetched */}
            <ProductCard productTitle="Nike AirMax 270" productPrice="150" productDescription="Women Shoes"/>
            <ProductCard productTitle="Nike AirMax 270" productPrice="150" productDescription="Women Shoes"/>
            <ProductCard productTitle="Nike AirMax 270" productPrice="150" productDescription="Women Shoes"/>
            <ProductCard productTitle="Nike AirMax 270" productPrice="150" productDescription="Women Shoes"/>
          </div>
        </main>
      </div>
    </>
  )
}
