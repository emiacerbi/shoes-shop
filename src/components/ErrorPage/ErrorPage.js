import Link from 'next/link'
import React from 'react'
import styles from './styles.module.css'

const ErrorPage = ({ title, description, image, btnLeft, btnRight }) => {
  return (
    <div className={styles.error}>

      <div className={styles.error__description__wrapper}>

        <div className={styles.error__text__box}>
          <h1 className={styles.error__description__title}>{title}</h1>
          <p className={styles.error__description__message}>{description}</p>

          <div className={styles.error__btns}>
            <Link href='/'>
              <a className={`${styles.error__btn} ${styles.error__btn__notColored}`}>
                {btnLeft}
              </a>
            </Link>
            <Link href='/'>
              <a className={`${styles.error__btn} ${styles.error__btn__colored}`}>
                {btnLeft}
              </a>
            </Link>
          </div>
        </div>

      </div>

      <div className={styles.error__img__overlay}></div>
      <div className={styles.error__img}></div>

    </div>
  )
}

export default ErrorPage
