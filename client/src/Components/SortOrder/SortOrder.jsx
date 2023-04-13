import { useDispatch, useSelector } from 'react-redux'
import styles from './SortOrder.module.css'
import { order } from '../../redux/features/cards/cardsSlice'

function SortOrder() {
  const dispatch=useDispatch()
  const orderFilter=useSelector(state=>state.cards.orderBy.parameter)
  const handleOption=(e)=>{
    dispatch(order(e.target.value))
  }
  return (
    <div className={styles.container}>
      <select name="select" onChange={handleOption} defaultValue={orderFilter} className={styles.input}>
        <option value="id" >Id</option>
        <option value="name" >Name</option>
        <option value="weight" >Weight</option>
      </select>
    </div>
  )
}

export default SortOrder