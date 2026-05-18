import { useEffect, useState } from "react";
import { filterAriports, getFlights } from "./utils";
import SearchInput from "./SearchInput";
import FlightsDisplay from "./FlightsDisplay";
import flightsAvaliable from "./defaultFlights"
import { useDispatch } from "react-redux";
import { setCurrency } from "./flightSlices";
function Search() {
	const [searchData, setSearchData] = useState({from : {name : 'Chennai', iata : 'MAA'} , to : {name : 'Madurai' , iata : 'IXM'} , depatureDate : '', returnDate:'' , oneWay : true})
	const [suggestion, setSuggestion] = useState([])
	const [activeField, setActiveField] = useState(null)
	const [airports, setAirports] = useState([])
	const [flights, setFlights] = useState(flightsAvaliable)
	const dispatch = useDispatch()
	//Maintain the current Suggestion of the city using activeField
	const currentSuggestion = activeField === 'from' ? filterAriports(searchData.from.name,airports) : 
							  activeField === 'to' ? filterAriports(searchData.to.name,airports) : []
	useEffect(()=>{
		fetch("/airports.json")
		.then(response => response.json())
		.then(data => setAirports(data))
		.catch(e => console.log("can't fetch the airports list ", e))
	},[])
	
	function handleDropDownSelect(airpot) {
		setSearchData(perv => {
			return {...perv, [activeField] : {name : airpot.city , iata: airpot.iata}}
		})
		setActiveField(null)
	}
	async function handleSubmit(e) {
		e.preventDefault()
		const response = await getFlights(searchData)
		dispatch(setCurrency(response.currency))
		setFlights(response)
		
	}
	return (
		<>
		<div className="max-w-[96%] mx-auto mt-2 py-1 px-1">
			<div className="text-gray-500 mb-2 font-spartan">
				<span className={`px-4 py-1 cursor-pointer ${
            searchData.oneWay ? 'border-b-1 text-black': '' 
        }`} onMouseDown={() => {setSearchData(perv => {return {...perv, oneWay : true}})}}>One Way</span>
				<span  className={`px-4 py-1 cursor-pointer ${
            !searchData.oneWay ? 'border-b-1 text-black': '' 
        }`} onMouseDown={() => {setSearchData(perv => {return {...perv, oneWay : false}})}}>Return trip</span>
			</div>
		<div className=" bg-white rounded-xl drop-shadow-sm">
			<form  onSubmit={(e) => {handleSubmit(e)}} className="flex flex-col justify-center  bg-white text-lg rounded-lg p-0.5 gap-4 md:flex-row md:items-center md:gap-1">
				{/*From input wrapper*/}
				<div className="flex-1 relative">
					<SearchInput inputDetails={{name: "from" , placeholder:"From ?"}} option={'from'} requirements={{searchData, setSearchData, activeField, setActiveField, currentSuggestion, handleDropDownSelect}}/>
				</div>
				<svg className="rotate-90 self-center -my-3 md:rotate-0 " viewBox="0 0 200 200" width="1.25em" height="1.25em" xmlns="http://www.w3.org/2000/svg"  role="presentation"><path d="M56.238 154.801c-25.271-30.326-30.335-33.201-25-39.603l25-30l11.523 9.603L53.013 112.5H120v15H53.013l14.749 17.699l-11.524 9.602zm86.524-40l-11.523-9.603L145.987 87.5H80v-15h65.987l-14.749-17.699l11.523-9.603l25 30c5.335 6.403.272 9.278-24.999 39.603z"></path></svg>
				{/*to input wrapper*/}
				<div className="flex-1 relative">
					<SearchInput inputDetails={{name: 'to', placeholder:'To ?'}} option={'to'} requirements={{searchData, setSearchData, activeField, setActiveField, currentSuggestion, handleDropDownSelect}}/>
				</div>
				{/*depature Date */}
				<div className="flex flex-col">
					<label className="text-xs text-gray-500 mb-1 ml-1 font-semibold">Departure</label>
					<input type="month" name="depature-date" id="depature-date"  required onChange={(e) => {setSearchData(data => (
					{...data, depatureDate : e.target.value}
					))}}
					/>
				</div>
				{!searchData.oneWay && 
				<div className="flex flex-col">
					<label className="text-xs text-gray-500 mb-1 ml-1 font-semibold">Return</label>
					<input type="month" name="return-date" id="return-date" required onChange={(e) => {setSearchData(data => (
					{...data, returnDate : e.target.value}
					))}}
					/>
				</div>
					}
				<input type="submit" value="Search" className="bg-primary rounded-xl px-3 font-spartan font-bold "/>
			</form>
		</div>
		</div>
		{flights.data.length > 0 && <FlightsDisplay data={flights.data} currency={flights.currency} searchData={searchData}/>}
		</>
	)
}
export default Search;