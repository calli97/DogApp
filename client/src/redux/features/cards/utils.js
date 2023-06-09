import { current } from "@reduxjs/toolkit";

const matchOrigin={
    'All':()=>true,
    'DB':(dog)=>{if(dog.id>264)return true;return false},
    'API':(dog)=>{if(dog.id<=264)return true;return false}
}

export const matchFilters=(dog,filterTemperaments,origin)=>{
    if(current(dog).temperaments===undefined){
        return filterTemperaments.length?false:(matchOrigin[origin])(dog)
    }
    let aux=current(dog).temperaments
    const dogTemperamentsArray=aux.split(', ')
    const filterTemperamentsArray=filterTemperaments
    
    if((matchOrigin[origin])(dog)){
        for(let i=0;i<filterTemperamentsArray.length;i++){
            if(!dogTemperamentsArray.includes(filterTemperamentsArray[i].name)){
                return false
            }
        }
        return true
    }else{
        return false
    }
}

const getMinWeigth=(dog)=>{
    const aux=dog.weight.imperial.split(' ')
    return parseInt(aux[0])
}


const sortOrder={
    'id':(dog1,dog2)=>dog1.id-dog2.id,
    'name':(dog1,dog2)=>dog1.name.localeCompare(dog2.name),
    'weight':(dog1,dog2)=>getMinWeigth(dog1)-getMinWeigth(dog2),
}

export const orderCards=(cardsArray,orderParameter,asc)=>{
    let aux=cardsArray.sort(sortOrder[orderParameter])
    if(asc){
        return aux
    }else{
        return aux.reverse()
    }
}


export const getPagination=(allData,action)=>{
    let aux=[...allData]
    let displayed=[]
    let index
    let total=Math.ceil(aux.length/8)
    if(action==='<<'){
        index=1
        displayed=aux.slice(0,8)
    }else if(action==='>>'){
        index=total
        displayed=aux.slice(8*(total-1),8*total)
    }else{
        index=action
        displayed=aux.slice(8*(action-1),8*action)
    }
    return {displayed,index,total}
}

