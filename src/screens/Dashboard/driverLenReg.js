import { useState, useEffect } from 'react';
import add from './../../assests/plus-lg.svg';
import { licenseReg, getAllLicenseReg } from '../../helper/api';
import account from './../../assests/person-circle.svg';
import sign from './../../assests/sign.svg';
import check from './../../assests/check.svg';


const DriverLensRegistration = () => {
	const user = JSON.parse(localStorage.getItem('user')) || [];
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [homeAddress, setHomeAddress] = useState('');
	const [city, setCity] = useState('');
	const [phoneNo, setPhoneNo] = useState('');
	const [state, setState] = useState('');
	const [vehicleRegNo, setVehicleRegNo] = useState('');
	const [drivingSchCert, setDrivingSchCert] = useState('');
	const [error, setError] = useState('');
	const [agent, setAgent] = useState([]);
    const [userAgent, setUserAgent] = useState({});

    useEffect(() => {
        const getAgents = async () => {
            const response = await getAllLicenseReg();
            const data = await response.json();
            setAgent(data?.finalResult);
        };
        getAgents();
    }, []);

    useEffect(() => {
        if (agent?.length > 0) {
            const filteredAgents = agent.filter(value => (value.phoneNo === user.phoneNo));
            const finalUserAgent = Object.assign({}, ...filteredAgents);
            setUserAgent(finalUserAgent);   
        }
    }, [agent, user.phoneNo]);
    

	const onHandleSubmit = async (e) => {
		const formData = new FormData();
		formData.append('firstName', firstName);
		formData.append('lastName', lastName);
		formData.append('email', email);
		formData.append('homeAddress', homeAddress);
		formData.append('city', city);
		formData.append('phoneNo', phoneNo);
		formData.append('state', state);
		formData.append('vehicleRegNo', vehicleRegNo);
		formData.append('file', drivingSchCert);

		try {
			const res = await licenseReg(formData);
			const finalRes = await res.json();
			console.log(finalRes);
			setTimeout(() => {
				window.location.reload('/Dashboard')
			}, 3000);
		} catch (error) {
			console.error(error)
		}
	}
	
	const handleFileUpload = (event) => {
		const file = event.target.files[0];
		const fileNameParts = file.name.split('.');
		const fileExtension = fileNameParts[fileNameParts.length - 1].toLowerCase();
		if (file && !['jpeg', 'png', 'jpg', 'svg+xml'].includes(fileExtension)) {
			setError(
				'File type not supported. Please select a jpeg, png, jpg, or svg file.'
			);
			setDrivingSchCert('');
		} else {
			setDrivingSchCert(file);
			setError('');
		}
	};

	return (
		<>
			{
				userAgent.licenseRegNo
				&&
				<div className="flex items-center justify-start pl-12 font-extrabold">
					<p className="text-xl text-cyan-400 shadow-xl p-2 rounded-lg">
						{`license reg: ${userAgent.licenseRegNo}`}
					</p>
				</div>
			}

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
                    className={`h-1 w-28 ${user ? 'bg-cyan-400' : 'bg-gray-400'}`}
                />
                {
                    userAgent?.status === 'false' 
                    && 
                    <>
                        <div
                            className={`flex h-16 w-16 text-3xl ${
                                userAgent?.status === 'false'  ? 'bg-cyan-400' : 'bg-gray-400'
                            } shadow-2xl rounded-full`}>
                            <img
                                src={check}
                                alt={check}
                                className='m-auto h-12 w-12'
                            />
                        </div>{' '}
                        <hr
                            className={`h-1 w-28 ${!userAgent?.status === 'false' ? 'bg-cyan-400' : 'bg-gray-400'}`}
                        />
                    </>
                }
                {
                    userAgent?.status === 'true' 
                    &&
                    <>
                        <div
                            className={`flex h-16 w-16 text-3xl ${
                                userAgent?.status === 'true' ? 'bg-cyan-400' : 'bg-gray-400'
                            } shadow-2xl rounded-full`}>
                            <img
                                src={check}
                                alt={check}
                                className='m-auto h-12 w-12'
                            />
                        </div>{' '}
                        <hr
                            className={`h-1 w-28 ${
                                userAgent?.status === 'true' ? 'bg-cyan-400' : 'bg-gray-400'
                            }`}
                        />
                    </>     
                }

                <div
                    className={`flex h-16 w-16 text-3xl ${
                        userAgent?.status === 'true' ? 'bg-cyan-400' : 'bg-gray-400'
                    } shadow-2xl rounded-full`}>
                    <img
                        src={check}
                        alt={check}
                        className='m-auto h-12 w-12'
                    />
                </div>
            </div>
            <div className='flex flex-row items-start text-gray-400 font-thin justify-center text-center text-xl space-x-24 m-5'>
                    <p>Signed Up</p>
                    {
                        userAgent?.status === 'false'
                        &&
                        <>
                            <p className="ml-20">
                                Pending <br /> Registration
                            </p>
                        </>
                    }
                    {
                        userAgent?.status === 'true'
                        &&
                        <>
                            <p>
                                Approve <br /> Registration
                            </p>
                        </>
                    }

                  <p>Particular <br /> Ready</p>
                </div>
			</div>
			<p className='text-4xl font-bold'>
				<span className='text-gray-400'>|</span> Driver's License Registration
			</p>
			<form
				action=''
				className='p-6 border-2 mt-8'>
				<div className='flex flex-row items-center justify-between mt-6 font-bold'>
					<div className='space-y-3 w-1/2 pr-8'>
						<p>First Name</p>
						<input
							type='text'
							className='h-16 w-full border-2 rounded-xl p-2'
							placeholder='First Name'
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</div>
					<div className='space-y-3 w-1/2 pl-8'>
						<p>Last Name</p>
						<input
							type='text'
							className='h-16 w-full border-2 rounded-xl p-2'
							placeholder='Last Number'
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
						/>
					</div>
				</div>
				<div className='flex flex-row items-center justify-between mt-6 font-bold'>
					<div className='space-y-3 w-1/2 pr-8'>
						<p>Email</p>
						<input
							type='email'
							className='h-16 w-full border-2 rounded-xl p-2'
							placeholder='Color'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className='space-y-3 w-1/2 pl-8'>
						<p>Home Address</p>
						<input
							type='text'
							className='h-16 w-full border-2 rounded-xl p-2'
							placeholder='Home Address'
							value={homeAddress}
							onChange={(e) => setHomeAddress(e.target.value)}
						/>
					</div>
				</div>
				<div className='flex flex-row items-center justify-between mt-6 font-bold'>
					<div className='space-y-3 w-1/2 pr-8'>
						<p>City</p>
						<input
							type='text'
							className='h-16 w-full border-2 rounded-xl p-2'
							placeholder='City'
							value={city}
							onChange={(e) => setCity(e.target.value)}
						/>
					</div>
					<div className='space-y-3 w-1/2 pl-8'>
						<p>Vehicle Reg No</p>
						<input
							type='text'
							className='h-16 w-full border-2 rounded-xl p-2'
							placeholder='Vehicle Reg No'
							value={vehicleRegNo}
							onChange={(e) => setVehicleRegNo(e.target.value)}
						/>
					</div>
				</div>
				<div className='flex flex-row items-center justify-between mt-6 font-bold'>
					<div className='space-y-3 w-1/2 pr-8'>
						<p>Mobile Number</p>
						<input
							type='text'
							className='h-16 w-full border-2 rounded-xl p-2'
							placeholder='Mobile Number'
							value={phoneNo}
							onChange={(e) => setPhoneNo(e.target.value)}
						/>
					</div>
					<div className='space-y-3 w-1/2 pl-8'>
						<p>State</p>
						<input
							type='text'
							className='h-16 w-full border-2 rounded-xl p-2'
							placeholder='State'
							value={state}
							onChange={(e) => setState(e.target.value)}
						/>
					</div>
				</div>
				<div className='flex flex-row items-center justify-between mt-6 font-bold'>
					<div className='space-y-3 w-1/2 pl-8'>
						<div className='text-md font-bold space-y-1 mt-5'>
							<p>Driving School Certificate Number</p>
							<input
								type='file'
								id='fileInput'
								name='file'
								style={{ display: 'none' }}
								onChange={handleFileUpload}
							/>
							<label
								htmlFor='fileInput'
								className='flex items-center mt-8 text-ceneter p-2 h-16 w-16 border-black rounded-full border-2'>
								<img
									src={add}
									alt={add}
									className='h-12 w-12'
								/>
							</label>
						</div>
					</div>
                </div>
                <button onClick={onHandleSubmit} className="h-16 w-full bg-cyan-400 mt-10 rounded-xl text-white text-extrabold hover:bg-cyan-500 font-extrabold">Apply</button>
			</form>
		</>
	);
};

export default DriverLensRegistration;
