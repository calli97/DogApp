import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {matchFilters} from './utils'

export const getDogs=createAsyncThunk('cards/getCards',async()=>{
    const response=await fetch('http://localhost:3001/dogs')
    const data=await response.json()
    console.log(data)
    return data
})
//name,minHeight,maxHeight,minWeight,maxWeight,minLifeSpan,maxLifeSpan,image
export const postDog=createAsyncThunk('cards/postCard',async(newDog)=>{
    const response=await fetch('http://localhost:3001/dogs',{
        method:'POST',
        headers: {
            //"Content-Type": "application/json",
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body:JSON.stringify(newDog)
    })
    const data=await response.json()
    return data
})

export const updateDog=createAsyncThunk('cards/updateCard',async(newDog)=>{
    const response=await fetch('http://localhost:3001/dogs',{
        method:'PUT',
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body:JSON.stringify(newDog)
    })
    const data=await response.json()
    return data
})

export const deleteDog=createAsyncThunk('cards/deleteCard',async(dogId)=>{
    const response=await fetch(`http://localhost:3001/dogs/${dogId}`,{
        method:'DELETE',
    })
    const data=await response.json()
    return data
})

let initialState={
    dogs:[],
    filtered:[],
    ordered:[],
    displayed:[],
    filteredBy:{
        searchedTemperaments:[],
        origin:'both'
    },
    orderBy:{
        parameter:'id',
        asc:true
    },
    pagination:{
        index:0,
        total:0
    }
}

export const cardSlice=createSlice({
    name:'cards',
    initialState,
    reducers:{
        filter:(state,action)=>{
            let filtered=state.dogs.filter((item)=>matchFilters(item,action.payload.temperaments,action.payload.origin))
            state.filtered=filtered
            state.filteredBy.searchedTemperaments=action.payload.temperaments
            
        },
        order:(state,action)=>{

        },
        cleanFilters:(state,action)=>{
            
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getDogs.fulfilled,(state,action)=>{
            state.dogs=action.payload
            state.filtered=action.payload
            state.ordered=action.payload
            const aux=Math.ceil(action.payload.length/8)
            state.pagination.total=aux
            state.pagination.index=0
            state.displayed=action.payload.slice(0,8)
        })
    }
})

export const{addCard}=cardSlice.actions

export default cardSlice.reducer