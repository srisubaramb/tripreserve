import { searchFlights } from "../services/travelpayoutsService.js";

export async function getFlights(req, res) {
  try {
    const {
      origin,
      destination,
      departure_at,
      return_at,
      currency = "inr",
      one_way = true,
    } = req.query;
    const data = await searchFlights({
      origin,
      destination,
      departure_at,
      return_at,
      currency,
      one_way,
    });
    res.json(data);
  } catch (error) {
    console.error("Flight search error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch flights",
    });
  }
}
