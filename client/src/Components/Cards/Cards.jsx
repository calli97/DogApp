import React from 'react'
import styles from './Cards.module.css'
import { useSelector } from 'react-redux'
import Card from '../Card/Card'
import Pagination from '../Pagination/Pagination'

function Cards() {
    const state=useSelector(state=>state.cards)

  return (
    <div>
      <div className={styles.container}>
          {state.displayed.map((dog)=>{
              return <Card id={dog.id} name={dog.name} image={dog.image} key={`${dog.id}-${dog.name}-card`}/>
          })}
      </div>
      <Pagination/>
    </div> 
  )
}

export default Cards