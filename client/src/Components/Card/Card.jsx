import React from 'react'
import styles from "./Card.module.css";
import { Link } from 'react-router-dom';

function Card({id,image,name}) {
  return (
    <div className={styles.card}>
        <img src={image} alt={`${name}`} className={styles.image}/>
        <p className={styles.name}>{name}</p>
        <Link to={`/detail/${id}`} className={styles.button}>See more...</Link>
    </div>
  )
}

export default Card