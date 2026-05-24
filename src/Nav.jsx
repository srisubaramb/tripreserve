import { Link } from "react-router-dom";
import Help from "./Help";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "./App";
import { LogOut, MenuIcon, X } from "lucide-react";

const Nav = () => {
	const {isAuth , setIsAuth} = useContext(AuthContext)
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const closeMenu = () => {
		setIsMenuOpen(false)
		setTimeout(() => {
			document.body.style.overflow = "auto"
		}, 300)
	}
	//hiding scroll bar
	useEffect(() => {
		if(isMenuOpen){
			document.body.style.overflow = "hidden"
		}
		
	}, [isMenuOpen])	
	const navLinkStyle = "relative w-fit after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full";
	function logOut() {
		localStorage.removeItem('user')
		setIsAuth(false)
	}
	return (
	<>
		
			<header className={`flex flex-col z-10  w-full justify-between mb-2 md:h-auto md:flex-row ${isMenuOpen ? 'h-screen' : 'h-auto'}`}>
					<div className="w-full flex justify-between md:w-auto bg-primary p-2 py-2.5">
						<div className="max-w-40">
							<Link to="." >
								<img className= "w-full" src="trip-reserve-logo.png" alt="TripReserve Logo" />
							</Link>
						</div>
						<button className="md:hidden" onClick={() => {setIsMenuOpen(perv => !perv)}}>
							{!isMenuOpen ? <MenuIcon /> : <X /> }
						</button>
					</div>
					<nav className={`flex-1 ${isMenuOpen ? 'flex' : 'hidden' } gap-y-3 flex-col  pl-2 p-3 pb-0 md:flex md:flex-row md:justify-between  bg-primary text-2xl md:text-lg`}>
					<ul className="flex   flex-col  gap-y-3   justify-center md:flex-1 md:flex-row md:self-end md:gap-x-4">
						<li><Link to={'/'} className={navLinkStyle} onClick={() => closeMenu()}>Home</Link></li>
						<li title='Search Flights'><Link to={'/search-flights'} className={navLinkStyle} onClick={() => closeMenu()}>Flights</Link></li>
						<li><Link to={'/about'} className={navLinkStyle} onClick={() => closeMenu()}>About Us</Link></li>
					</ul>
					<ul className="flex gap-y-3 pb-4 flex-col md:flex-row md:items-center md:gap-x-3">
						<li><Link to="/help"  className={navLinkStyle} onClick={() => closeMenu()}>Help</Link></li>
						{/**Favorite icon comes only after creating the account */}
						{ isAuth && <li>
								<Link to="./saved-flights" onClick={() => closeMenu()}>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="2rem" height="2rem"><path d="M10.23 4.072a4.77 4.77 0 0 0-6.62.577 5.51 5.51 0 0 0-1.39 5.408c.855 3.72 5.28 7.895 8.62 10.537a1.86 1.86 0 0 0 2.32 0c3.34-2.642 7.765-6.816 8.62-10.537a5.52 5.52 0 0 0-1.389-5.408 4.77 4.77 0 0 0-6.62-.577l-1.126.95a1 1 0 0 1-1.29 0z"></path></svg>
								</Link>
							</li> }
						{/**Profile / dashboard */}
						{isAuth && 
							<li> 
								<Link to="/dashboard" onClick={() => closeMenu()}>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="2rem" height="2rem" data-testid="LoggedOutIcon" ><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10M6.21 15.975A7.04 7.04 0 0 0 12 19a7.04 7.04 0 0 0 5.79-3.024c.427-.613.174-1.435-.5-1.762A12.06 12.06 0 0 0 12 13c-1.898 0-3.693.436-5.29 1.213-.673.327-.927 1.15-.5 1.762M10.994 5C10.17 5 9.5 5.618 9.5 6.381v2.31C9.5 9.965 10.62 11 12 11s2.5-1.035 2.5-2.31V6.382C14.5 5.618 13.83 5 13.005 5h-2.01z"></path></svg>
								</Link>
							</li>
						}
						{isAuth && <Link to="/login" className={navLinkStyle} onClick={() => logOut()}><LogOut /></Link>}
						{!isAuth && <Link to="/signup" className={navLinkStyle} onClick={() => closeMenu()}>Sign Up</Link>}
						{!isAuth && <Link to="/login" className={navLinkStyle} onClick={() => closeMenu()}>Login</Link>}
					</ul>
					</nav>
			</header>
	</>
	)
}
export default Nav;