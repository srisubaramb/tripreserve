import { useContext, useState } from "react"
import { useSelector } from "react-redux"
import AuthPage from "./AuthPage"
import { FormButton, FormInput } from "./Signup"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "./App"


function Login() {
	const users = useSelector(state => state.users.users)
	const [loginStatus, setLoginStatus] = useState({msg : '' , status : false})
	const navigate = useNavigate()
	const {setIsAuth} = useContext(AuthContext)
	const Form = ({funcToCall}) => (
		<form onSubmit={(e) => funcToCall(e)} className="flex flex-col">
			<FormInput type="email" name="email" id="email" placeholder="Email"/>
			<FormInput type="password" name="password" id="password" placeholder="Password"/>
			<FormButton type="submit" value="Login" />
		</form>
	)
	function userLogin(e) {
		e.preventDefault()

		const email = e.target.email.value
		const password = e.target.password.value

		const foundUser = users.find(user => user.email === email)

		if (!foundUser) {
			showStatus( 'Email not found', false)
			return
		}

		if (foundUser.password !== password) {
			showStatus('Password is Wrong', false)
			return
		}

		localStorage.setItem('user', JSON.stringify(foundUser))

		showStatus('Login Successful',true)
		
		console.log("You logged in")
		setIsAuth(true)
		navigate('/')
	}
		function showStatus(msg, status) {
			setLoginStatus({ msg, status })

			setTimeout(() => {
				setLoginStatus({
					msg: '',
					status: false
				})
			}, 3000)
		}
	return (
		<>
			<AuthPage Form={Form} funcToCall = {userLogin} status={loginStatus}  heading={'Login to account'}/>
		</>
	)
}
export default Login;