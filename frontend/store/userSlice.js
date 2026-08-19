import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	users : JSON.parse(localStorage.getItem('users')) || []
}
const userSlice = createSlice({
	name: 'user',
	initialState : initialState,
	reducers : {
		addUser : (state, action) => {
			state.users.push(action.payload)
		},
		setUsers : (state, action) => {
			state.users = action.payload
		}
	}
})
export const {addUser, setUsers} = userSlice.actions
export default userSlice.reducer