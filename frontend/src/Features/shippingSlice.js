import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    shippings:[
        {Address:"Ganesh Nagar",City:"Dhar",Pincode:"1",Purchase_order_ID:"c124",Customer_ID:"c123"},
    ],
}

export const shippingSlice = createSlice({
    name:"shipping",
    initialState,
    reducers: {
        
    }
})

export const {} = shippingSlice.actions

export default shippingSlice.reducer