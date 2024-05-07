import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    purchase:[
        {id:"c124",productName:"laptop",quantity:"1",pricing:"70,000",mrp:"70,000",Customer_ID:"c123"},
        
    ],
}

export const purchaseSlice = createSlice({
    name:"purchase",
    initialState,
    reducers: {
        
    }
})

export const {} = purchaseSlice.actions

export default purchaseSlice.reducer