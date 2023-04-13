import React from 'react'
import styles from './Navbar.module.css'
import SearchBar from '../SearchBar/SearchBar'
import { NavLink } from 'react-router-dom';
import doge from '../../Images/doge.png.png'

function Navbar() {
  return (
    <div className={styles.nav}>
      <div className={styles.linkContainer}>
        <NavLink to={'/'} >
          <img src={doge} 
          alt="doge"
          className={styles.imageLink}/>
        </NavLink>
        <NavLink to={'home'} className={`${styles.link} ${styles.buttonLink}`}>Home</NavLink>
        {/* <NavLink to={'about'} className={`${styles.link} ${styles.buttonLink}`}>About</NavLink> */}
        <NavLink to={'form'} className={`${styles.link} ${styles.buttonLink}`}>Create Dog</NavLink>
      </div>
      <SearchBar/>
    </div>
  )
}

export default Navbar