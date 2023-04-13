import React from 'react'
import styles from "./SearchResultsItem.module.css";
import { Link } from "react-router-dom";

function SearchResultsItem({breed,inputSetter}) {
    const clickHandler=()=>{
        inputSetter('')
    }
  return (
    <Link to={`detail/${breed.id}`} onClick={clickHandler}>
        <div className={styles.container}>
            {breed.name}
        </div>
    </Link>
  )
}

export default SearchResultsItem