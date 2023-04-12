import React from 'react'
import styles from './NewDogTemperamentSelect.module.css'

function NewDogTemperamentSelect({temperament,form,formSetter,selected,selectedSetter,all,allSetter,inputSetter}) {
  const clickHander=()=>{
    const aux=[...form.temperaments,temperament.id]
    selectedSetter([...selected,temperament])
    allSetter(all.filter(el=>el.name!==temperament.name))
    formSetter({...form,temperaments:aux})
    inputSetter('')
  }
  return (
    <div className={styles.container} onClick={clickHander}>
        {temperament.name}
    </div>
  )
}

export default NewDogTemperamentSelect