const {VITE_token, VITE_id} = import.meta.env
async function getFlights(searchData){
	// Other parameter to work on &return_at=2023-08 &unique=false &sorting=price &direct=false &cy=usd &limit=30 &page=1&one_way=true
	const url = `/api/aviasales/v3/prices_for_dates?
	origin=${searchData.from.iata}&destination=${searchData.to.iata}&departure_at=${searchData.depatureDate}&cy=usd&token=${VITE_token}`
	try{
		const response = await fetch(url)
		if(!response.ok){
			throw new Error(`Http error status ${response.status}`)
		}
		const data = await response.json()
		return data
	}catch(e) {
		throw new Error(`Error is fetching flights: ${e}`)
		return {}
	}
	
}
export {getFlights}