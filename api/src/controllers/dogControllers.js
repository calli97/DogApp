const {Dog}=require('../db')
const fs=require('fs')

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
    const {id}=req.params
    try {
        //API ID
        if(id<=INIT_ID){
            const response=await fetch(`https://api.thedogapi.com/v1/breeds/${id}`)
            const data=await response.json()
            res.json(data)
        //DATABASE CASE
        }else{
            
        }
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

dogControllers.createDog=async(req,res,next)=>{
    try {
        
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