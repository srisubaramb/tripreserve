import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "../components/Nav";
import "./App.css";
import About from "./Pages/About";
import Fav from "./Pages/Fav";
import Help from "./Pages/Help";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Search from "./Pages/Search";
import SignUp from "./Pages/Signup";
import Footer from "../components/Footer";
import { FloatingChat } from "../components/FloatingChat";
import Analytics from "./Pages/Analytics";
export const AuthContext = createContext(false);
function App() {
	// checking the token is expired or not
  function checkToken() {
    const token = localStorage.getItem("token");
    if (!token) return false;
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      const isExpired = payload.exp * 1000 < Date.now();
      if (isExpired) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        return false;
      }
      return true;
    } catch (error) {
      localStorage.removeItem("token");
      return false;
    }
  }
  const [isAuth, setIsAuth] = useState(checkToken());
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <BrowserRouter>
          <AuthContext.Provider value={{ isAuth, setIsAuth }}>
            <Nav />
            <main className="flex-1 flex flex-col">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/search-flights" element={<Search />} />
                <Route path="/saved-flights" element={<Fav />} />
                <Route path="/help" element={<Help />} />
                <Route path="/dashboard" element={<Profile />}></Route>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />}></Route>
				<Route path="/analytics" element={<Analytics />} />
              </Routes>
			  <FloatingChat />
            </main>
              <Footer />
          </AuthContext.Provider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
