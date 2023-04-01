
/**
 * The function splits a string of temperaments
 *
 *
 * @param {String}   string           String with the temperaments of a certain breed.
 *
 * @return {Array} Array of temperaments.
 */
const getTemperamentsFromString=(string)=>{
    return string.split(', ')
}

/**
 * Load the temperaments of a certain breed in a set
 *
 * 
 * @param {Array}    temperaments            Array of temperaments.
 * @param {Set}   set              Set of temperaments.
 *
 * @return {Set} Set of temperaments without duplicates.
 */
const addTemperamentsToSet=(temperaments,set)=>{
    for(let i=0;i<temperaments.length;i++){
        set.add(temperaments[i])
    }
    return set
}


/**
 * Get all the temperaments from an array of Breeds 
 *
 * @param {Array}    dataArray            Array of Breeds
 *
 * @return {Set} Set of temperaments without duplicates.
 */
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