const Header = () => {
    return (
			<>
				<div className='p-7'>
					<div className='pl-10 pr-10'>
						<div className='flex flex-row items-center justify-between'>
							<p className='bg-clip-text text-5xl font-extrabold text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
								RoadLink
							</p>
							<ul className='flex flex-row items-center justify-center space-x-12 font-bold'>
								<li>About Us</li>
								<li>FAQs</li>
								<li>Contact Us</li>
							</ul>
							<div className="space-x-4">
								<button className='w-32 rounded-md text-white font-bold p-2 bg-violet-500'>
									Sign Up
								</button>
								<button className='w-32 rounded-md text-violet-500 font-bold p-2 border-2 border-violet-500'>
									Sign In
								</button>
							</div>
						</div>
					</div>
				</div>
			</>
		);
}

export default Header;