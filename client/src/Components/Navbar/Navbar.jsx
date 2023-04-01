import React from 'react'
import styles from './Navbar.module.css'
import SearchBar from '../SearchBar/SearchBar'
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className={styles.nav}>
      <div className={styles.linkContainer}>
        <NavLink to={'home'} className={`${styles.link} ${styles.buttonLink}`}>Dogs App</NavLink>
        <NavLink to={'home'} className={`${styles.link} ${styles.buttonLink}`}>Home</NavLink>
        <NavLink to={'about'} className={`${styles.link} ${styles.buttonLink}`}>About</NavLink>
        <NavLink to={'#'} className={`${styles.link} ${styles.buttonLink}`}>Advance Search</NavLink>
      </div>
      <SearchBar/>
    </div>
  )
}

export default Navbar