import React from 'react'
import error404Image from '../public/error404.png'
import ErrorPage from '../src/components/ErrorPage/ErrorPage'
import HeaderLoggedIn from '../src/components/HeaderLoggedIn/HeaderLoggedIn'

import styles from '../styles/404.module.css'

export default function Error404 () {
  return (

    <div className={styles.container}>
      <div className={styles.header}>
        <HeaderLoggedIn pages={['Home', 'For women', 'For men', 'Accesories', 'Sale']} />
      </div>

      <ErrorPage
        title="Error 404"
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna"
        image={error404Image}
        btnLeft="Go back"
        btnRight="Home"
      />
    </div>
  )
}
