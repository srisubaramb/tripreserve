import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Nav from './Nav';
import Search from './Search';
import Fav from './Fav'
import Help from './Help';
import SignUp from './Signup';
import { createContext, useState } from 'react';
import Login from './Login';
import About from './About';
export const AuthContext = createContext(false)
function App() {
	const [isAuth, setIsAuth] = useState(false)
  return (
    <>
		<BrowserRouter >
			<AuthContext.Provider value={{isAuth, setIsAuth}}>
				<Nav />
				<Routes>
						<Route path='/' element={<Home/>}/>
						<Route path='/about' element={<About/>}/>
						<Route path='/search-flights' element={<Search/>} />
						<Route path='/saved-flights' element={<Fav />} />
						<Route path='/help' element={<Help/>} />
						<Route path='/signup' element={<SignUp />} />
						<Route path='/login' element={<Login />}></Route>
				</Routes>
			</AuthContext.Provider>
		</BrowserRouter>
	</>
  );
}

export default App;