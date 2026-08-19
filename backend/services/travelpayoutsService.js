import axios from "axios";

const TRAVELPAYOUTS_URL = "https://api.travelpayouts.com";

export async function searchFlights(params) {
	console.log("Searching for flights..")
  const response = await axios.get(
    `${TRAVELPAYOUTS_URL}/aviasales/v3/prices_for_dates`,
    {
      params: {
        ...params,
        sorting: "price",
        direct: false,
        limit: 30,
        page: 1,
        token: process.env.TRAVELPAYOUTS_TOKEN,
      },
    },
  );
  return response.data;
}
