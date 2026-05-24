import { useDispatch, useSelector } from "react-redux"
import { addUser } from "./userSlice";
import AuthPage from "./AuthPage";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const FormInput = ({type, name, id, placeholder, value}) => {
	return <input
				 type={type || undefined} 
				 name={name || undefined} 
				 id={id  || undefined}
				 placeholder={placeholder || undefined} 
				 className={"p-2 py-3 block border-1 m-1 rounded-xl text-lg" }
			/>
}
export const FormButton = ({type = "submit", value = 'Submit'}) => (
	<input 
		type={type}
		value={value}
		className="p-2 py-3 block border-1 m-1 rounded-xl text-lg bg-primary"
	/>
)
const Form = ({funcToCall}) => (
		<form onSubmit={(e) => funcToCall(e)} className="flex flex-col w-[100%]"> 
			<FormInput type="text" name="username" id="username" placeholder="username"/>
			<FormInput type="email" name="email" id="email" placeholder="Email"/>
			<FormInput type="password" name="password" id="password" placeholder="Password"/>
			<FormInput type="password" name="confirmPassword" id="confirm-password" placeholder="Confirm Password"/>
			<FormButton type="submit" value="Create account"/>
		</form>
)
function SignUp() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [signupStatus, setSignupStatus] = useState({msg : '' , status : false})
	const usersList = useSelector(state => state.users.users)
	console.log(usersList)
	function userSignup(e) {
		e.preventDefault()
		const userName = e.target.username.value
		const email = e.target.email.value
		const password = e.target.password.value
		const confirmPassword = e.target.confirmPassword.value
		if(userName == '') {
			showStatus("UserName can't be empty")
			return
		}
		if(password != confirmPassword) {
			showStatus('Confirm Password must match!')
			return
		}
		const isAlreadyAUser = usersList.find(user => user.email == email || user.userName == userName)
		if(isAlreadyAUser) {
			if(isAlreadyAUser.userName == userName) {
				showStatus('Username is already taken')
			} else if(isAlreadyAUser.email == email) {
				showStatus('Email already exists')
			}
			return
		} else {
			const userObj = {userName, email, password}
			dispatch(addUser(userObj))
			navigate('/login')
		}
		
	}
	function showStatus(msg, status) {
		setSignupStatus({ msg, status })

		setTimeout(() => {
			setSignupStatus({
				msg: '',
				status: false
			})
		}, 3000)
	}
	return (
		<AuthPage Form={Form} status={signupStatus} funcToCall={userSignup} heading={"Create an account"}/>
	)
}
export default SignUp;