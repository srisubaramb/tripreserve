import {z} from "zod"
export const travelAnalyticsSchema = z.object({
  // Personal badge metric
  travelPersona: z.object({
    title: z
      .string()
      .describe(
        "E.g., The Budget Backpacker, Weekend Adventurer, Luxury Hopper",
      ),
    description: z
      .string()
      .describe(
        "Short 1-2 sentence description of travel habits based on saved flights",
      ),
    badge: z
      .string()
      .describe("A short tag like 'Saver', 'Explorer', 'Frequent Flyer'"),
  }),
  //   price metric
  priceInsights: z.object({
    overallSignal: z
      .enum(["buy_now", "wait", "moderate"])
      .describe("Recommendation based on pricing trends"),
    estimateSavingsPrecent: z
      .number()
      .describe("Estimated percentage saved compared to average peak prices"),
    bestTimeToBook: z
      .string()
      .describe("Recommendation on days/weeks before departure to book"),
  }),
  tripRecommendations: z.array(
    z
      .object({
        city: z.string().describe("Suggested destination"),
        iataCode: z.string().describe("3-letter IATA code"),
        reason: z
          .string()
          .describe("Why this matches their saved flight history"),
      })
      .describe("2-3 similar alternative destination recommendations"),
  ),
});