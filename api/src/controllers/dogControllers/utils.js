const kgTolbs=2.205
const cmToInches=1/2.54

/**
 * The function receives a min and max weight in metric units and returns an weight object with imperial and metric units
 *
 *
 * @param {type}   int           minWeight in metric units.
 * @param {type}   int           maxWeight in metric units.
 *
 * @return {type} Weight object with the metric and imperial units.
 */
const createWeight=(minWeight,maxWeight)=>{
    const weight={
        metric:`${minWeight} - ${maxWeight}`,
        imperial:`${(minWeight*kgTolbs).toFixed(1)} - ${(maxWeight*kgTolbs).toFixed(1)}`
    }

    return weight
}


/**
 * The function receives a min and max Height in metric units and returns an Height object with imperial and metric units
 *
 *
 * @param {type}   int           minHeight in metric units.
 * @param {type}   int           maxHeight in metric units.
 *
 * @return {type} Height object with the metric and imperial units.
 */
const createHeight=(minHeight,maxHeight)=>{
    const height={
        metric:`${minHeight} - ${maxHeight}`,
        imperial:`${(minHeight*cmToInches).toFixed(1)} - ${(maxHeight*cmToInches).toFixed(1)}`
    }

    return height
}

/**
 * The function receives a min and max Height in metric units and returns an Height object with imperial and metric units
 *
 *
 * @param {type}   int           minHeight in metric units.
 * @param {type}   int           maxHeight in metric units.
 *
 * @return {type} Height object with the metric and imperial units.
 */
const createLifeSpan=(minLifeSpan,maxLifeSpan)=>{
    return `${minLifeSpan} - ${maxLifeSpan} years`
}


/**
 * Normalize the sequelize response.
 *
 *
 * @param {Object}   Obj          Sequelize response.
 *
 * @return {Object} A dog object.
 */
const dbQueryToObj=(response)=>{
    const dog={
        id:response.id+264,
        weight:response.weight,
        height:response.height,
        image:response.image,
        name:response.name,
        life_span:response.life_span,
        temperaments: temperamentsArrayToString(response.temperaments)
    }
    return dog
}


/**
 * Generate a string from the DB response.
 *
 *
 * @param {Object}   Obj          Sequelize response.
 *
 * @return {Object} A dog object.
 */
const temperamentsArrayToString=(array)=>{
    let str=array[0].name

    for(let i=1;i<array.length;i++){
        str=str+', '+array[i].name
    }
    return str
}


/**
 * Normalize the API response.
 *
 *
 * @param {Object}   Obj          Api response.
 *
 * @return {Object} A dog object.
 */
const apiQueryToObj=(response)=>{
    const dog={
        id:response.id,
        weight:response.weight,
        height:response.height,
        image:response.image.url,
        name:response.name,
        life_span:response.life_span,
        temperaments:response.temperament
    }
    return dog
}

module.exports={
    createHeight,
    createWeight,
    createLifeSpan,
    dbQueryToObj,
    apiQueryToObj
}