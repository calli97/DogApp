import React from 'react'
import styles from './TemperamentsSelector.module.css'
import TemperamentPick from '../TemperamentPick/TemperamentPick'
import { useState } from 'react'
import { addTemperamentFilter } from '../../redux/features/cards/cardsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'



function TemperamentsSelector() {
  const [input, setInput] = useState('')
  const dispatch=useDispatch()
  const temperaments=useSelector(state=>state.cards.filteredBy.searchedTemperaments)

  const changeHandler=(e)=>{
    setInput(e.target.value)
  }
  const clickHandler=(e)=>{
    dispatch(addTemperamentFilter(input))
    setInput('')
  }
  
  

  return (
    <div className={styles.container}>
        <p className={styles.label}>Temperaments: </p>
        <div>
          <input type="text" className={styles.input} value={input} onChange={changeHandler}/>
          <button onClick={clickHandler}>Send</button>
        </div>
        <div className={styles.temperamentContainer}>
          {temperaments.map(el=><TemperamentPick temperament={el} key={`${el}-temp-key`}/>)}
        </div>  
    </div>
  )
}

export default TemperamentsSelector