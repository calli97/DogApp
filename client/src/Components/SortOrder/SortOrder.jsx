import { useDispatch } from 'react-redux'
import styles from './SortOrder.module.css'
import { order } from '../../redux/features/cards/cardsSlice'

function SortOrder() {
  const dispatch=useDispatch()
  const handleOption=(e)=>{
    console.log(e.target.value)
    dispatch(order(e.target.value))
  }

  return (
    <div className={styles.container}>
      <select name="select" onChange={handleOption}>
        {/* <option value="null" disabled selected='true'>Select the order</option> */}
        <option value="id" >Id</option>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
    </div>
  )
}

export default SortOrder