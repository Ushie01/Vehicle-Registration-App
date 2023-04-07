import Header from '../components/header';
import Footer from '../components/footer';
import frsc from '../assests/frscimg.gif';
import vio from '../assests/vio.jpg';
import mentor from '../assests/mentor.png';
import service from '../assests/service.jpg';
import chioma from '../assests/chioma.jpg';
import ote from '../assests/ote.png';

const Home = () => {
	return (
		<>
			<Header />
			<div className='bgImage w-full h-[600px]'>
				<div className='flex flex-col items-center justify-center text-white'>
					<div className='flex flex-col items-center justify-start text-4xl font-extrabold mt-12 p-8'>
						<p>Get your vehicle registration from the comfort of your home</p>
						<p>Say good bye to stress and long queue</p>
					</div>
					<div className='flex flex-col items-center justify-center mt-2 text-2xl font-thin'>
						<p>
							Well strutured and organized system for making your vehicle
							registration
						</p>
						<p>No hidding charges all for free</p>
					</div>
					<button className='bg-violet-500 w-96 mt-28 p-3 rounded-md shadow-2xl'>
						Get Started
					</button>
				</div>
			</div>
			<div className='flex flex-col items-center justify-center p-12'>
				<p className='text-4xl font-bold text-violet-800'>Our Services</p>
				<div className='flex flex-row items-center justify-center space-x-40 mt-10'>
					<div className='flex flex-col h-96 w-60 rounded-2xl border-2 '>
						<img
							src={frsc}
							alt={frsc}
							className='w-full h-1/3 rounded-t-2xl mt-2'
						/>
						<div className='flex flex-col items-center justify-start bg-violet-100 h-2/3 rounded-b-2xl'>
							<h1 className='text-4xl font-bold mt-8'>FRSC</h1>
							<p className='mt-5'>Register In a Minute</p>
							<button className='bg-violet-500 w-28 rounded-md text-white mt-16 p-2'>
								Enroll
							</button>
						</div>
					</div>
					<div className='flex flex-col h-96 w-60 rounded-2xl border-2 '>
						<img
							src={vio}
							alt={vio}
							className='w-full h-1/3 rounded-t-2xl'
						/>
						<div className='flex flex-col items-center justify-start bg-violet-100 h-2/3 rounded-b-2xl'>
							<h1 className='text-4xl font-bold mt-8'>VIO</h1>
							<p className='mt-5'>Register In a Minute</p>
							<button className='bg-violet-500 w-28 rounded-md text-white mt-16 p-2'>
								Enroll
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className='flex flex-col items-center justify-center p-12 bg-violet-100'>
				<p className='text-4xl font-bold text-violet-800'>Why Choose Us</p>
				<div className='flex flex-col items-center justify-center p-12'>
					<div className='flex flex-row items-center justify-center'>
						<div className='flex flex-col p-4'>
							<p className='text-xl font-bold'>Mentorship</p>
							<div className='border-2 p-2 rounded-xl border-gray-400 mt-7'>
								<img
									src={mentor}
									alt={mentor}
									className='w-60'
								/>
							</div>
						</div>
						<div className='p-12'>
							<p>
								Mentors with dozens of year expirence with in-depth knowledge{' '}
								<br />
								and technical know how to guide you on your journey{' '}
							</p>
						</div>
					</div>
					<div className='flex flex-row items-center justify-center'>
						<div className='flex flex-col p-4'>
							<p className='text-xl font-bold'>Customer Service</p>
							<div className='border-2 p-2 rounded-xl border-gray-400 mt-7'>
								<img
									src={service}
									alt={service}
									className='w-60 rounded-xl'
								/>
							</div>
						</div>
						<div className='p-12'>
							<p>
								Our customer service personal are always available 24/7 in
								giving <br />
								an helping hands{' '}
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='flex flex-col items-center justify-center p-12'>
				<p className='text-4xl font-bold text-violet-800'>How it works</p>
				<div className='flex flex-row items-center justify-center space-x-10 mt-10'>
					<div className='flex flex-col items-center justify-center p-5'>
						<div className='flex items-center border-4 rounded-full p-2 w-24 h-24 border-green-200'>
							<p className='text-3xl font-extrabold m-auto'>01</p>
						</div>
						<p className='text-xl font-bold mt-3'>Pick a service</p>
						<div className='flex flex-col items-center justify-center font-thin text-sm mt-6'>
							<p>Begin the easy journey by signing up</p>
							<p>And than pick a service</p>
						</div>
					</div>
					<div className='flex flex-col items-center justify-center p-5'>
						<div className='flex items-center border-4 rounded-full p-2 w-24 h-24 border-green-200'>
							<p className='text-3xl font-extrabold m-auto'>02</p>
						</div>
						<p className='text-xl font-bold mt-3'>Fill in the form</p>
						<div className='flex flex-col items-center justify-center font-thin text-sm mt-6'>
							<p>Fill in all the require fields</p>
							<p>Your correct credencial</p>
						</div>
					</div>
					<div className='flex flex-col items-center justify-center p-5'>
						<div className='flex items-center border-4 rounded-full p-2 w-24 h-24 border-green-200'>
							<p className='text-3xl font-extrabold m-auto'>03</p>
						</div>
						<p className='text-xl font-bold mt-3'>Wait for approval</p>
						<div className='flex flex-col items-center justify-center font-thin text-sm mt-6'>
							<p>This only take some few minute</p>
							<p>and you will be done</p>
						</div>
					</div>
					<div className='flex flex-col items-center justify-center p-5'>
						<div className='flex items-center border-4 rounded-full p-2 w-24 h-24 border-green-200'>
							<p className='text-3xl font-extrabold m-auto'>04</p>
						</div>
						<p className='text-xl font-bold mt-3'>Go pick your particulars</p>
						<div className='flex flex-col items-center justify-center font-thin text-sm mt-6'>
							<p>Get your particular in any of</p>
							<p>offices near you</p>
						</div>
					</div>
				</div>
			</div>
			<div className='flex flex-col items-center justify-center p-12 bg-violet-100'>
				<p className='text-4xl font-bold text-violet-800'>
					What people are saying
				</p>
				<div className='flex flex-col items-center justify-center p-12'>
					<div className='flex flex-row items-center justify-center space-x-8'>
						<div className='flex flex-col p-4'>
							<div className='border-2 p-2 rounded-xl border-gray-400 mt-7'>
								<img
									src={mentor}
									alt={mentor}
									className='w-80'
								/>
							</div>
						</div>
						<div className="flex flex-col items-center justify-center space-y-3 mt-5">
						<div className='flex flex-row pr-4 pl-4 items-center justify-center space-x-3 bg-white rounded-2xl'>
							<div className="flex flex-col items-center justify-center p-2">
								<img src={chioma} alt={chioma} className="h-12 w-12 rounded-full" />
								<p>Chioma Patrick</p>
							</div>
							<p>
								Mentors with dozens of year expirence with in-depth knowledge{' '}
								<br />
								and technical know how to guide you on your journey{' '}
							</p>
						</div>
						<div className='flex flex-row pr-4 pl-4 items-center justify-center space-x-3 bg-white rounded-2xl'>
							<div className="flex flex-col items-center justify-center p-2">
								<img src={ote} alt={ote} className="h-12 w-12 rounded-full" />
								<p>Peace Femi</p>
							</div>
							<p>
								Mentors with dozens of year expirence with in-depth knowledge{' '}
								<br />
								and technical know how to guide you on your journey{' '}
							</p>
						</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
