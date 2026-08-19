import { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import "./App.css";
import Fav from "./Pages/Fav";
import Help from "./Pages/Help";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Nav from "../components/Nav";
import Profile from "./Pages/Profile";
import Search from "./Pages/Search";
import SignUp from "./Pages/Signup";
export const AuthContext = createContext(false);
function App() {
  const [isAuth, setIsAuth] = useState(false);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);
  return (
    <>
      <BrowserRouter>
        <AuthContext.Provider value={{ isAuth, setIsAuth }}>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/search-flights" element={<Search />} />
            <Route path="/saved-flights" element={<Fav />} />
            <Route path="/help" element={<Help />} />
            <Route path="/dashboard" element={<Profile />}></Route>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </AuthContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
