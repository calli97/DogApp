import React from 'react'
import styles from './TemperamentPick.module.css'

function TemperamentPick() {
  return (
    <button className={styles.button}>
        Angry <span className={styles.span}>X</span>
    </button>
  )
}

export default TemperamentPick