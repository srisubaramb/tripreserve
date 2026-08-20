import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/auth";
import AuthPage from "../../components/AuthPage";
import { AuthContext } from "../App";
import { FormButton, FormInput } from "./Signup";

function Login() {
  const [loginStatus, setLoginStatus] = useState({ msg: "", status: false });
  const navigate = useNavigate();
  const { setIsAuth } = useContext(AuthContext);
  const Form = ({ funcToCall }) => (
    <form onSubmit={(e) => funcToCall(e)} className="flex flex-col">
      <FormInput type="email" name="email" id="email" placeholder="Email"  autoComplete="email"/>
      <FormInput
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        autoComplete="current-password"
      />
      <FormButton type="submit" value="Login" />
    </form>
  );
  async function userLogin(e) {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const data = await loginUser({
        email,
        password,
      });
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      showStatus("Login Successful", true);

      console.log("You logged in");
      setIsAuth(true);
      setTimeout(() => {
        navigate("/");
      }, 500);
    } catch (error) {
      showStatus(error.message, false);
    }
  }
  function showStatus(msg, status) {
    setLoginStatus({ msg, status });

    setTimeout(() => {
      setLoginStatus({
        msg: "",
        status: false,
      });
    }, 3000);
  }
  return (
    <>
      <AuthPage
        Form={Form}
        funcToCall={userLogin}
        status={loginStatus}
        heading={"Login to account"}
      />
    </>
  );
}
export default Login;
