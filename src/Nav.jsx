const Nav = () => {
	return (
	<>
		<header className="flex justify-between items-center px-4 py-5 bg-[#ffd600]">
			<div className="max-w-40">
				<a href=".">
					<img className= "w-full" src="trip-reserve-logo.png" alt="TripReserve Logo" />
				</a>
			</div>
			<nav >
				<ul className="flex gap-3.5 items-center">
					<li><a href="" className="font-spartan font-[700] text-lg">Help</a></li>
					<li>
						<a href="">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="2rem" height="2rem"><path d="M10.23 4.072a4.77 4.77 0 0 0-6.62.577 5.51 5.51 0 0 0-1.39 5.408c.855 3.72 5.28 7.895 8.62 10.537a1.86 1.86 0 0 0 2.32 0c3.34-2.642 7.765-6.816 8.62-10.537a5.52 5.52 0 0 0-1.389-5.408 4.77 4.77 0 0 0-6.62-.577l-1.126.95a1 1 0 0 1-1.29 0z"></path></svg>
						</a>
					</li>
					<li>
						<a href="">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="2rem" height="2rem" data-testid="LoggedOutIcon" ><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10M6.21 15.975A7.04 7.04 0 0 0 12 19a7.04 7.04 0 0 0 5.79-3.024c.427-.613.174-1.435-.5-1.762A12.06 12.06 0 0 0 12 13c-1.898 0-3.693.436-5.29 1.213-.673.327-.927 1.15-.5 1.762M10.994 5C10.17 5 9.5 5.618 9.5 6.381v2.31C9.5 9.965 10.62 11 12 11s2.5-1.035 2.5-2.31V6.382C14.5 5.618 13.83 5 13.005 5h-2.01z"></path></svg>
							</a>
					</li>
				</ul>
			</nav>
		</header>
	</>
	)
}
export default Nav;