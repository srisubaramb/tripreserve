import { useSelector } from "react-redux";
import FlightsDisplay from "./FlightsDisplay";
import waitingImg from "./assets/waiting-for-you.svg"
function Fav() {
	const savedFlights = useSelector(state => state.flights.savedFlights)
	const currency = useSelector(state => state.flights.currency)
	console.log(savedFlights)
	return (
		<div className="flex flex-col items-center">
			<h2 className="text-2xl my-1 mt-4  text-gray-500 text-center">Your Favorites</h2>
			{ savedFlights.length > 0 ? 
			<FlightsDisplay data={savedFlights} currency={currency} isFav={true}/> :
				<div className="w-[70%] max-w-[540px] flex flex-col items-center">
					<img src={waitingImg} alt="" className="w-[90%]" />
					<p className="text-center">No Flights In your List</p>
				</div>
			}
		</div>
	)
}
export default Fav;