import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthPage from "../../components/AuthPage";
import { signupUser } from "../../api/auth";


export const FormInput = ({ type, name, id, placeholder, value , ...props}) => {
  return (
    <input
		{...props}
      type={type || undefined}
      name={name || undefined}
      id={id || undefined}
      placeholder={placeholder || undefined}
      className={"p-2 py-3 block border-1 m-1 rounded-xl text-lg"}
    />
  );
};
export const FormButton = ({ type = "submit", value = "Submit" }) => (
  <input
    type={type}
    value={value}
    className="p-2 py-3 block border-1 m-1 rounded-xl text-lg bg-primary"
  />
);
const Form = ({ funcToCall }) => (
  <form onSubmit={(e) => funcToCall(e)} className="flex flex-col w-[100%]">
    <FormInput
      type="text"
      name="username"
      id="username"
      placeholder="username"
    />
    <FormInput type="email" name="email" id="email" placeholder="Email" />
    <FormInput
      type="password"
      name="password"
      id="password"
      placeholder="Password"
    />
    <FormInput
      type="password"
      name="confirmPassword"
      id="confirm-password"
      placeholder="Confirm Password"
    />
    <FormButton type="submit" value="Create account" />
  </form>
);
function SignUp() {
  const navigate = useNavigate();
  const [signupStatus, setSignupStatus] = useState({ msg: "", status: false });
  async function userSignup(e) {
    e.preventDefault();
    const userName = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    if (userName == "") {
      showStatus("UserName can't be empty");
      return;
    }
    if (password != confirmPassword) {
      showStatus("Confirm Password must match!");
      return;
    }
	try {
		const data = await signupUser({
			name : userName,
			email : email,
			password : password
		})
		localStorage.setItem("token" , data.token)
		localStorage.setItem("user" , JSON.stringify(data.user))
		showStatus("Account created successfully " , true)
		setTimeout(() => {
			navigate("/")
		} , 1000)
	} catch(error) {
		showStatus(error.message, false);
	}
  }
  function showStatus(msg, status) {
    setSignupStatus({ msg, status });

    setTimeout(() => {
      setSignupStatus({
        msg: "",
        status: false,
      });
    }, 3000);
  }
  return (
    <AuthPage
      Form={Form}
      status={signupStatus}
      funcToCall={userSignup}
      heading={"Create an account"}
    />
  );
}
export default SignUp;
