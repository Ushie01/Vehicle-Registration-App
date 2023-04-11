import { Outlet, Link } from 'react-router-dom';
import Header from '../../components/header';
import account from './../../assests/person-circle.svg';
import sign from './../../assests/sign.svg';
import check from './../../assests/check.svg';

const Dashboard = () => {
	const ship = 'Shipping';
	const arrive = 'Arriving';
	const success = 'Success';

	return (
		<div className=''>
			<Header />
			<hr className='border-2' />
			<div className='flex items-center justify-start'>
				<div className='flex flex-col items-center justify-start top-0 left-0 h-[1500px] w-3/12 bg-slate-100'>
					<img
						src={account}
						alt={account}
						className='h-36 w-36'
					/>
					<p className='text-2xl mt-2 text-gray-500'>Ushie</p>
					<div className='flex flex-col items-center text-gray-500 justify-start p-3 space-y-3 mt-24'>
						<Link to='/Dashboard/vehicleRegistration'>
							<div className='flex flex-row items-center justify-start shadow-lg w-full font-bold rounded-lg space-x-4 p-3 text-2xl bg-white'>
								<img
									src={sign}
									alt={sign}
									className='h-5 w-5 '
								/>
								<p>Vehicle Registration Form</p>
							</div>
						</Link>
						<Link to='/Dashboard/driverLensRegistration'>
							<div className='flex flex-row items-center justify-start shadow-lg w-full font-bold rounded-lg space-x-4 p-3 text-2xl bg-white'>
								<img
									src={sign}
									alt={sign}
									className='h-5 w-5'
								/>
								<p>Driver's License Registration</p>
							</div>
						</Link>
						<Link to='/Dashboard/vehicleVerification'>
							<div className='flex flex-row items-center justify-start shadow-lg w-full font-bold rounded-lg space-x-4 p-3 text-2xl bg-white'>
								<img
									src={sign}
									alt={sign}
									className='h-5 w-5'
								/>
								<p>Vehicle Registration Verification</p>
							</div>
						</Link>
						<Link to='/Dashboard/driverLensVerification'>
							<div className='flex flex-row items-center justify-start shadow-lg w-full font-bold rounded-lg space-x-4 p-3 text-2xl bg-white'>
								<img
									src={sign}
									alt={sign}
									className='h-5 w-5'
								/>
								<p>Driver Licence Verification</p>
							</div>
						</Link>
					</div>
				</div>
				<div className='flex-grow bg-white h-[1400px]'>
					<div className='flex flex-col items-center justify-start p-4'>
						<p className='text-black text-2xl'>
							Tracking your registration progress
						</p>
						<div className='flex flex-row items-center justify-center mt-5'>
							<div className='flex h-16 w-16 text-3xl bg-cyan-400 shadow-2xl rounded-full'>
								<img
									src={check}
									alt={check}
									className='m-auto h-12 w-12'
								/>
							</div>
							<hr
								className={`h-1 w-28 ${!ship ? 'bg-cyan-400' : 'bg-gray-400'}`}
							/>
							<div
								className={`flex h-16 w-16 text-3xl ${
									!ship ? 'bg-cyan-400' : 'bg-gray-400'
								} shadow-2xl rounded-full`}>
								<img
									src={check}
									alt={check}
									className='m-auto h-12 w-12'
								/>
							</div>{' '}
							<hr
								className={`h-1 w-28 ${!arrive ? 'bg-cyan-400' : 'bg-gray-400'}`}
							/>
							<div
								className={`flex h-16 w-16 text-3xl ${
									!arrive ? 'bg-cyan-400' : 'bg-gray-400'
								} shadow-2xl rounded-full`}>
								<img
									src={check}
									alt={check}
									className='m-auto h-12 w-12'
								/>
							</div>{' '}
							<hr
								className={`h-1 w-28 ${
									!success ? 'bg-cyan-400' : 'bg-gray-400'
								}`}
							/>
							<div
								className={`flex h-16 w-16 text-3xl ${
									!ship ? 'bg-cyan-400' : 'bg-gray-400'
								} shadow-2xl rounded-full`}>
								<img
									src={check}
									alt={check}
									className='m-auto h-12 w-12'
								/>
							</div>
						</div>
						<div className='flex flex-row items-start text-gray-400 font-thin justify-center text-center text-xl space-x-20 m-5'>
							<p>Signed Up</p>
							<p>
								Pending <br /> Registration
							</p>
							<p>
								Approve <br /> Registration
							</p>
							<p>Success <br /> Particular Ready</p>
						</div>
						<div className='p-7 mt-5 w-full'>
							<Outlet />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
