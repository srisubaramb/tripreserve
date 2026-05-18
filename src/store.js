import { configureStore } from "@reduxjs/toolkit";
import flightReducer from './flightSlices'
import userReducer from './userSlice'
const store = configureStore({
	reducer: {
		flights : flightReducer,
		users : userReducer
	}
})
export default store;