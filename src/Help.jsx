import { ArrowRight,  Info, Lock, Search,  Ticket } from "lucide-react";
import { Link } from "react-router-dom";

const Article = ({icon, title}) => {
	return (
		<Link className="flex flex-col gap-y-4  items-start p-2 px-4 rounded-xl group hover:border-3 hover:border-primary  ">
			{icon}
			<h2 className="text-3xl">{title}</h2>
			<p className="text-xl flex items-center">Learn More<ArrowRight className="group-hover:translate-x-4"/></p>
		</Link>
	)
}
function Help(){
	return (
		<>
			<div className="h-[50vh] bg-primary text-white flex flex-col items-center justify-center gap-y-1">
				<div className="flex flex-col items-center gap-y-1">
					<h2 className="text-7xl uppercase ">How can we help?</h2>
					<p className="text-xl">Search for answers or find help</p>
				</div>
				<form action="" className="flex justify-center w-full ">
					<input className="bg-white text-gray-500  p-2 w-[50%] pl-3 rounded-xl focus:outline-0 text-xl" type="text" placeholder="Search for something"/>
				</form>
			</div>
			<div className="px-3 py-5 ">
				<h2 className="text-3xl font-roboto font-[600]">Browse articles by topic</h2>
				<div className="p-4 flex flex-col gap-y-2">
					<Article icon={<Search size={40}/>} title="Searching Flights"/>
					<Article icon={<Ticket size={40}/>} title="Bookings"/>
					<Article icon={<Info size={40}/>} title="About"/>
					<Article icon={<Lock size={40}/>} title="Privacy & Trust"/>
				</div>
			</div>
		</>
	)
}
export default Help;