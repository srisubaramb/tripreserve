const {VITE_token, VITE_id} = import.meta.env
import airlines from './airlines.json'
async function getFlights(searchData){
	// Other parameter to work on &return_at=2023-08 &unique=false &sorting=price &direct=false &cy=usd &limit=30 &page=1&one_way=true
	const url = `/api/aviasales/v3/prices_for_dates?
	origin=${searchData.from.iata}&destination=${searchData.to.iata}&departure_at=${searchData.depatureDate}${!searchData.oneWay ? `&return_at=${searchData.returnDate}` : ''}&currency=inr&token=${VITE_token}&one_way=${searchData.oneWay}`
	console.log(url)
	try{
		const response = await fetch(url)
		if(!response.ok){
			throw new Error(`Http error status ${response.status}`)
		}
		const data = await response.json()
		console.log(data)
		return data
	}catch(e) {
		throw new Error(`Error is fetching flights: ${e}`)
		return {}
	}
	
}
function filterAriports(city, airports) {
		if (!city || airports.length == 0) return [];
		const searchTerm = city.toLowerCase()
		
		const airportsFound =  airports.filter(data => {
			//if iata is not there means the airport is govt or other purpose
			if(data.iata == "") return false;
			const city = data.city.toLowerCase().includes(searchTerm) 
			const iata =  data.iata.toLowerCase().includes(searchTerm)
			const name = data.name.toLowerCase().includes(searchTerm)
			return city || iata || name
		} ).slice(0,6)
		return airportsFound
}
function currencyCodeToSymbol(currency, price) {
	const priceFormated = new Intl.NumberFormat('en' , {
		style : 'currency',
		currency
	}).format(price)
	return priceFormated
}
function airlineCodeToName(code) {
	const airlineName = airlines.find(data => data.id == code)
	return airlineName.name
}
function airlineCodeToImage(code) {
	const airline = airlines.find(data => data.id == code)
	return airline.logo
}
function airlineCodeToDetails(code) {
	const airline = airlines.find(data => data.id == code)
	return airline
}

export {getFlights, filterAriports, currencyCodeToSymbol, airlineCodeToDetails, airlineCodeToName, airlineCodeToImage}