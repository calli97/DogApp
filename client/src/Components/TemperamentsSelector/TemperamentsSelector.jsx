import React from 'react'
import styles from './TemperamentsSelector.module.css'
import TemperamentPick from '../TemperamentPick/TemperamentPick'
import { useState } from 'react'
import { addTemperamentFilter } from '../../redux/features/cards/cardsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import SearchedTemperaments from '../SearchedTemperaments/SearchedTemperaments'



function TemperamentsSelector() {
  const [input, setInput] = useState('')
  const dispatch=useDispatch()
  const temperaments=useSelector(state=>state.cards.filteredBy.searchedTemperaments)
  const [allTemperaments, setAllTemperaments] = useState([])
  const [searchedTemperaments, setSearchedTemperaments] = useState([])

  const changeHandler=(e)=>{
    setInput(e.target.value)
  }
  const clickHandler=(e)=>{
    dispatch(addTemperamentFilter(input))
    setInput('')
  }
  useEffect(() => {
    const search=async()=>{
      const response=await fetch('http://localhost:3001/temperaments')
      const data=await response.json()
      setAllTemperaments(data)
    }
    search()
  }, [])
  useEffect(() => {
    if(input.length>0){
      let aux=[]
      for (let i = 0; i < allTemperaments.length; i++) {
        if(allTemperaments[i].name.includes(input)){
          aux.push(allTemperaments[i])
        }
      }
      setSearchedTemperaments(aux)
    }else{
      setSearchedTemperaments([])
    }
  }, [input,allTemperaments])

  return (
    <div className={styles.container}>
        <p className={styles.label}>Temperaments: </p>
        <div className={styles.searchContainer}>
          
          <input type="text" className={styles.input} value={input} onChange={changeHandler}/>
          {input.length>0?<SearchedTemperaments 
          results={searchedTemperaments} 
          inputSetter={setInput}
          all={allTemperaments} 
          allSetter={setAllTemperaments}/>:''}
          <button onClick={clickHandler}>Send</button>
          
        </div>
        <div className={styles.temperamentContainer}>
          {temperaments.map(el=><TemperamentPick temperament={el} key={`${el}-temp-key`}/>)}
        </div>  
    </div>
  )
}

export default TemperamentsSelector