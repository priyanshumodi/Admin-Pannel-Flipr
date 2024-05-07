import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    customer:[
        {},
        
    ],
}

export const customerSlice = createSlice({
    name:"customer",
    initialState,
    reducers: {
        add: (state,action) => {
            // // console.log(action.payload.name)
            // const message = {
            //     id : nanoid(),
            //     name: action.payload.name,
            //     email: action.payload.email,
            //     subject: action.payload.subject,
            //     message: action.payload.message,
            // }
            // // console.log(message)
            // state.messages.push(message)
            // state.messages.map((message) => console.log(message))
        }
    }
})

export const {add} = customerSlice.actions

export default customerSlice.reducer