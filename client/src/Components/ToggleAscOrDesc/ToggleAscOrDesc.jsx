import React from 'react'
import styles from './ToggleAscOrDesc.module.css'

function ToggleAscOrDesc() {
  return (
    <div className={styles.toggleButtonCover}>
      {/* <div className={styles.buttonCover}> */}
        <div className={`${styles.button} ${styles.r} ${styles.buttonStyle}`} >
          <input type="checkbox" className={styles.checkbox} />
          <div className={styles.knobs}></div>
          <div className={styles.layer}></div>
        </div>
      {/* </div> */}
    </div>
  )
}

export default ToggleAscOrDesc