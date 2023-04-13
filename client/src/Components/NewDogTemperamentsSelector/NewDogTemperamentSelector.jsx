import React from 'react'
import styles from './NewDogTemperamentSelector.module.css'
import NewDogTemperamentSelect from '../NewDogTemperamentSelect/NewDogTemperamentSelect'

function NewDogTemperamentSelector({search,form,formSetter,selected,selectedSetter,all,allSetter,inputSetter}) {
  return (
    <div className={styles.container}>
      {search.length===0?'Sin Coincidencias':''}
      {search.map(el=><NewDogTemperamentSelect 
      key={`${el.name}-mapaid`}
      inputSetter={inputSetter}
      temperament={el} 
      form={form} 
      formSetter={formSetter}
      selected={selected}
      selectedSetter={selectedSetter}
      all={all}
      allSetter={allSetter}/>)}
    </div>
  )
}

export default NewDogTemperamentSelector