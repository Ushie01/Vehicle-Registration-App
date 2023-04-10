import { Outlet, Link } from 'react-router-dom';
import Header from '../../components/header';
import account from './../../assests/person-circle.svg';
import sign from './../../assests/sign.svg';
import check from './../../assests/check.svg';

const AdminDashboard = () => {
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
						<Link to='/admin/Dashboard/vehicleRegList'>
							<div className='flex flex-row items-center justify-start shadow-lg w-full font-bold rounded-lg space-x-4 p-3 text-2xl bg-white'>
								<img
									src={sign}
									alt={sign}
									className='h-5 w-5 '
								/>
								<p>Vehicle Registration List</p>
							</div>
						</Link>
						<Link to='/admin/Dashboard/driverLensRegList'>
							<div className='flex flex-row items-center justify-start shadow-lg w-full font-bold rounded-lg space-x-4 p-3 text-2xl bg-white'>
								<img
									src={sign}
									alt={sign}
									className='h-5 w-5'
								/>
								<p>Driver's License List</p>
							</div>
						</Link>
					</div>
				</div>
				<div className='flex-grow bg-white h-[1400px]'>
					<div className='flex flex-col items-center justify-start p-4'>
						<div className='p-7 mt-5 w-full'>
							<Outlet />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminDashboard;
