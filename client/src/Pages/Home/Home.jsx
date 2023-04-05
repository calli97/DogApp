import React from 'react'
import styles from './Home.module.css'
import Cards from '../../Components/Cards/Cards'
import SideBarFilters from '../../Components/SideBarFilters/SideBarFilters'

function Home() {
  return (
    <div className={styles.page}>
        <SideBarFilters/>
        <Cards/>
    </div>
  )
}

export default Home