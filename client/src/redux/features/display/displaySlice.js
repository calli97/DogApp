import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

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
        id:true,
        alfabetic:false,
        weight:false
    }
}

export const displaySlice=createSlice({
    name:'cards',
    initialState,
    reducers:{
        //dudas
    },
})

export const{}=displaySlice.actions

export default cardSlice.reducer