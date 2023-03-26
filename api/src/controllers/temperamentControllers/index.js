const {getTemperamentsFromDogs}=require('./utils')

const temperamentControllers={}

temperamentControllers.getTemperaments=async(req,res,next)=>{

}

//gets the temperaments from de API and load to the database
//Validation in case the temperaments are already loaded?
temperamentControllers.initTemperaments=async(req,res,next)=>{
    try {
        const response=await fetch('https://api.thedogapi.com/v1/breeds/')
        const data=await response.json()

        const temperaments=getTemperamentsFromDogs(data)
        const array=Array.from(temperaments)
        res.json(array)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports=temperamentControllers