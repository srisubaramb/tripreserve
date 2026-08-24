import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { handleAnalytics } from "../../api/ai";
import Persona from "../../components/analytics/Persona";
import PriceInsights from "../../components/analytics/PriceInsights";
import RecommendedDestinations from "../../components/analytics/RecommendedDestinations";
export default function Analytics() {
  const [analytics, setAnalytics] = useState(null);
  const [hasData , setHasData] = useState(false)
  const savedFlights = useSelector((state) => state.flights.savedFlights);
  const currency = useSelector((state) => state.flights.currency);

  useEffect(() => {
    async function getAnalytics() {
      const response = await handleAnalytics(savedFlights, currency);
      setAnalytics(response.analytics);
	  setHasData(response.hasData)
    }
    getAnalytics();
  }, []);
  if(!savedFlights || savedFlights.lenght < 0){
	return <div>No Flights found in saved list</div>
  }
  if (!analytics) {
    return <div>Loading analytics...</div>;
  }
  return (
    <div className="flex flex-col gap-y-3 p-3 pb-5">
      <Persona persona={analytics.travelPersona} />
      <PriceInsights insights={analytics.priceInsights} />
      <RecommendedDestinations
        recommendations={analytics.tripRecommendations}
      />
    </div>
  );
}
