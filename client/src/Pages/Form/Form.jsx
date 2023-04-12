import React, { useState ,useEffect} from 'react'
import styles from './Form.module.css'
import TemperamentsNewDog from '../../Components/TemperamentsNewDog/TemperamentsNewDog'

function Form() {
  const [form, setForm] = useState({
    name:'',
    height_min:'',
    height_max:'',
    weight_min:'',
    weight_max:'',
    life_span_min:'',
    life_span_max:'',
    image:{},
    temperaments:[]
  })

  useEffect(() => {
    console.log(form)
  }, [form])
  
  
  const submitHandler=(e)=>{
    e.preventDefault()
    // const data=new FormData()
    // const img=document.getElementById('image')
    // console.log(img.files)
    fetch('http://localhost:3001/dogs',{
      method:'POST',
      headers:{
        "Content-Type": 'application/json',
      },
      mode: "cors",
      body: JSON.stringify(form)
    })
  }
  const changeHandler=(e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value,
    })
  }
  // const changeImageHandler=(e)=>{
  //   // setForm({
  //   //   ...form,
  //   //   image:e.target.files[0]
  //   // }) 
  // }

  return (
    <div className={styles.page}>
      <form onSubmit={submitHandler} className={styles.container}>
        <div>
          <h4>You don't find what you need?</h4>
          <h3>Upload your new Breed!!!</h3>
        </div>
        
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" name='name' id='name' onChange={changeHandler} className={styles.input}/>
        </div>
        <div>
          <label htmlFor="minHeight">Min Height: </label>
          <input type="text" name='height_min' id='minHeight' onChange={changeHandler} className={styles.input}/>
          <label htmlFor="maxHeight">Max Height: </label>
          <input type="text" name='height_max' id='maxHeight' onChange={changeHandler} className={styles.input}/>
        </div>
        <div>
          <label htmlFor="minWeight">Min Weight: </label>
          <input type="text" name='weight_min' id='minWeight' onChange={changeHandler} className={styles.input}/>
          <label htmlFor="maxWeight">Max Weight: </label>
          <input type="text" name='weight_max' id='maxWeight' onChange={changeHandler} className={styles.input}/>
        </div>
        <div>
          <label htmlFor="minLifeSpan">Min Life span: </label>
          <input type="text" name='life_span_min' id='minLifeSpan' onChange={changeHandler} className={styles.input}/>
          <label htmlFor="maxLifeSpan">Max Life span: </label>
          <input type="text" name='life_span_max' id='maxLifeSpan' onChange={changeHandler} className={styles.input}/>
        </div>
        <div>
          <label htmlFor="image"> Image Link: </label>
          <input type="text" name='image' id='image' onChange={changeHandler} className={styles.input}/>
        </div>
        {/* <div>
          Aca lo de imagenes
          <input type="file" id='image' name='image' onChange={changeImageHandler}/>
        </div> */}
        <div className={styles.temperamentContainer}>
          <TemperamentsNewDog form={form} formSetter={setForm}/>
        </div>
        <input type="submit" value='Submit' className={styles.button}/>
      </form>
    </div>
  )
}

export default Form