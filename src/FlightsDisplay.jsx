import { useState } from "react"
import { airlineCodeToDetails, currencyCodeToSymbol } from "./utils"
import { useDispatch } from "react-redux"
import { removeFlightFromFav, saveFlightToFav } from "./flightSlices"

function FlightsDisplay({data,currency, isFav}) {
	const safeValue = (value) => isNaN(value) ? 'XX' : value
	const dispatch = useDispatch()
	function saveFlight(index) {
		//condition to handle the mock flight result
		if(data[index].departure_at == '')  {
			return
		}
		dispatch(saveFlightToFav(data[index]))
	}
	return (
		<div className="flex flex-col gap-y-2 w-[90%] mx-auto my-2">
			{data.map((flight,index) => {
					const airlineDetails = airlineCodeToDetails(flight.airline)
					const depatureDateTime = new Date(flight.departure_at)
					const arivalTime = new Date(depatureDateTime)
					arivalTime.setMinutes(depatureDateTime.getMinutes() + flight.duration)
					const redirectUrl = `https://www.aviasales.com${flight.link}`
					const depatureDate = `${safeValue(depatureDateTime.getDate())}/${safeValue(depatureDateTime.getMonth() + 1)}/${safeValue(depatureDateTime.getFullYear())}`
					const depatureTimeText = `${safeValue(depatureDateTime.getHours())}:${safeValue(depatureDateTime.getMinutes())}`
					const arivalTimeText = `${safeValue(arivalTime.getHours())}:${safeValue(arivalTime.getMinutes())}`
					const diffM =arivalTime - depatureDateTime
					const totalMinutes = Math.floor(diffM / 1000 / 60)
					const hours = Math.floor(totalMinutes / 60)
					const minutes = totalMinutes % 60;
					return (
						<div key={index} className="flex gap-x-2 justify-center px-2 py-5 drop-shadow-md rounded-2xl bg-white">
							<div>
								<img src={airlineDetails.logo} alt= {airlineDetails.name}/>
							</div>
							<div className="flex flex-col flex-1 px-3 gap-y-1 ">
								<div className="flex justify-between">
									<p>{depatureTimeText}</p> 
									<p className="opacity-60">{isNaN(hours) ? 'XX ' : hours}hrs {isNaN(minutes) ? 'XX' : minutes}Min</p>
									<p>{arivalTimeText}</p>
								</div>
								<div className="flex justify-between opacity-60">
									<p className="ml-0.5">{flight.origin_airport}</p>
										<div className="border-gray w-90 h-[1px] border-1 relative"></div>
									<p className="mr-0.5">{flight.destination_airport}</p>
								</div>
								<p className="text-center">{depatureDate}</p>
							</div>
							<div className="flex flex-col gap-y-1 justify-center items-center ">
								<p className="text-2xl">{currencyCodeToSymbol(currency, flight.price)}</p>
								<a 
									href={redirectUrl}
									target="_blank"
									rel="noopener"
									className="bg-primary px-2 py-1 rounded-md text-md whitespace-nowrap"
									>View Flight</a>
									{!isFav ? <button onClick={() => saveFlight(index)}>Save</button> : <button onClick={() => dispatch(removeFlightFromFav(index))}>Remove</button>}
							</div>
						</div>)
				}				
			) }
		</div>
	)
}
export default FlightsDisplay;
    // {
    //         "flight_number": "7185",
    //         "link": "/search/MAA1805IXM1?t=6E17790996001779104700000085MAAIXM_f357fc87c27e2456ed35de7aa1f913be_4748&search_date=08052026&expected_price_uuid=019e09ab-ac66-8030-a154-82db63a1cb18&static_fare_key=TY%7CP0%7CH1%7CL1_1_15%7CCH0%7CR0%7CTBC1&expected_price_source=share&expected_price_currency=usd&expected_price=64",
    //         "origin_airport": "MAA",
    //         "destination_airport": "IXM",
    //         "departure_at": "2026-05-18T10:20:00+05:30",
    //         "airline": "6E",
    //         "destination": "IXM",
    //         "origin": "MAA",
    //         "price": 64,
    //         "gate": "Trip.com",
    //         "return_transfers": 0,
    //         "duration": 85,
    //         "duration_to": 85,
    //         "duration_back": 0,
    //         "transfers": 0
    //     } 