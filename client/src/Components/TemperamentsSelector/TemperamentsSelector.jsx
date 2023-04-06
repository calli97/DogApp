import React from 'react'
import styles from './TemperamentsSelector.module.css'
import TemperamentPick from '../TemperamentPick/TemperamentPick'



function TemperamentsSelector() {
  return (
    <div className={styles.container}>
        <p className={styles.label}>Temperaments: </p>
        <input type="text" className={styles.input}/>
        <div className={styles.temperamentContainer}>
          <TemperamentPick/>
        </div>  
    </div>
  )
}

export default TemperamentsSelector