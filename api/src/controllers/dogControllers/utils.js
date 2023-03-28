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

module.exports={
    createHeight,
    createWeight,
    createLifeSpan
}