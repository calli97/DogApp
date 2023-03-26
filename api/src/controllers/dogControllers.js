const {Dog}=require('../db')
const fs=require('fs')

const dogControllers={}

dogControllers.getDogs=async(req,res,next)=>{
    try {
        const response=await fetch('https://api.thedogapi.com/v1/breeds')
        const data=await response.json()
        res.json(data)
    } catch (error) {
        res.json(error.message)
    }
}

dogControllers.getDog=async(req,res,next)=>{
    const {id}=req.params
    try {
        const response=await fetch(`https://api.thedogapi.com/v1/breeds/${id}`)
        const data=await response.json()
        res.json(data)
    } catch (error) {
        res.json(error.message)
    }
}

dogControllers.init=async (req,res,next)=>{
    try {
        const response=fs.readFileSync('data.json')
        const data=JSON.parse(response)
        res.json(data)
    } catch (error) {
        res.json(error.message)
    }
}

module.exports=dogControllers