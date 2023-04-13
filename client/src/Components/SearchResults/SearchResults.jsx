import React from 'react'
import styles from './SearchResults.module.css'
import SearchResultsItem from '../SearchResultsItem/SearchResultsItem'

function SearchResults({results,inputSetter}) {
  return (
    <div className={styles.container}>
        {results.length===0?'Sin Coincidencias':results.map(el=><SearchResultsItem breed={el} inputSetter={inputSetter} key={`${el.id}-${el.name}-id-key-result`}/>)}
    </div>
  )
}

export default SearchResults