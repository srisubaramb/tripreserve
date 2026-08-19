import airlines from "../src/assets/airlines.json";
async function getFlights(searchData) {
  // Other parameter to work on &return_at=2023-08 &unique=false &sorting=price &direct=false &cy=usd &limit=30 &page=1&one_way=true
  const params = new URLSearchParams({
    origin: searchData.from.iata,
    destination: searchData.to.iata,
    departure_at: searchData.depatureDate,
    currency: "inr",
    one_way: searchData.oneWay,
  });

  if (!searchData.oneWay) {
    params.append("return_at", searchData.returnDate);
  }

  const url = `http://localhost:5000/api/flights?${params.toString()}`;
  console.log(url);
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Http error status ${response.status}`);
    }
    const data = await response.json();
    console.log("FIRST FLIGHT:", data.data[0]);
    return data;
  } catch (e) {
    throw new Error(`Error is fetching flights: ${e}`);
    return {};
  }
}
function filterAriports(city, airports) {
  if (!city || airports.length == 0) return [];
  const searchTerm = city.toLowerCase();

  const airportsFound = airports
    .filter((data) => {
      //if iata is not there means the airport is govt or other purpose
      if (data.iata == "") return false;
      const city = data.city.toLowerCase().includes(searchTerm);
      const iata = data.iata.toLowerCase().includes(searchTerm);
      const name = data.name.toLowerCase().includes(searchTerm);
      return city || iata || name;
    })
    .slice(0, 6);
  return airportsFound;
}
function currencyCodeToSymbol(currency, price) {
  const priceFormated = new Intl.NumberFormat("en", {
    style: "currency",
    currency,
  }).format(price);
  return priceFormated;
}
function airlineCodeToName(code) {
  const airlineName = airlines.find((data) => data.id == code);
  return airlineName.name;
}
function airlineCodeToImage(code) {
  const airline = airlines.find((data) => data.id == code);
  return airline.logo;
}
function airlineCodeToDetails(code) {
  const airline = airlines.find((data) => data.id == code);
  return airline;
}

export {
  airlineCodeToDetails,
  airlineCodeToImage,
  airlineCodeToName,
  currencyCodeToSymbol,
  filterAriports,
  getFlights,
};
