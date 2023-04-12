import { Link, useNavigate } from "react-router-dom";

const Header = () => {
	const user = JSON.parse(localStorage.getItem('user')) || [];
	const navigate = useNavigate();

	const handleLogOut = () => {
		localStorage.removeItem('user');
		navigate("/")
	}

    return (
			<>
				<div className='p-7 sticky'>
					<div className='pl-10 pr-10'>
						<div className='flex flex-row items-center justify-between'>
							<Link to='/'>
								<p className='bg-clip-text text-5xl font-extrabold text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
									RoadLink
								</p>
							</Link>
							<ul className='flex flex-row items-center justify-center space-x-12 font-bold'>
								<li>About Us</li>
								<li>FAQs</li>
								<li>Contact Us</li>
							</ul>
							{
							    !user?.role ?
								<div className='space-x-4'>
									<Link to='/Signup'>
										<button className='w-32 rounded-md text-white font-bold p-2 bg-violet-500'>
											Sign Up
										</button>
									</Link>
									<Link to='/Signin'>
										<button className='w-32 rounded-md text-violet-500 font-bold p-2 border-2 border-violet-500'>
											Sign In
										</button>
							    </Link>
							     </div>
								:
								<button onClick={handleLogOut} className='w-32 rounded-md text-violet-500 font-bold p-2 border-2 border-violet-500'>
									Log Out
								</button>								
						    }
						</div>
					</div>
				</div>
			</>
		);
}

export default Header;