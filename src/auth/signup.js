import React from 'react';
import { Link } from 'react-router-dom';
import car from './../assests/car1.jpg';


const Signin = () => {
  return (
    <div>
      {/* Global Container */}
      <div className="flex flex-row bg-gray-200">
        <div className="relative md:w-1/2 bg-gray-100 p-4">
							<Link to='/'>
								<p className='bg-clip-text text-5xl font-extrabold text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
									RoadLink
								</p>
							</Link>
          <div className="md:p-20 mt-38 md:mt-8 ">
            <div className="mt-32 md:mt-0">
              <h2 className="text-3xl mb-5 font-bold font-sans text-violet-900">
                Welcome Agent, Kindly Register
              </h2>
              <input
                type="text"
                className="w-full p-4 border-b-2 hover:border-opacity-0 mb-3"
                placeholder="First Name"
              />
              <input
                type="text"
                className="w-full p-4 border-b-2 hover:border-opacity-0 mb-3"
                placeholder="Last Name"
              />
              <input
                type="email"
                className="w-full p-4 border-b-2 hover:border-opacity-0 mb-3"
                placeholder="Email"
              />
              <input
                type="number"
                className="w-full p-4 border-b-2 hover:border-opacity-0 mb-3"
                placeholder="Phone Number"
              />
              <input
                type="password"
                className="w-full p-4 border-b-2 hover:border-opacity-0 mb-3"
                placeholder="Password"
               />
              <input
                type="password"
                className="w-full p-4 border-b-2 hover:border-opacity-0 mb-3"
                placeholder="Confirm Password"
              />
              <div className="flex items-center justify-between my-6">
                <div className="flex items-center mb-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-600"
                  >
                    Remember For 30days
                  </label>
                </div>
                <div className="flex items-center mb-4">
                </div>
              </div>
              <p className='text-black -mt-3 mb-4'>Already have an account?<Link to="/Signin"><span className='text-violet-500 font-bold'> Sign In</span></Link> </p>
              <button
                className="flex items-center justify-center mb-8 py-2 space-x-3 w-full rounded-xl hover:bg-violet-400  
                hover:shadow-lg hover:-translate-y-0.5 transition duration-150 bg-violet-500"
              >
                <span className="text-white font-sans">Login</span>
              </button>
            </div>
          </div>
        </div>
        <img
          src={car}
          alt={car}
          className="hidden md:block m-auto h-full w-1/2 shadow-lg"
        />
      </div>
    </div>
  );
}

export default Signin;