import { useState } from "react";
import { vehicleReg } from "../../helper/api";
import { validateVehicleReg } from "../../validate";
import add from "./../../assests/plus-lg.svg";
import account from './../../assests/person-circle.svg';
import sign from './../../assests/sign.svg';
import check from './../../assests/check.svg';

const VehicleRegistration = () => {
    const user = JSON.parse(localStorage.getItem('user')) || [];
    const [vehicleCategory, setVehicleCategory] = useState('');
    const [vehicleMake, setVehicleMake] = useState('');
    const [color, setColor] = useState('');
    const [model, setModel] = useState('');
    const [engineNumber, setEngineNumber] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    const [engineCapacity, setEngineCapacity] = useState('');
    const [tankCapacity, setTankCapacity] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [nationalId, setNationalId] = useState('');
    const [nin, setNin] = useState('');
    const [driverLicense, setDriverLicense] = useState('');
    const [error, setError] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [err, setErr] = useState('');
    const ship = 'Shipping';
	const arrive = 'Arriving';
	const success = 'Success';


    const onHandleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
		formData.append('vehicleCategory', vehicleCategory);
		formData.append('vehicleMake', vehicleMake);
		formData.append('color', color);
		formData.append('model', model);
		formData.append('engineNumber', engineNumber);
		formData.append('vehicleType', vehicleType);
		formData.append('engineCapacity', engineCapacity);
        formData.append('phoneNo', phoneNo);
        formData.append('file1', nationalId);
        formData.append('file2', nin);
        formData.append('file3', driverLicense);
        
        const values = {
            vehicleCategory,
            vehicleMake,
            color,
            model,
            engineNumber,
            vehicleType,
            engineCapacity,
            tankCapacity,
            phoneNo,
            nationalId,
            nin,
            driverLicense
        }

        setError(validateVehicleReg(values));

        try {
            const res = await vehicleReg(formData);
            const finalRes = await res.json();
            console.log(finalRes);
            setTimeout(() => {
                window.location.reload('/Dashboard')
            }, 3000);
        } catch (error) {
            console.error(error)
        }
    }


	const handleUploadNationalId = (event) => {
        const file = event.target.files[0];
		const fileNameParts = file.name.split('.');
		const fileExtension = fileNameParts[fileNameParts.length - 1].toLowerCase();

		if (file && !['jpeg', 'png', 'jpg', 'svg+xml'].includes(fileExtension)) {
			setError(
				'File type not supported. Please select a jpeg, png, jpg, or svg file.'
			);
			setNationalId('');
		} else {
			setNationalId(file);
			setError('');
		}
	};

	const handleUploadDriverLicense = (event) => {
		const file = event.target.files[0];
		const fileNameParts = file.name.split('.');
        const fileExtension = fileNameParts[fileNameParts.length - 1].toLowerCase();

		if (file && !['jpeg', 'png', 'jpg', 'svg+xml'].includes(fileExtension)) {
			setError(
				'File type not supported. Please select a jpeg, png, jpg, or svg file.'
			);
			setDriverLicense('');
		} else {
			setDriverLicense(file);
            setError('');
		}
    };
    
	const handleUploadNin = (event) => {
		const file = event.target.files[0];
		const fileNameParts = file.name.split('.');
		const fileExtension = fileNameParts[fileNameParts.length - 1].toLowerCase();

		if (file && !['jpeg', 'png', 'jpg', 'svg+xml'].includes(fileExtension)) {
			setError(
				'File type not supported. Please select a jpeg, png, jpg, or svg file.'
			);
			setNin('');
		} else {
			setNin(file);
			setError('');
		}
    };
    
    return (
        <>
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
            <p className='text-4xl font-bold'><span className="text-gray-400">|</span> Vehicle Registration</p>
                <form
                    action=''
                    className='p-6 border-2 mt-8'>
                <p className='text-2xl font-bold mt-7'><span className="text-gray-400">|</span> Verhicle Information</p>
                    <div className='flex flex-row items-center justify-between mt-6 font-bold'>
                        <div className='space-y-3 w-1/2 pr-8'>
                            <p>Vehicle Category</p>
							<select
								name='vehicleCategory'
								id=''
								className='h-16 w-full border-2 rounded-xl p-2'
                                value={vehicleCategory}
                                onChange={(e) => setVehicleCategory(e.target.value)} 
                            >
								<option value='Commercial'>Commercial</option>
								<option value='Government'>Government</option>
								<option value='Private'>Private</option>
							</select>
                            {error?.vehicleCategory && (
                                <p className='text-red-600 text-sm font-bold'>{error.vehicleCategory}</p>
                            )}
                        </div>

                        <div className='space-y-3 w-1/2 pl-8'>
                            <p>Vehicle Make</p>
                            <input
                                type='text'
                                className='h-16 w-full border-2 rounded-xl p-2'
                                placeholder='Vehicle Make'
                                value={vehicleMake}
                                onChange={(e) => setVehicleMake(e.target.value)}
                            />
                            {error?.vehicleMake && (
                                <p className='text-red-600 text-sm font-bold'>{error.vehicleMake}</p>
                            )}
                        </div>
                    </div>
                    
                    <div className='flex flex-row items-center justify-between mt-6 font-bold'>
                        <div className='space-y-3 w-1/2 pr-8'>
                            <p>Color</p>
                            <input
                                type='text'
                                className='h-16 w-full border-2 rounded-xl p-2'
                                placeholder='Color'
                                value={color}
                                onChange={(e) => setColor(e.target.value)}
                           />
                            {error?.color && (
                                <p className='text-red-600 text-sm font-bold'>{error.color}</p>
                            )}
                        </div>
                        <div className='space-y-3 w-1/2 pl-8'>
                            <p>Model</p>
                            <input
                                type='text'
                                className='h-16 w-full border-2 rounded-xl p-2'
                                placeholder='Model'
                                value={model}
                                onChange={(e) => setModel(e.target.value)}
                            />
                            {error?.model && (
                                <p className='text-red-600 text-sm font-bold'>{error.model}</p>
                            )}
                        </div>
                    </div>
                
                    <div className='flex flex-row items-center justify-between mt-6 font-bold'>
                        <div className='space-y-3 w-1/2 pr-8'>
                            <p>Engine Number</p>
                            <input
                                type='text'
                                className='h-16 w-full border-2 rounded-xl p-2'
                                placeholder='Engine Number'
                                value={engineNumber}
                                onChange={(e) => setEngineNumber(e.target.value)}
                            />
                            {error?.engineNumber && (
                                <p className='text-red-600 text-sm font-bold'>{error.engineNumber}</p>
                            )}
                        </div>
                        <div className='space-y-3 w-1/2 pl-8'>
                            <p>Vehicle Type</p>
							<select
								name='vehicleType'
                                id=''
                                value={vehicleType}
                                onChange={(e) => setVehicleType(e.target.value)}
                                className='h-16 w-full border-2 rounded-xl p-2'
                        >
								<option value='Bus'>Bus</option>
								<option value='Motor Cycle'>Motor Cycle</option>
								<option value='Suv'>Suv</option>
                                <option value='Car'>Car</option>
								<option value='Suv'>Suv</option>
								<option value='Tricycle'>Tricycle</option>
								<option value='Tractor'>Tractor</option>
							</select>
                            {error?.vehicleType && (
                                <p className='text-red-600 text-sm font-bold'>{error.vehicleType}</p>
                            )}
                        </div>
                    </div>
                    
                    <div className='flex flex-row items-center justify-between mt-6 font-bold'>
                        <div className='space-y-3 w-1/2 pr-8'>
                            <p>Engine Capicity</p>
                            <input
                                type='text'
                                className='h-16 w-full border-2 rounded-xl p-2'
                                placeholder='Engine Capicity'
                                value={engineCapacity}
                                onChange={(e) => setEngineCapacity(e.target.value)}
                            />
                            {error?.engineCapacity && (
                                <p className='text-red-600 text-sm font-bold'>{error.engineCapacity}</p>
                            )}
                        </div>
                    
                        <div className='space-y-3 w-1/2 pl-8'>
                            <p>Tank Capacity</p>
                            <input
                                type='text'
                                className='h-16 w-full border-2 rounded-xl p-2'
                                placeholder='Tank Capacity'
                                value={tankCapacity}
                                onChange={(e) => setTankCapacity(e.target.value)}
                            />
                            {error?.tankCapacity && (
                                <p className='text-red-600 text-sm font-bold'>{error.tankCapacity}</p>
                            )}
                        </div>
                    </div>
                    
                    <div className='flex flex-row items-center justify-between mt-6 font-bold'>
                        <div className='space-y-3 w-1/2 pr-8'>
                            <p>Phone Number</p>
                            <input
                                type='text'
                                className='h-16 w-full border-2 rounded-xl p-2'
                                placeholder='Engine Capicity'
                                value={phoneNo}
                                onChange={(e) => setPhoneNo(e.target.value)}
                           />
                        {error?.phoneNo && (
                            <p className='text-red-600 text-sm font-bold'>{error.phoneNo}</p>
                        )}
                        </div>
                    </div>
                <p className='text-2xl font-bold mt-7'><span className="text-gray-400">|</span> Owner Information</p>
                
                <div className="flex flex-row items-center justify-between">
                    <div className="text-md font-bold space-y-1 mt-5">
                        <p>
                            National ID Card
                        </p>
                        <input
                            type='file'
                            id='nationaIdInput'
                            name='file1'
                            style={{ display: 'none' }}
                            onChange={handleUploadNationalId}
                        />
                        <label
                            htmlFor='nationaIdInput'
                            className='flex items-center mt-8 text-ceneter p-2 h-16 w-16 border-black rounded-full border-2'>
                            <img
                                src={add}
                                alt={add}
                                className='h-12 w-12'
                            />
                            
                        </label>
                        {nationalId && (
                            <p className='text-sm font-bold'>{nationalId.name}</p>
                        )}
                        {error?.nationalId && (
                            <p className='text-red-600 text-sm font-bold'>{error.nationalId}</p>
                        )}
                    </div>
                    
                    <div className="text-md font-bold space-y-1 mt-5">
                        <p>
                            NIN Number
                        </p>
                        <input
                            type='file'
                            id='ninInput'
                            name='file2'
                            style={{ display: 'none' }}
                            onChange={handleUploadNin}
                        />
                        <label
                            htmlFor='ninInput'
                            className='flex items-center mt-8 text-ceneter p-2 h-16 w-16 border-black rounded-full border-2'>
                            <img
                                src={add}
                                alt={add}
                                className='h-12 w-12'
                            />
                        </label>
                        {nin && (
                            <p className='text-sm font-bold'>{nin.name}</p>
                        )}
                        {error?.nin && (
                            <p className='text-red-600 text-sm font-bold'>{error.nin}</p>
                        )}
                    </div>

                    <div className="text-md font-bold space-y-1 mt-5">
                        <p>
                            Driver License
                        </p>
                        <input
                            type='file'
                            id='driverLicenseInput'
                            name='file3'
                            style={{ display: 'none' }}
                            onChange={handleUploadDriverLicense}
                        />
                        <label
                            htmlFor='driverLicenseInput'
                            className='flex items-center mt-8 text-ceneter p-2 h-16 w-16 border-black rounded-full border-2'>
                            <img
                                src={add}
                                alt={add}
                                className='h-12 w-12'
                            />
                        </label>
                        {driverLicense && (
                            <p className='text-sm font-bold'>{driverLicense.name}</p>
                        )}
                        {error?.driverLicense && (
                            <p className='text-red-600 text-sm font-bold'>{error.driverLicense}</p>
                        )}
                    </div>
                         {err && (
                            <p className='text-green-600 text-sm font-bold'>{err}</p>
                        )}                   
                </div>
                <button onClick={onHandleSubmit} disabled={submitted} className={`h-16 w-full  mt-10 rounded-xl text-white font-extrabold hover:bg-cyan-500 ${submitted ? 'bg-cyan-200' : 'bg-cyan-400' }`}>Submit</button>
            </form>
							
            </div>
        </div>
        </>
    )
}

export default VehicleRegistration;

