import React from 'react'
import styles from './SearchBar.module.css'

function SearchBar() {
  return (
    <div>
      <form>
        <input type="text" className={styles.input}/>
        <input type="submit" value='Buscar' className={styles.button}/>
      </form>
    </div>
  )
}

export default SearchBar