import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { travelAnalyticsSchema } from "../schemas/analyticsSchema.js";
import { ANALYTICS_SYSTEM_PROMPT } from "../prompts/systemPrompt.js";

const llm = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash",
  temperature: 0.1,
});

const structuredAnalyticsModel = llm.withStructuredOutput(
  travelAnalyticsSchema,
);

export const analytics = async (savedFlights = [], currency = "INR") => {
  const flightSummary = savedFlights.map((flight, index) => ({
    index: index + 1,
    airline: flight.airline || "unknown",
    flightNumber: flight.flight_number || flight.flightNumber || "N/A",
    price: flight.price,
    currency,
    departure: flight.departure_at || "N/A",
    transfers: flight.transfers,
    origin: flight.origin,
    destination: flight.destination,
  }));
  const promptMessage = new HumanMessage(
    `Here is the user's current flight profile and saved favorites list:
	${JSON.stringify(flightSummary, null, 2)}

	Active Preferred Currency: ${currency}

	Generate the comprehensive analytics report matching the required schema.`,
  );
  const analyticsReport = await structuredAnalyticsModel.invoke([
	new SystemMessage(ANALYTICS_SYSTEM_PROMPT),
	promptMessage
  ])
  return analyticsReport
};
