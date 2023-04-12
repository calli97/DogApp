import React from 'react'
import styles from './TemperamentPick.module.css'
import { deleteTemperamentFilter } from '../../redux/features/cards/cardsSlice'
import { useDispatch } from 'react-redux'

function TemperamentPick({temperament}) {
  const dispatch=useDispatch()

  const clickHandler=()=>{
    dispatch(deleteTemperamentFilter(temperament))
  }
  return (
    <button className={styles.button} onClick={clickHandler}>
        {temperament.name} <span className={styles.span}>X</span>
    </button>
  )
}

export default TemperamentPick