import { Link, useLocation } from 'react-router-dom';
import bgImage from './assets/bg-image-1.png'
function AuthPage({Form, status, funcToCall, heading}) {
	const location = useLocation()
	const isInSignup = location.pathname == '/signup' 
	console.log(status.msg)
	return (
		<div className="flex w-[100%] h-[93vh] overflow-hidden">
			<div className="w-[100%] h-[100%] relative" >
				<img className="object-cover h-[100%]"src={bgImage} alt=""  />
				<div className='absolute bottom-0 left-1 mx-2 text-xl text-white'>
					{isInSignup ? 
						<>
							<h2 className='font-bold text-2xl'>Create Your Favorite list to Fly</h2>
							<p>Your space at Trip reserve Book the in demand Flights</p>
						</> :
						<>
							<h2 className='font-bold text-2xl'>Regain Your Data</h2>
							<p>Your Favorites flights & Routes are waiting</p>
						</> 
					}
				</div>
			</div>
			<div className="w-[100%] flex flex-col items-center justify-center gap-y-2">
				<p className={`px-4 text-white rounded-lg  ${status.msg == '' ? 'hidden ': status.status ? "" : "bg-red-500"}`}>&bull;<span className='mx-2'>{status.msg}</span>&bull;</p>
				<h2 className='capitalize text-3xl'>{heading}</h2>
				<div className='w-[100%] px-4 max-w-[500px]'>
					<Form funcToCall={funcToCall}/>
				</div>
				<p className="text-lg">
					{isInSignup && <>Already Have an account? <Link to="/login" className='underline'>Login</Link></>}
					{!isInSignup && <>Not Have an account? <Link to="/signup"  className='underline'>Sign Up</Link></>}
				</p>
			</div>
		</div>
	)
}
export default AuthPage;