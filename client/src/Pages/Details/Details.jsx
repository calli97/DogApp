import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import styles from './Details.module.css'

function Details() {
  let {breedid}=useParams()
  const [breed, setBreed] = useState({})
  const [isPending, setIsPending] = useState(true)
  
  useEffect(() => {
    const getData=async()=>{
      const response=await fetch(`http://localhost:3001/dogs/${breedid}`)
      const data=await response.json()
      setBreed(data)
      setIsPending(false)
    }
    getData()
  }, [breedid])
  

  return (
    <div className={styles.page}>
      {isPending?'':(
        <div className={styles.detail}>
          <img src={breed.image} alt={breed.name} className={styles.image}/>
          <div className={styles.dataContainer}>
              <h3>{breed.name}</h3>
              <div className={styles.heightContainer}>
                  <h5>Height:</h5>
                  <p><span>{`${breed.height.metric} cm.`}</span><span>{`${breed.height.imperial} inches`}</span></p>
              </div>
              <div className={styles.heightContainer}>
                  <h5>Weight:</h5>
                  <p><span>{`${breed.weight.metric} kg.`}</span><span>{`${breed.weight.imperial} lbs.`}</span></p>
              </div>
              <div className={styles.heightContainer}>
                  <h5>Life Span:</h5>
                  <p><span>{`${breed.life_span}`}</span></p>
              </div>
              <div className={styles.temperamentsContainer}>
                Temperaments: {breed.temperaments}
              </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Details