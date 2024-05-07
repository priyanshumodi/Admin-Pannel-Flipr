import {combineReducers} from "redux"
import customerSlice from "../Features/customerSlice"
import purchaseSlice from "../Features/purchaseSlice"
import shippingSlice from "../Features/shippingSlice"

const rootReducers = combineReducers({
    customerReducer:customerSlice,
    purchaseReducer:purchaseSlice,
    shippingReducer:shippingSlice
})

export default rootReducers