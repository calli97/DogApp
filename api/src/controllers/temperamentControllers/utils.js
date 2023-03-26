const getTemperamentsFromString=(string)=>{
    //string=string.replace(', ','')
    return string.split(', ')
}

const addTemperamentsToSet=(temperaments,set)=>{
    for(let i=0;i<temperaments.length;i++){
        set.add(temperaments[i])
    }
    return set
}

const getTemperamentsFromDogs=(dataArray)=>{
    let temperaments=new Set()
    
    for(let i=0;i<dataArray.length;i++){
        if(dataArray[i].temperament===undefined){
            continue
        }
        const dogTemperaments=getTemperamentsFromString(dataArray[i].temperament)
        
        temperaments=addTemperamentsToSet(dogTemperaments,temperaments)
    }
    return temperaments
}

module.exports={
    getTemperamentsFromDogs
}