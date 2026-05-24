import { Link } from 'react-router-dom';
import aeroplane from './assets/aeroplane.png'
function Home() {
	const Features = ({title, desc}) => {
		return (
				<div className=" bg-white backdrop-blur-sm p-6 rounded-2xl ">
					<h3 className="text-4xl font-bold text-primary">{title}</h3>
					<p className="mt-3 opacity-75">{desc}</p>
				</div>
		)
	}
	return (
		<>
			<section className="px-2">
				<div className="bg-[url('/sky-bg.png')] h-[70vh] bg-cover rounded-xl flex items-center justify-center">
					<div className="bg-white h-[75%] w-[95%] rounded-xl flex justify-between max-w-[1200px] p-3 relative">
						<div className="flex flex-col justify-between">
							<p className="mt-5 text-md opacity-75">
								_Explore the world without boundaries, Fly farther. Explore deeper.
							</p>
							<p className="text-6xl uppercase font-poppins font-bold ">
								Travel <span className='block'>Around</span>the world
							</p>
						</div>
						<div className="bg-[url('/sky-bg.png')] h-[100%] w-[60%] bg-cover rounded-xl max-w-[500px]">
							
						</div>
						<img className="absolute bottom-1/2 translate-y-1/2 right-1 w-[50%] " src={aeroplane} alt="aeroplane image" />
					</div>
				</div>
			</section>
			<section className="px-2 mt-6">
				<div className="bg-gray-200 text-black rounded-xl p-8 max-w-[1400px] mx-auto ">
					<div className="flex flex-col md:flex-row justify-between gap-2">
						<div className="flex flex-col items-start max-w-[500px]">
							<p className="uppercase tracking-[4px] text-primary mb-4">Why TripReserve</p>

							<h2 className=" text-5xl leading-tight">
								Your Journey
								<span className="block text-primary">
									Starts Here
								</span>
							</h2>
							<p className="mt-6 text-lg opacity-70">
								Search flights, compare prices, and reserve your next
								adventure with a fast and seamless experience.
							</p>
							<Link className=" mt-5 	bg-primary	text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform " to='/search-flights'>
								Explore Flights
							</Link>
						</div>
						<div className=" grid 	grid-cols-2 gap-4 flex-1 ">
							<Features title={'250+'} desc={'Airlines connected worldwide'} />
							<Features title={'1M+'} desc={'Happy Travelers Every Year'} />
							<Features title={'24/7'} desc={'Customer Support Assistance'} />
							<Features title={'100+'} desc={'Countries Ready To Explore'} />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
export default Home;