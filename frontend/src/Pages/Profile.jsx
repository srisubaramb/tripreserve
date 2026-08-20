import { useSelector } from "react-redux";
import FlightsDisplay from "../../components/FlightsDisplay";
import waitingImg from "../assets/waiting-for-you.svg";

function Profile() {
  // 1. Retrieve the logged-in user's details from local storage
  const userObj = JSON.parse(localStorage.getItem("user"));

  // 2. Retrieve saved flights and currency preferences from the Redux store
  const savedFlights = useSelector((state) => state.flights.savedFlights);
  const currency = useSelector((state) => state.flights.currency);

  return (
    <div className="max-w-[1200px] mx-auto p-4 md:p-8">
      <h1 className="text-4xl font-bold text-primary mb-8">My Profile</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/*  User Info & AI Placeholder */}
        <div className="md:col-span-1 flex flex-col gap-6">
          {/* Account Details Card */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Account Details
            </h2>
            {userObj ? (
              <div className="flex flex-col gap-3 text-lg">
                <p>
                  <span className="font-medium text-gray-500">Name: </span>
                  {userObj.name}
                </p>
                <p>
                  <span className="font-medium text-gray-500">Email: </span>
                  {userObj.email}
                </p>
              </div>
            ) : (
              <p className="text-gray-500">Please log in to view details.</p>
            )}
          </div>

          {/* AI Feature Placeholder Card */}
          <div className="bg-gradient-to-br from-primary to-yellow-400 p-6 rounded-2xl shadow-sm text-black">
            <h2 className="text-2xl font-bold mb-2">TripReserve AI ✨</h2>
            <p className="opacity-80 text-sm mb-4">
              Your smart travel assistant is currently in training. Get ready
              for personalized generative AI itineraries and smart flight
              insights!
            </p>
            <button
              disabled
              className="px-4 py-2 bg-black text-white rounded-xl font-semibold opacity-60 cursor-not-allowed w-full"
            >
              Coming Soon
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Saved Flights Display */}
        <div className="md:col-span-2 bg-gray-50 p-6 rounded-2xl border border-gray-200">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Your Favorite Flights
          </h2>

          <div className="flex flex-col items-center w-full">
            {savedFlights.length > 0 ? (
              <FlightsDisplay
                data={savedFlights}
                currency={currency}
                isFav={true}
              />
            ) : (
              <div className="w-[70%] max-w-[400px] flex flex-col items-center mt-4">
                <img
                  src={waitingImg}
                  alt="Waiting for flights"
                  className="w-[90%] opacity-90"
                />
                <p className="text-center text-gray-500 mt-4 text-lg">
                  No Flights In Your List
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
