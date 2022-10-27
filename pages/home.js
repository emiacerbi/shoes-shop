import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import ProductCard from '../src/components/ProductCard/ProductCard'
import { UserContext } from '../src/context/UserContext'
import { useSession } from 'next-auth/react'
import SubHeader from '../src/components/SubHeader/SubHeader'
import { Typography } from '@mui/material'

import styles from '../styles/Home.module.css'
import SideBarProfileInfo from '../src/components/SideBarProfileInfo/SideBarProfileInfo'
import HeaderLoggedIn from '../src/components/HeaderLoggedIn/HeaderLoggedIn'
import PrimaryButton from '../src/components/PrimaryButton/PrimaryButton'

export default function Home () {
  const router = useRouter()

  const { data: session } = useSession()

  const { user } = useContext(UserContext)

  useEffect(() => {
    if (!session?.accessToken) {
      router.push('/')
    }
  }, [router, session?.accessToken])

  console.log(user, 'USER INFO')

  return (
    <>
      <HeaderLoggedIn pages={['Home', 'Products']} burger={true} links={['Test1', 'Test2']}/>
      <div className={styles['home-page-container']}>
        <div className={styles['home-page-container__side-bar']}>
          <SideBarProfileInfo/>

        </div>
        <main className={styles['home-page-container__main']}>
          <div className={styles['panel-container']}></div>
          <SubHeader className={styles.subheader}/>
          <div className={styles['titles-container']}>
            <Typography variant='h1'>My Products</Typography>
            {/* <Button variant="contained" className={styles['titles-container__button']} > Add Product </Button> */}
            <PrimaryButton maxWidth='152px'>Add Products</PrimaryButton>
          </div>
          <div className={styles.cards}>
            <ProductCard image={'/shoes.png'} productTitle="Nike AirMax 270" productPrice="160" productDescription="Women's Shoes"/>
            <ProductCard image={'/airmax-270.png'} productTitle="Nike AirMax 90" productPrice="140" productDescription="Men's Shoes"/>
            <ProductCard image={'/air-force.png'} productTitle="Nike Air Force 1 '07 SE" productPrice="110" productDescription="Women's Shoes"/>
            <ProductCard image={'/air-zoom-pegasus.png'} productTitle="Nike Air Zoom Pegasus" productPrice="120" productDescription="Men's Shoes"/>
          </div>
        </main>
      </div>
    </>
  )
}
