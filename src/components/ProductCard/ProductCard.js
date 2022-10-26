import React from 'react'
import Image from 'next/image'
import styles from './styles.module.css'

export default function ProductCard ({ productTitle, productDescription, productPrice }) {
  return (
    <div className={styles['product-card-container']}>
      <Image src="/shoes.png" layout='responsive' width={150} height={180} alt="product"/>
      <div className={styles['product-card-description']}>
        <div>
          <h3 className={styles.h3}>{productTitle}</h3>
          <p className={styles.p}>{productDescription}</p>
        </div>
        <h3 className={styles.h3}>${productPrice}</h3>
      </div>
    </div>
  )
}
