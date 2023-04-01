const kgTolbs=2.205
const cmToInches=1/2.54

/**
 * The function receives a min and max weight in metric units and returns an weight object with imperial and metric units
 *
 *
 * @param {Number}   minWeight           minWeight in metric units.
 * @param {Number}   maxWeight           maxWeight in metric units.
 *
 * @return {Object} Weight object with the metric and imperial units.
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
 * @param {Number}   minHeight           minHeight in metric units.
 * @param {Number}   maxHeight           maxHeight in metric units.
 *
 * @return {Object} Height object with the metric and imperial units.
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
 * @param {Number}   minLifeSpan           minHeight in metric units.
 * @param {Number}   maxLifeSpan           maxHeight in metric units.
 *
 * @return {String} Height object with the metric and imperial units.
 */
const createLifeSpan=(minLifeSpan,maxLifeSpan)=>{
    return `${minLifeSpan} - ${maxLifeSpan} years`
}


/**
 * Normalize the sequelize response.
 *
 *
 * @param {Object}   response          Sequelize response.
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
 * @param {Array}   array          Sequelize response.
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
 * @param {Object}   response          Api response.
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

/**
 * Normalize the API response when search by id.
 *
 *
 * @param {Object}   response          Api response.
 *
 * @return {Object} A dog object.
 */
const apiSearchToObj=(response)=>{
    const dog={
        id:response.id,
        weight:response.weight,
        height:response.height,
        image:`https://cdn2.thedogapi.com/images/${response.reference_image_id}.jpg`,
        name:response.name,
        life_span:response.life_span,
        temperaments:response.temperament
    }
    return dog
}

//Validations

//Parse

module.exports={
    createHeight,
    createWeight,
    createLifeSpan,
    dbQueryToObj,
    apiQueryToObj,
    apiSearchToObj
}