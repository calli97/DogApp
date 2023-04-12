import React from 'react'
import styles from './SearchedTemperamentItem.module.css'
import { useDispatch } from 'react-redux'
import { addTemperamentFilter } from '../../redux/features/cards/cardsSlice'

function SearchedTemperamentItem({temp,all,allSetter,inputSetter}) {
  const dispatch=useDispatch()
  const handleClick=()=>{
    allSetter(all.filter(el=>el.id!==temp.id))
    dispatch(addTemperamentFilter(temp))
    inputSetter('')
  }

  return (
    <div className={styles.container} onClick={handleClick}>
        {temp.name}
    </div>
  )
}

export default SearchedTemperamentItem