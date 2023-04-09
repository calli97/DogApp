import React from 'react'
import styles from './OriginFilter.module.css'
import { filterOrigin } from '../../redux/features/cards/cardsSlice'
import { useDispatch } from 'react-redux'

function OriginFilter() {
  const dispatch=useDispatch()
  const clickHandle=(e)=>{
    dispatch(filterOrigin(e.target.innerHTML))
  }
  return (
    <div className={styles.buttonContainer}>
        <button className={styles.firstButton} onClick={clickHandle}>All</button>
        <button className={styles.middleButton} onClick={clickHandle}>API</button>
        <button className={styles.lastButton} onClick={clickHandle}>DB</button>
    </div>
  )
}

export default OriginFilter