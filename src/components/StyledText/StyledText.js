import React from 'react'
import styles from './styles.module.css'

export default function StyledText ({ text }) {
  return <p className={styles.text}>{text}</p>
}
