import React from 'react'
import styles from './OriginFilter.module.css'

function OriginFilter() {
  return (
    <div className={styles.buttonContainer}>
        <button className={styles.firstButton}>All</button>
        <button className={styles.middleButton}>API</button>
        <button className={styles.lastButton}>DB</button>
    </div>
  )
}

export default OriginFilter