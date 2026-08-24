const signals = {
	buy_now : {
		label : "Buy Now"
	},
	wait : {
		label : "Wait to Book"
	},
	moderate : {
		label : "Fair Price"
	}
}
export default function PriceInsights({insights}) {
	const signal = signals[insights.overallSignal] || signals.moderate
	return (
      <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm">
        <div className="flex flex-col justify-between gap-2">
          <div className="flex gap-x-2 items-center">
            <span className="text-sm uppercase tracking-wider px-3 py-1 font-semibold bg-primary text-black rounded-full">
              {signal.label}
            </span>
            <span className="text-sm font-medium">Booking Signal</span>
          </div>
          <h3 className="text-3xl font-bold mb-2 text-primary">
            ~{insights.estimateSavingsPrecent}%
          </h3>
          <div className="text-xs text-gray-500 font-medium">
            Potential Estimated Savings
          </div>
          <p className="leading-relaxed">
            {" "}
            <span className="font-semibold text-gray-900">Timing: </span>
            {insights.bestTimeToBook}
          </p>
        </div>
      </div>
  );
}
