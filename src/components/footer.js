const Footer = () => {
	return (
		<>
			<div className='flex flex-row items-center justify-center p-12 bg-violet-500 space-x-16' >
				<div className='flex flex-col items-start justify-center text-white'>
					<p className='text-xl font-bold'>Sign Up for our Newsetter</p>
					<p>Get to know update concerning driver lencense</p>
				</div>
				<div className='flex flex-col items-start justify-center text-white'>
					<p>Your Email</p>
					<div className="flex flex-row items-center justify-center">
						<input
							type='text'
							placeholder='email@gmail.com'
							className="h-12 w-72 rounded-l-full p-2"
						/>
						<button className="bg-blue-950 p-3 w-34 rounded-r-full">Subcribe</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
