import React from 'react'
import styles from "./SideBarFilters.module.css";
import OriginFilter from '../OriginFilter/OriginFilter';
import ToggleAscOrDesc from '../ToggleAscOrDesc/ToggleAscOrDesc';
import SortOrder from '../SortOrder/SortOrder';
import TemperamentsSelector from '../TemperamentsSelector/TemperamentsSelector';

function SideBarFilters() {
  return (
    <div className={styles.container}>
        <div className={styles.origin}>
          <h4>Origin</h4>
          <OriginFilter/>
        </div>
        <div className={styles.order}>
          <SortOrder/>
          <ToggleAscOrDesc/>
        </div>
        <div className={styles.temperaments}>
          <TemperamentsSelector/>
        </div>
    </div>
  )
}

export default SideBarFilters