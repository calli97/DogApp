import React from 'react'
import styles from './NewDogTemperamentPick.module.css'

function NewDogTemperamentPick({temperament,form,formSetter,selected,selectedSetter,all,allSetter}) {
  const handleClick=()=>{
    formSetter({
      ...form,
      temperaments:form.temperaments.filter(el=>el!==temperament.name)
    })
    allSetter([...all,temperament])
    selectedSetter(selected.filter(el=>el.name!==temperament.name))
  }
  return (
    <button className={styles.button} onClick={handleClick}>
        {temperament.name} <span className={styles.span}>X</span>
    </button>
  )
}

export default NewDogTemperamentPick