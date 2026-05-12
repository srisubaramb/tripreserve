import { useEffect, useState } from "react";
import { getFlights } from "./utils";


function Search() {
	const [searchData, setSearchData] = useState({from : {name : '', iata : ''} , to : {name : '' , iata : ''} , depatureDate : ''})
	const [suggestion, setSuggestion] = useState([])
	const [activeField, setActiveField] = useState(null)
	const [airports, setAirports] = useState([])
	//Maintain the current Suggestion of the city using activeField
	const currentSuggestion = activeField === 'from' ? filterCity(searchData.from.name) : activeField === 'to' ? filterCity(searchData.to.name) : []
	useEffect(()=>{
		fetch("/airports.json")
		.then(response => response.json())
		.then(data => setAirports(data))
		.catch(e => console.log("can't fetch the airports list ", e))
	},[])
	function filterCity(city) {
		if (!city || airports.length == 0) return [];
		const searchTerm = city.toLowerCase()
		console.log("filter city called ", city)
		
		const airportsFound =  airports.filter(data => {
			//if iata is not there means the airport is govt or other purpose
			if(data.iata == "") return false;
			const city = data.city.toLowerCase().includes(searchTerm) 
			const iata =  data.iata.toLowerCase().includes(searchTerm)
			const name = data.name.toLowerCase().includes(searchTerm)
			return city || iata || name
		} ).slice(0,6)
		console.log(airportsFound)
		return airportsFound
	}
	function handleDropDownSelect(airpot) {
		setSearchData(perv => {
			return {...perv, [activeField] : {name : airpot.city , iata: airpot.iata}}
		})
		setActiveField(null)
	}
	async function handleSubmit(e) {
		e.preventDefault()
		const response = await getFlights(searchData)
		console.log(response)
	}
	return (                   	
		<div className="max-w-[96%] mx-auto mt-1 py-1 px-1 bg-white rounded-xl drop-shadow-sm">
			<form  onSubmit={(e) => {handleSubmit(e)}} className="flex justify-center items-center bg-white text-lg rounded-lg p-0.5 gap-1">
				{/*From input wrapper*/}
				<div className="flex-1 relative">
				<input name="from" type="text" placeholder="From?" required onChange={(e) => {setSearchData(data => (
					{...data, from : {...data.from , name : e.target.value}}
					))}} onFocus={() => setActiveField(() => 'from')} value={searchData.from.name}
					className="px-3 py-2 focus:outline-none"/>
				{activeField === 'from' && currentSuggestion.length > 0 && 
					<ul className="absolute mt-1 ml-1 px-2 py-1 bg-white w-[100%] rounded-md drop-shadow-md">
						{currentSuggestion.map((airpot,index) => <li key={index} onMouseDown={() => {handleDropDownSelect(airpot)}}
							className="border-b-gray-300 py-1 border-b-1  font-spartan last:border-b-0 cursor-pointer hover:bg-gray-50">
							{`${airpot.city} (${airpot?.iata})`}
						</li>)}
					</ul>
				}
				</div>
				<svg viewBox="0 0 200 200" width="1.25em" height="1.25em" xmlns="http://www.w3.org/2000/svg"  role="presentation"><path d="M56.238 154.801c-25.271-30.326-30.335-33.201-25-39.603l25-30l11.523 9.603L53.013 112.5H120v15H53.013l14.749 17.699l-11.524 9.602zm86.524-40l-11.523-9.603L145.987 87.5H80v-15h65.987l-14.749-17.699l11.523-9.603l25 30c5.335 6.403.272 9.278-24.999 39.603z"></path></svg>
				{/*to input wrapper*/}
				<div className="flex-1 relative">
				<input name="to" type="text" placeholder="to?" required onChange={(e) => {setSearchData(data => (
					{...data, to : {...data.to, name : e.target.value}}
					))}} onFocus={() => setActiveField('to')} value={searchData.to.name}
					className="px-3 py-2 focus:outline-none"/>
				{activeField === 'to' && currentSuggestion.length > 0 && 
					<ul className="absolute mt-1 ml-1 px-2 py-1 bg-white w-[100%] rounded-md drop-shadow-md">
						{currentSuggestion.map((airpot,index) => <li key={index} onMouseDown={() => {handleDropDownSelect(airpot)}}
							className="border-b-gray-300 py-1 border-b-1  font-spartan last:border-b-0 cursor-pointer hover:bg-gray-50">
							{`${airpot.city}(${airpot.iata})`}
						</li>)}
					</ul>}
				</div>
				{/*depature Date */}
				<input type="date" name="depature-date" id="depature-date" required onChange={(e) => {setSearchData(data => (
					{...data, depatureDate : e.target.value}
					))}}
					className="flex-1"/>
				<input type="submit" value="Search" className="bg-[#ffd600] rounded-xl px-3 font-spartan font-bold "/>
			</form>
		</div>
	)
}
export default Search;