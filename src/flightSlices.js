import { createSlice } from "@reduxjs/toolkit";
import defaultFlight from './defaultFlights.json'
const initialState = {
	savedFlights : [],
	currency : 'INR'
}
const flightSlices = createSlice({
	name : 'flights',
	initialState : initialState,
	reducers : {
		saveFlightToFav : (state, action) => {
			//check is the flight is dummy flight
			state.savedFlights.push(action.payload)
			return state
		},
		removeFlightFromFav : (state, action) => {
			if(action.payload < 0 || action.payload >= state.savedFlights.length) return state
			 state.savedFlights.splice(action.payload , 1)
			 return state
		},
		setCurrency : (state, action) => {
			state.currency = action.payload
			return state
		}
	}
})
export const {saveFlightToFav, removeFlightFromFav , setCurrency} = flightSlices.actions
export default flightSlices.reducer;