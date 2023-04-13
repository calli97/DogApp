const {Dog,Temperament}=require('../../db')
const {createWeight,createHeight,createLifeSpan,dbQueryToObj,apiQueryToObj}=require('./utils')
const dogsHandler=require('./handler')

require('dotenv').config();
const INIT_ID=parseInt(process.env.INIT_ID)

const dogControllers={}

dogControllers.getDogs=async(req,res,next)=>{
    const {name}=req.query
    try {
        if(name===undefined){
            //no query
            const dogsApi=await dogsHandler.getDogsFromApi()
            const dogsDb=await dogsHandler.getDogsFromDB()
            const dogs=[...dogsApi,...dogsDb]
            res.json(dogs)
        }else{
            //filter by name
            // const response=await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)
            // const data=await response.json()
            // const dogs=data.map(el=>apiQueryToObj(el))
            const dogsApi=await dogsHandler.searchDogInApiByName(name)
            const dogsDb=await dogsHandler.searchDogInDBByName(name)
            const dogs=[...dogsApi,...dogsDb]
            
            res.json(dogs)
        }
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

dogControllers.getDog=async(req,res,next)=>{
    const id=parseInt(req.params.id)
    try {
        //API ID
        if(id<=INIT_ID){
            const dog=await dogsHandler.searchDogInApi(id)
            res.json(dog)
        //DATABASE CASE
        }else{
            const data=await dogsHandler.searhDogInDB(id)
            if(data===null){
                throw new Error('Dog not found')
            }else{
                res.json(data)
            }
        }
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

dogControllers.createDog=async(req,res,next)=>{
    const {image,name,height_min,height_max,weight_min,weight_max,life_span_min,life_span_max,temperaments}=req.body
    try {
        if(image===undefined||name===undefined||height_min===undefined||height_max===undefined||
            weight_min===undefined||weight_max===undefined||life_span_min===undefined||life_span_max===undefined){
            throw new Error('Missing Data')
        }
        const newDog=await dogsHandler.createDog(name,image,height_min,height_max,weight_min,weight_max,life_span_min,life_span_max,temperaments)
        const dogsApi=await dogsHandler.getDogsFromApi()
        const dogsDb=await dogsHandler.getDogsFromDB()
        const dogs=[...dogsApi,...dogsDb]
        res.json(dogs)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}


module.exports=dogControllers