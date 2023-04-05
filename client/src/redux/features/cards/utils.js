const matchOrigin={
    'both':()=>true,
    'database':(dog)=>{if(dog.id>264)return true;return false},
    'api':(dog)=>{if(dog.id<=264)return true;return false}
}

export const matchFilters=(dog,filterTemperaments,origin)=>{
    const dogTemperamentsArray=dog.temperament.split(', ')
    const filterTemperamentsArray=filterTemperaments.split(', ')

    if(matchOrigin[origin](dog)){
        for(let i=0;i<filterTemperamentsArray.length;i++){
            if(!dogTemperamentsArray.includes(filterTemperamentsArray[i])){
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
    'name':(dog1,dog2)=>dog1.firstname.localeCompare(dog2.firstname),
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