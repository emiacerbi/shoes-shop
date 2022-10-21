import React from 'react'
import Image from 'next/image'
import styles from './styles.module.css'

export default function ProductCard ({ productTitle, productDescription, productPrice }) {
  return (
    <div className={styles['product-card-container']}>
      <Image src="/shoes.png" width={150} height={150} alt="product"/>
      <div className={styles['product-card-description']}>
        <div className={styles['product-card-description__titles']}>
          <h1>{productTitle}</h1>
          <p className={styles.p}>{productDescription}</p>
        </div>
        <h1 className={styles['product-card-description__price']}>${productPrice}</h1>
      </div>
    </div>
  )
}
