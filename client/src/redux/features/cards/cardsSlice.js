import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { getPagination, matchFilters, orderCards} from './utils'

export const getDogs=createAsyncThunk('cards/getCards',async()=>{
    const response=await fetch('http://localhost:3001/dogs')
    const data=await response.json()
    return data
})
//name,minHeight,maxHeight,minWeight,maxWeight,minLifeSpan,maxLifeSpan,image
export const postDog=createAsyncThunk('cards/postCard',async(newDog)=>{
    const response=await fetch('http://localhost:3001/dogs',{
        method:'POST',
        headers: {
            "Content-Type": "application/json"
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
        origin:'All'
    },
    orderBy:{
        parameter:'id',
        asc:true
    },
    pagination:{
        index:0,
        total:0
    },
    pages:{}
}

export const cardSlice=createSlice({
    name:'cards',
    initialState,
    reducers:{
        deleteTemperamentFilter:(state,action)=>{
            //Aplied filters
            state.filteredBy.searchedTemperaments=state.filteredBy.searchedTemperaments.filter(el=>el.name!==action.payload.name)
            let filtered=state.dogs.filter(item=>matchFilters(item,state.filteredBy.searchedTemperaments,state.filteredBy.origin))
            state.filtered=filtered
            //Set ordered
            const aux=orderCards(state.filtered,state.orderBy.parameter,state.orderBy.asc)
            state.ordered=aux
            //Set pagination
            const {displayed,total,index}=getPagination(state.ordered,1)
            state.pagination.index=index
            state.displayed=displayed 
            state.pagination.total=total
        },
        addTemperamentFilter:(state,action)=>{
            //Aplied filters
            state.filteredBy.searchedTemperaments.push(action.payload)
            let filtered=state.dogs.filter(item=>matchFilters(item,state.filteredBy.searchedTemperaments,state.filteredBy.origin))
            state.filtered=filtered
            
            //Set ordered
            const aux=orderCards(state.filtered,state.orderBy.parameter,state.orderBy.asc)
            state.ordered=aux
            //Set pagination
            const {displayed,total,index}=getPagination(state.ordered,1)
            state.pagination.index=index
            state.displayed=displayed 
            state.pagination.total=total
        },
        filterOrigin:(state,action)=>{
            //Aplied filters
            state.filteredBy.origin=action.payload
            let filtered=state.dogs.filter(item=>matchFilters(item,state.filteredBy.searchedTemperaments,action.payload))
            state.filtered=filtered
            //Set ordered
            const aux=orderCards(state.filtered,state.orderBy.parameter,state.orderBy.asc)
            state.ordered=aux
            //Set pagination
            const {displayed,total,index}=getPagination(state.ordered,1)
            state.pagination.index=index
            state.displayed=displayed 
            state.pagination.total=total
        },
        order:(state,action)=>{
            state.orderBy.parameter=action.payload
            const aux=orderCards(state.filtered,state.orderBy.parameter,state.orderBy.asc)
            state.ordered=aux
            const {displayed,total,index}=getPagination(state.ordered,1)
            state.pagination.index=index
            state.displayed=displayed 
            state.pagination.total=total
        },
        orderSort:(state,action)=>{
            state.orderBy.asc=action.payload
            const aux=orderCards(state.filtered,state.orderBy.parameter,state.orderBy.asc)
            state.ordered=aux
            const {displayed,total,index}=getPagination(state.ordered,1)
            state.pagination.index=index
            state.displayed=displayed 
            state.pagination.total=total
        },
        changePage:(state,action)=>{
            const {displayed,total,index}=getPagination(state.ordered,action.payload)
            state.pagination.index=index
            state.pagination.total=total
            state.displayed=displayed  
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getDogs.fulfilled,(state,action)=>{
            state.dogs=action.payload
            state.filtered=action.payload
            state.ordered=action.payload
            const aux=Math.ceil(action.payload.length/8)
            state.pagination.total=aux
            state.pagination.index=1
            state.displayed=action.payload.slice(0,8)
        })
        .addCase(postDog.fulfilled,(state,action)=>{
            state.dogs=action.payload
            state.filtered=action.payload
            state.ordered=action.payload
            const aux=Math.ceil(action.payload.length/8)
            state.pagination.total=aux
            state.pagination.index=1
            state.displayed=action.payload.slice(0,8)
        })
    }
})

export const{addCard,changePage,addTemperamentFilter,filterOrigin,deleteTemperamentFilter,orderSort,order}=cardSlice.actions

export default cardSlice.reducer