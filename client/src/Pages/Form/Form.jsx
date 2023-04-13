import React, { useEffect, useState} from 'react'
import styles from './Form.module.css'
import TemperamentsNewDog from '../../Components/TemperamentsNewDog/TemperamentsNewDog'
import { postDog } from '../../redux/features/cards/cardsSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { validate } from './validate'

const defined=(input)=>{
    if(input===null)return '  ';
    if(input===true) return '❌';
    if(input===false) return '✔️';
}

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
  const [errors, setErrors] = useState({
    name:true,
    height_min:true,
    height_max:true,
    weight_min:true,
    weight_max:true,
    life_span_min:true,
    life_span_max:true,
    image:true,
    temperaments:true
  })
  const dispatch=useDispatch()
  
  const submitHandler=(e)=>{
    e.preventDefault()
    //dispatch(postDog(form))
  }
  const clickHandler=()=>{
    if(Object.keys(errors).every((k) => !errors[k])){
      dispatch(postDog(form))
    }else{
      console.log('verifique campos')
    }
    
  }
  const changeHandler=(e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value,
    })
  }

  useEffect(() => {
    setErrors({
      name:validate.name(form.name),
      height_min:validate.height_min(form.height_min,form.height_max),
      height_max:validate.height_max(form.height_max,form.height_min),
      weight_min:validate.weight_min(form.weight_min,form.weight_max),
      weight_max:validate.weight_max(form.weight_max,form.weight_min),
      life_span_min:validate.life_span_min(form.life_span_min,form.life_span_max),
      life_span_max:validate.life_span_max(form.life_span_max,form.life_span_min),
      image:validate.image(form.image),
      temperaments:validate.temperaments(form.temperaments)
    })
  }, [form])
  

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
          <div className={styles.tooltip}>{defined(errors.name)}
            <span className={styles.tooltiptext}>Name must be at least 3 characters long and only have leters</span>
          </div>
        </div>
        <div>
          <label htmlFor="minHeight">Min Height: </label>
          <input type="text" name='height_min' id='minHeight' onChange={changeHandler} className={styles.input}/>
          <div className={styles.tooltip}>{defined(errors.height_min)}
            <span className={styles.tooltiptext}>Min Height must be a number and be smaller than Max Height</span>
          </div>
          <label htmlFor="maxHeight">Max Height: </label>
          <input type="text" name='height_max' id='maxHeight' onChange={changeHandler} className={styles.input}/>
          <div className={styles.tooltip}>{defined(errors.height_max)}
            <span className={styles.tooltiptext}>Max Height must be a number and be bigger than Min Height</span>
          </div>
        </div>
        <div>
          <label htmlFor="minWeight">Min Weight: </label>
          <input type="text" name='weight_min' id='minWeight' onChange={changeHandler} className={styles.input}/>
          <div className={styles.tooltip}>{defined(errors.weight_min)}
            <span className={styles.tooltiptext}>Min Weight must be a number and be smaller than Max Weight</span>
          </div>
          <label htmlFor="maxWeight">Max Weight: </label>
          <input type="text" name='weight_max' id='maxWeight' onChange={changeHandler} className={styles.input}/>
          <div className={styles.tooltip}>{defined(errors.weight_max)}
            <span className={styles.tooltiptext}>Max Weight must be a number and be bigger than Min Weight</span>
          </div>
        </div>
        <div>
          <label htmlFor="minLifeSpan">Min Life span: </label>
          <input type="text" name='life_span_min' id='minLifeSpan' onChange={changeHandler} className={styles.input}/>
          <div className={styles.tooltip}>{defined(errors.life_span_min)}
            <span className={styles.tooltiptext}>Min Life Span must be a number and be smaller than Max Life Span</span>
          </div>
          <label htmlFor="maxLifeSpan">Max Life span: </label>
          <input type="text" name='life_span_max' id='maxLifeSpan' onChange={changeHandler} className={styles.input}/>
          <div className={styles.tooltip}>{defined(errors.life_span_max)}
            <span className={styles.tooltiptext}>Max Life Span must be a number and be bigger than Min Life Span</span>
          </div>
        </div>
        <div>
          <label htmlFor="image"> Image Link: </label>
          <input type="text" name='image' id='image' onChange={changeHandler} className={styles.input}/>
          <div className={styles.tooltip}>{defined(errors.image)}
            <span className={styles.tooltiptext}>The image must be a link</span>
          </div>
        </div>
        <div className={styles.temperamentContainer}>
          <TemperamentsNewDog form={form} formSetter={setForm}/>
          <div className={styles.tooltip}>{defined(errors.temperaments)}
            <span className={styles.tooltiptext}>You must pick at least 1 temperament</span>
          </div>
        </div>
        <Link to={Object.keys(errors).every((k) => !errors[k])?'/home':'/form'} >
          <input type="button" value='Submit' className={styles.button} onClick={clickHandler}/>
        </Link>
      </form>
    </div>
  )
}

export default Form