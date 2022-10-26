import React from 'react'
import styles from './styles.module.css'

const ErrorPage = ({ title, description, image, btnLeft, btnRight }) => {
  return (
    <div className={styles.error}>

      <div className={styles.error__description}>
        <div className={styles.error__description__wrapper}>

          <h1 className={styles.error__description__title}>{title}</h1>
          <p className={styles.error__description__message}>{description}</p>

          <div className={styles.error__btns}>
            <button className={`${styles.error__btn} ${styles.error__btn__notColored}`}>{btnLeft}</button>
            <button className={`${styles.error__btn} ${styles.error__btn__colored}`}>{btnRight}</button>
          </div>

        </div>

      </div>

      <div className={styles.error__img}>
        <img src={image.src} alt="image-error" className={styles.error_img}/>
      </div>

    </div>
  )
}

export default ErrorPage
