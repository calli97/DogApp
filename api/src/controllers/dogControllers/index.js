const {Dog,Temperament}=require('../../db')
const {createWeight,createHeight,createLifeSpan,dbQueryToObj}=require('./utils')

require('dotenv').config();
const INIT_ID=parseInt(process.env.INIT_ID)

const dogControllers={}

dogControllers.getDogs=async(req,res,next)=>{
    const {name}=req.query
    try {
        if(name===undefined){
            //no query
            const response=await fetch('https://api.thedogapi.com/v1/breeds')
            const data=await response.json()
            const dogs=data.map(el=>{return{
                id:el.id,
                name:el.name,
                weight:el.weight,
                height:el.height,
                life_span:el.life_span,
                image:el.image,
                temperament:el.temperament
            }})
            res.json(dogs)
        }else{
            //filter by name
            const response=await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)
            const data=await response.json()
            const dogs=data.map(el=>{return{
                id:el.id,
                name:el.name,
                weight:el.weight,
                height:el.height,
                life_span:el.life_span,
                image:el.image,
                temperament:el.temperament
            }})
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
            const response=await fetch(`https://api.thedogapi.com/v1/breeds/${id}`)
            const data=await response.json()
            const dog={
                id:data.id,
                name:data.name,
                weight:data.weight,
                height:data.height,
                life_span:data.life_span,
                image:data.image,
                temperament:data.temperament
            }
            res.json(dog)
        //DATABASE CASE
        }else{
            const data=await Dog.findByPk(id-INIT_ID)
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
        let temps=temperaments.replace('[','')
        temps=temps.replace(']','')
        temps=temps.split(',')
        temps=temps.map(el=>parseInt(el))
        const newDog=await Dog.create({
            name,
            height:createHeight(height_min,height_max),
            weight:createWeight(weight_min,weight_max),
            image,
            life_span:createLifeSpan(life_span_min,life_span_max),
        })
        await newDog.addTemperaments(temps)
        const obj=await Dog.findByPk(newDog.id,{
            include:{
                model:Temperament,
                attributes:['name'],
                through:{
                    attributes:[]
                }
            }
        })

        res.json(dbQueryToObj(obj))  
    } catch (error) {
        console.log(error)
        res.status(500).json({error:error.message})
    }
}


module.exports=dogControllers