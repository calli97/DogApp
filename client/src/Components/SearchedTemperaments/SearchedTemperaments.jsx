import React from 'react'
import styles from "./SearchedTemperaments.module.css";
import SearchedTemperamentItem from '../SearchedTemperamentItem/SearchedTemperamentItem';

function SearchedTemperaments({results,all,allSetter,inputSetter}) {
  return (
    <div className={styles.container}>
        {results.map(el=><SearchedTemperamentItem 
        temp={el} 
        inputSetter={inputSetter}
        all={all}
        allSetter={allSetter}
        key={`search-item-${el.id}-${el.name}`}/>)}
    </div>
  )
}

export default SearchedTemperaments