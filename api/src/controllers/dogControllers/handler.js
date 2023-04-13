const {Dog,Temperament}=require('../../db')
const {createWeight,createHeight,createLifeSpan,dbQueryToObj,apiQueryToObj,apiSearchToObj}=require('./utils')
const { Op } = require("sequelize");

require('dotenv').config();
const INIT_ID=parseInt(process.env.INIT_ID)

const dogsHandler={}

dogsHandler.getDogsFromApi=async()=>{
    const response=await fetch('https://api.thedogapi.com/v1/breeds')
    const data=await response.json()
    const dogs=data.map(el=>apiQueryToObj(el))
    return dogs
}


dogsHandler.getDogsFromDB=async()=>{
    const response=await Dog.findAll({
        include:{
            model:Temperament,
            attributes:['name'],
            through:{
                attributes:[]
            }
        }
    })
    const dogs=response.map(dog=>dbQueryToObj(dog))
    return dogs
}

dogsHandler.searchDogInApi=async(id)=>{
    if(id>INIT_ID){
        return null;
    }
    const response=await fetch(`https://api.thedogapi.com/v1/breeds/${id}`)
    const data=await response.json()
    if(data.id===undefined){
        return null
    }
    const dog=apiSearchToObj(data)
    return dog
}

dogsHandler.searhDogInDB=async(id)=>{
    const data=await Dog.findByPk(id-INIT_ID,{
        include:{
            model:Temperament,
            attributes:['name'],
            through:{
                attributes:[]
            }
        }
    })
    if(data===null)return null;
    const dog=dbQueryToObj(data)
    return dog
}

dogsHandler.searchDogInDBByName=async(name)=>{
    const data=await Dog.findAll({
        where:{
            name:{[Op.iLike]: `%${name}%`},
        },
        include:{
            model:Temperament,
            attributes:['name'],
            through:{
                attributes:[]
            }
        }
    })
    
    if(data.length===0)return [];
    let parsedData=[]
    for (let i = 0; i < data.length; i++) {
        parsedData.push(dbQueryToObj(data[i]))
    }
    return parsedData
}

dogsHandler.searchDogInApiByName=async(name)=>{
    const response=await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)
    const data=await response.json()
    if(data.length===0){
        return []
    }
    let parsedData=[]
    for (let i = 0; i < data.length; i++) {
        parsedData.push(apiSearchToObj(data[i]))
    }
    return parsedData
}

dogsHandler.createDog=async(name,image,height_min,height_max,weight_min,weight_max,life_span_min,life_span_max,temperaments)=>{
    const newDog=await Dog.create({
        name,
        image,
        height:createHeight(height_min,height_max),
        weight:createWeight(weight_min,weight_max),
        life_span:createLifeSpan(life_span_min,life_span_max)
    })
    await newDog.addTemperaments(temperaments)
    const obj=await Dog.findByPk(newDog.id,{
        include:{
            model:Temperament,
            attributes:['name'],
            through:{
                attributes:[]
            }
        }
    })
    return dbQueryToObj(obj)
}

module.exports=dogsHandler