export default function RecommendedDestinations({ recommendations = [] }) {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm">
      <h3 className="text-lg font-bold text-gray-800 mb-4">
        AI Recommended Destinations
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {recommendations.map((dest, index) => (
          <div
            key={index}
            className="p-4 rounded-xl border border-gray-100 from-gray-50 to-white flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-gray-900 text-base">{dest.city}</span>
                <span className="text-xs font-bold text-primary bg-yellow-100 px-2 py-0.5 rounded">
                  {dest.iataCode}
                </span>
              </div>
              <p className="text-xs text-gray-600 mb-4 leading-relaxed">{dest.reason}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
