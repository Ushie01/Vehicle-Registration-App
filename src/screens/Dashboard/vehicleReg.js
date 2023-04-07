import add from "./../../assests/plus-lg.svg"

const vehicleRegistration = () => {
	const handleFileUpload = (event) => {
		// const file = event.target.files[0];
		// const fileNameParts = file.name.split('.');
		// const fileExtension = fileNameParts[fileNameParts.length - 1].toLowerCase();

		// if (file && !['jpeg', 'png', 'jpg', 'svg+xml'].includes(fileExtension)) {
		// 	setError(
		// 		'File type not supported. Please select a jpeg, png, jpg, or svg file.'
		// 	);
		// 	setFileName('');
		// } else {
		// 	setFileName(file);
		// 	setError('');
		// }
	};


    return (
        <>
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
								className='h-16 w-full border-2 rounded-xl p-2'>
								<option value='Commercial'>Commercial</option>
								<option value='Government'>Government</option>
								<option value='Private'>Private</option>
							</select>
                        </div>
                        <div className='space-y-3 w-1/2 pl-8'>
                            <p>Vehicle Make</p>
                            <input
                                type='text'
                                className='h-16 w-full border-2 rounded-xl p-2'
                                placeholder='Vehicle Make'
                                // value={type}
                                // onChange={(e) => setType(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='flex flex-row items-center justify-between mt-6 font-bold'>
                        <div className='space-y-3 w-1/2 pr-8'>
                            <p>Color</p>
                            <input
                                type='text'
                                className='h-16 w-full border-2 rounded-xl p-2'
                                placeholder='Color'
                                // value={type}
                                // onChange={(e) => setType(e.target.value)}
                            />
                        </div>
                        <div className='space-y-3 w-1/2 pl-8'>
                            <p>Model</p>
                            <input
                                type='text'
                                className='h-16 w-full border-2 rounded-xl p-2'
                                placeholder='Model'
                                // value={type}
                                // onChange={(e) => setType(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='flex flex-row items-center justify-between mt-6 font-bold'>
                        <div className='space-y-3 w-1/2 pr-8'>
                            <p>Engine Number</p>
                            <input
                                type='text'
                                className='h-16 w-full border-2 rounded-xl p-2'
                                placeholder='Engine Number'
                                // value={type}
                                // onChange={(e) => setType(e.target.value)}
                            />
                        </div>
                        <div className='space-y-3 w-1/2 pl-8'>
                            <p>Vehicle Type</p>
							<select
								name='vehicleType'
								id=''
								className='h-16 w-full border-2 rounded-xl p-2'>
								<option value='Bus'>Bus</option>
								<option value='Motor Cycle'>Motor Cycle</option>
								<option value='Suv'>Suv</option>
                                <option value='Car'>Car</option>
								<option value='Suv'>Suv</option>
								<option value='Tricycle'>Tricycle</option>
								<option value='Tractor'>Tractor</option>
							</select>
                        </div>
                    </div>
                    <div className='flex flex-row items-center justify-between mt-6 font-bold'>
                        <div className='space-y-3 w-1/2 pr-8'>
                            <p>Engine Capicity</p>
                            <input
                                type='text'
                                className='h-16 w-full border-2 rounded-xl p-2'
                                placeholder='Engine Capicity'
                                // value={type}
                                // onChange={(e) => setType(e.target.value)}
                            />
                        </div>
                        <div className='space-y-3 w-1/2 pl-8'>
                            <p>Tank Capacity</p>
                            <input
                                type='text'
                                className='h-16 w-full border-2 rounded-xl p-2'
                                placeholder='Tank Capacity'
                                // value={type}
                                // onChange={(e) => setType(e.target.value)}
                            />
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
                    <div className="text-md font-bold space-y-1 mt-5">
                        <p>
                            NIN Number
                        </p>
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
                    <div className="text-md font-bold space-y-1 mt-5">
                        <p>
                            Driver License
                        </p>
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
                <button className="h-16 w-full bg-cyan-400 mt-10 rounded-xl text-white font-extrabold hover:bg-cyan-500">Submit</button>
            </form>
        </>
    )
}

export default vehicleRegistration;