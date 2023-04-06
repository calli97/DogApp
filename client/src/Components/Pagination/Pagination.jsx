import React from 'react'
import styles from './Pagination.module.css'
import { useSelector } from 'react-redux'
import PageIndex from '../PageIndex/PageIndex'
import { useState } from 'react'
import { useEffect } from 'react'

function getPages({index,total}) {
    let pages=[]
    if(total===0){
        return {
            prev:false,
            pages,
            index:null,
            last:false
        }
    }else if(total<=5){
        for(let i;i<total;i++){
            pages.push(i)
        }
        return {
            prev:false,
            index,
            pages,
            last:false
        }
    }else{
        for(let i=(index-2)>=1?index-2:1;i<=index+2&&i<=total;i++){
            pages.push(i)
        }
        return{
            prev:pages[0]===1?false:true,
            index,
            pages,
            last:pages[pages.length-1]===total?false:true
        }
    }
}

function Pagination() {
    const pagination=useSelector(state=>state.cards.pagination)
    const [pages, setPages] = useState({})
    useEffect(() => {
        setPages(getPages(pagination))
    }, [pagination])
    
  return (
    <div className={styles.container}>
        {pages.pages===undefined?'':(
            <>
                {pages.prev?<PageIndex index='<<'/>:""}
                {pages.pages.map(i=><PageIndex index={i} key={`${i}-indexPage`}/>)}
                {pages.last?<PageIndex index='>>'/>:""}
            </>
        )}
    </div>
  )
}

export default Pagination