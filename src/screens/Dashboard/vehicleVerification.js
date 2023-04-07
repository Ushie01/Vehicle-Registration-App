const VehicleVerification = () => {
    return (
			<>
				<p className='text-4xl font-bold'>
					<span className='text-gray-400'>|</span> Vehicle Registration Verification
				</p>
				<form
					action=''
					className='flex flex-col items-center justify-center space-y-3 text-white p-6 border-2 w-6/12 mt-8 bg-pink-500'>
					<p>Verify Your Vehicle Registration</p>
					<input
						type='text'
						className='p-6 h-12 w-full rounded-lg'
					/>
					<button className='p-3 rounded-lg bg-violet-500 text-white w-36'>Submit</button>
				</form>
			</>
		);
}

export default VehicleVerification;