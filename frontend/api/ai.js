export const handleChat = async (userMessage , newHistory) => {
	const response = await fetch(`${import.meta.env.VITE_API_URL}/api/ai/chat` , {
			method : "POST",
			headers : {
				"Content-Type" : "application/json"
			},
			body : JSON.stringify({
				message : userMessage,
				history : newHistory
			})
		})
		const data = await response.json()
		if(!response.ok){
			throw Error(data.message || "Error in Ai chat")
		}
		return data
}
export const handleAnalytics = async (savedFlights  , currency = "INR") => {
	const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/ai/analytics`, {
		method : "POST",
		headers : {
			"content-type" : "application/json"
		},
		body : JSON.stringify({
			savedFlights , 
			currency
		})
	}
  )
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch analytics");
  }
  return data
}
export const handleAnalyticsDemo = (savedFlights , currency = "INR") => {
	console.log(savedFlights , currency)
	const data =  {
    success: true,
    hasData: true,
    analytics: {
      travelPersona: {
        title: "The Domestic Explorer",
        description:
          "This traveler frequently explores major Indian cities, preferring direct flights and planning well in advance to secure good deals.",
        badge: "Explorer",
      },
      priceInsights: {
        overallSignal: "buy_now",
        estimateSavingsPrecent: 25,
        bestTimeToBook:
          "3-6 months before departure for optimal savings, though booking further out can secure even better rates.",
      },
      tripRecommendations: [
        {
          city: "Bengaluru",
          iataCode: "BLR",
          reason:
            "Another major Indian metropolitan city and a popular domestic route, similar to Delhi and Mumbai.",
        },
        {
          city: "Hyderabad",
          iataCode: "HYD",
          reason:
            "A bustling tech hub and cultural center, offering a similar urban experience to their saved destinations.",
        },
        {
          city: "Kolkata",
          iataCode: "CCU",
          reason:
            "A historic and culturally rich major city, providing another excellent domestic travel option.",
        },
      ],
    },
  }
  return data
}