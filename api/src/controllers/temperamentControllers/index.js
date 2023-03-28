const {getTemperamentsFromDogs}=require('./utils')
const {Temperament}=require('../../db')

const temperamentControllers={}

let initialized=false

temperamentControllers.getTemperaments=async(req,res,next)=>{
    try {
        const response =await Temperament.findAll()
        res.json(response)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

//gets the temperaments from de API and load to the database
//Validation in case the temperaments are already loaded?
temperamentControllers.initTemperaments=async(req,res,next)=>{
    try {
        if(initialized===false){
            const response=await fetch('https://api.thedogapi.com/v1/breeds/')
            const data=await response.json()

            const temperaments=getTemperamentsFromDogs(data)
            const temperamentArray=Array.from(temperaments)
            for(let i=0;i<temperamentArray.length;i++){
                await Temperament.create({name:temperamentArray[i]})
            }
            initialized=true
            res.json(temperamentArray)
        }else{
            res.json({message:'Database already initialized'})
        }
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports=temperamentControllers