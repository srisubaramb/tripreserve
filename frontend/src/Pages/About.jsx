import { ArrowRight,  Info, Lock, Search,  Ticket } from "lucide-react";
import { Link } from "react-router-dom";

const Article = ({ icon, title, desc }) => {
	return (
		<div className="
			flex flex-col gap-y-4
			p-6
			rounded-2xl
			bg-white
			hover:border-primary
			hover:shadow-xl
			transition-all
			duration-300
			group
		">
			<div className="
				w-16 h-16
				rounded-full
				bg-primary/10
				flex items-center justify-center
			">
				{icon}
			</div>

			<h2 className="text-3xl font-semibold">
				{title}
			</h2>

			<p className="text-gray-500 text-lg">
				{desc}
			</p>

			
		</div>
	)
}
function About(){
	return (
		<>
			<div className="h-[50vh] bg-primary text-white flex flex-col items-center justify-center gap-y-1">
				<div className="flex flex-col items-center gap-y-1">
					<h2 className="text-7xl uppercase ">Who Are we? </h2>
					<p className="text-xl">One stop Solution for finding flight</p>
				</div>
			</div>
			<div className="px-3 py-5 ">
				<h2 className="text-3xl font-roboto font-[600]">Explore TripReserve</h2>
				<div className="p-4 grid md:grid-cols-2 gap-4">
					<Article 
						icon={<Search size={40}/>} 
						title="Smart Flight Search"
						desc="Find the best routes, prices, and travel options instantly."
					/>

					<Article 
						icon={<Ticket size={40}/>} 
						title="Easy Booking"
						desc="Book your flights quickly with a simple and smooth process."
					/>

					<Article 
						icon={<Info size={40}/>} 
						title="Who We Are"
						desc="Learn about TripReserve and our mission to simplify travel."
					/>

					<Article 
						icon={<Lock size={40}/>} 
						title="Privacy & Trust"
						desc="Your personal data and bookings are protected with care."
					/>
				</div>
			</div>
		</>
	)
}
export default About;