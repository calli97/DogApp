import React from 'react'
import styles from './TemperamentsSelector.module.css'

function TemperamentsSelector() {
  return (
    <div className={styles.container}>
        <p className={styles.label}>Temperaments: </p>
        <input type="text" className={styles.input}/>
    </div>
  )
}

export default TemperamentsSelector