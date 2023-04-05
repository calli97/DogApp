import React from 'react'
import styles from './SortOrder.module.css'

function SortOrder() {
  return (
    <div className={styles.container}>
      <select name="select">
        <option value="value1">Id</option>
        <option value="value2">Name</option>
        <option value="value3">Weight</option>
      </select>
    </div>
  )
}

export default SortOrder