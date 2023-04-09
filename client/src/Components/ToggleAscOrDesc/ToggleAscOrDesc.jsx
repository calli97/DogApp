import React from 'react'
import styles from './ToggleAscOrDesc.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { orderSort } from '../../redux/features/cards/cardsSlice'


function ToggleAscOrDesc() {
  const checked=useSelector(state=>state.cards.orderBy.asc)
  const dispatch=useDispatch()
  const changeHandler=(e)=>{
    //true ===desc
    dispatch(orderSort(!e.target.checked))
  }
  return (
    <div className={styles.toggleButtonCover}>
        <div className={`${styles.button} ${styles.r} ${styles.buttonStyle}`} >
          <input type="checkbox" className={styles.checkbox} onChange={changeHandler} checked={!checked}/>
          <div className={styles.knobs}></div>
          <div className={styles.layer}></div>
        </div>
    </div>
  )
}

export default ToggleAscOrDesc