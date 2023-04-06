import React from 'react'
import styles from './PageIndex.module.css'
import { useDispatch } from 'react-redux'
import { changePage } from '../../redux/features/cards/cardsSlice'

function PageIndex({index}) {
    const dispatch=useDispatch()
    const handleClick=()=>{
        dispatch(changePage(index))
    }
  return (
    <div className={styles.button} onClick={handleClick}>
        {index}
    </div>
  )
}

export default PageIndex