import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    customer:[
        {id:"c123",customerName:"Priyanshu Modi",email:"priyanshumodi944@gmail.com",mobile:"8461984408",city:"Dhar"},
        
    ],
}

export const customerSlice = createSlice({
    name:"root",
    initialState,
    reducers: {
        
    }
})

export const {} = customerSlice.actions

export default customerSlice.reducer