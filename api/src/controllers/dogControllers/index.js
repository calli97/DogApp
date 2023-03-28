const {Dog}=require('../../db')
const fs=require('fs')
const {createWeight,createHeight,createLifeSpan}=require('./utils')

require('dotenv').config();
const INIT_ID=parseInt(process.env.INIT_ID)

const dogControllers={}

dogControllers.getDogs=async(req,res,next)=>{
    try {
        const response=await fetch('https://api.thedogapi.com/v1/breeds')
        const data=await response.json()
        res.json(data)
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
            res.json(data)
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
    const {image,name,height_min,height_max,weight_min,weight_max,life_span_min,life_span_max}=req.body
    try {
        if(image===undefined||name===undefined||height_min===undefined||height_max===undefined||
            weight_min===undefined||weight_max===undefined||life_span_min===undefined||life_span_max===undefined){
            throw new Error('Missing Data')
        }
        const newDog=await Dog.create({
            name,
            height:createHeight(height_min,height_max),
            weight:createWeight(weight_min,weight_max),
            image,
            life_span:createLifeSpan(life_span_min,)
        })
        res.json(newDog)  
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

dogControllers.init=async (req,res,next)=>{
    try {
        const response=fs.readFileSync('data.json')
        const data=JSON.parse(response)
        
        const test=await Dog.create({
            name:data[0].name,
            weight:data[0].weight,
            height:data[0].height,
            life_span:data[0].life_span,
            image:data[0].image.id
        })

        res.json(test)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports=dogControllers