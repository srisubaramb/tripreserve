import { tool } from "@langchain/core/tools";
import { z } from "zod";
import { searchFlights } from "../services/travelpayoutsService.js";
export const searchFlightsTool = tool(
  async ({ origin, destination, departure_at, currency = "INR" }) => {
    try {
      const results = await searchFlights({
        origin,
        destination,
        departure_at,
        currency,
      });
      if (!results || results.length === 0) {
        return "No flights found for this route and date.";
      }
	  const flightList = results?.data || []
      const topFlights = flightList.slice(0, 5).map((flight) => ({
        airline: flight.airline,
        flightNumber: flight.flight_number,
        price: `${currency} ${flight.price}`,
        departure: flight.departure_at,
        transfers:
          flight.transfers === 0 ? "Direct" : `${flight.transfers} stops`,
        link: `https://www.aviasales.com${flight.link}`,
      }));
      return JSON.stringify(topFlights);
    } catch (error) {
      return `Failed to fetch flights: ${error.message}`;
    }
  },
  {
    name: "search_flights",
    description:
      "Searches for flights between two airport IATA codes (e.g., MAA for Chennai, DEL for Delhi, BOM for Mumbai) with an optional departure date.",
    schema: z.object({
      origin: z
        .string()
        .describe("3-letter IATA code of origin airport (e.g. MAA, DEL, BOM)"),
      destination: z
        .string()
        .describe(
          "3-letter IATA code of destination airport (e.g. SIN, DXB, LHR",
        ),
      depature_at: z
        .string()
        .describe("Departure date or month in YYYY-MM-DD or YYYY-MM format"),
    }),
    currency: z
      .string()
      .default("INR")
      .describe("3-letter currency code (e.g. INR, USD)"),
  },
);
