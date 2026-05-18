import { useDispatch } from "react-redux"
import { addUser } from "./userSlice";
import AuthPage from "./AuthPage";
import { useState } from "react";

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
	const [signupStatus, setSignupStatus] = useState({msg : '' , status : false})
	function userSignup(e) {
		e.preventDefault()
		const userName = e.target.username.value
		const email = e.target.email.value
		const password = e.target.password.value
		const confirmPassword = e.target.confirmPassword.value
		if(userName == '') {
			showStatus("UserName can't be empty")
		}
		if(password != confirmPassword) {
			showStatus('Confirm Password must match!')
			return
		}
		const userObj = {userName, email, password}
		console.log(userObj)
		dispatch(addUser(userObj))
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