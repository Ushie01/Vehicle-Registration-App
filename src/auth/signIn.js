import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../helper/api';
import { validateLogin } from '../validate';
import car from "./../assests/car1.jpg";

const Signin = () => {
  // const user = JSON.parse(localStorage.getItem('user')) || [];
  const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [err, setErr] = useState([]);
	// const [submitted, setSubmitted] = useState(false);

	const handleLogin = async (event) => {
		event.preventDefault();
		const payload = { email, password };
		setError(validateLogin(payload));
		const response = await login(payload);
    const finalResponse = await response.json();

    if (
      finalResponse.message.includes("Successfully") && 
      finalResponse?.userDetails?.role === 'admin'
    ) {
      localStorage.setItem('user', JSON.stringify(finalResponse?.userDetails));   
      setErr(finalResponse?.message)
      setTimeout(() => {
        navigate('/admin/Dashboard');
      }, 2000);
    } else if (
			finalResponse.message.includes('Successfully') &&
			finalResponse?.userDetails?.role === 'user'
		) {
      localStorage.setItem('user', JSON.stringify(finalResponse?.userDetails));  
      setErr(finalResponse?.message)
      setTimeout(() => {
        navigate('/');
      }, 2000);
		} else {
			setErr(finalResponse?.message);
			setTimeout(() => {
				setErr('');
			}, 7000);
    }
  };
  
  return (
    <div>
      {/* Global Container */}
      <div className="flex flex-row bg-gray-200">
        <div className="relative md:w-1/2 p-4">
        <p className='bg-clip-text text-5xl font-extrabold text-transparent bg-gradient-to-r from-pink-600 to-violet-600'>
            RoadLink
        </p>
          <div className="md:p-20 mt-38 md:mt-8 ">
            <div className="mt-32 md:mt-0">
              <h2 className="text-3xl mb-5 font-bold font-sans text-violet-500">
                Welcome back, Agent 
              </h2>
              <p className="max-w-sm mb-6 font-sans font-light text-violet-500">
                Welcome back!, pls enter your login details
              </p>

              <input
                type="text"
                className="w-full p-4 border-b-2 hover:border-opacity-0 mb-3"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {error.email && (
                <p className='text-red-600 text-sm font-bold ml-8 mb-3'>
                  {error.email}
                </p>
              )}

              <input
                type="password"
                className="w-full p-4 border-b-2 hover:border-opacity-0 mb-3"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error.password && (
                <p className='text-red-600 text-sm font-bold ml-8'>
                  {error.password}
                </p>
              )}

              {err && (
                <p className='text-red-600 text-sm font-bold ml-8 mt-3'>
                  {err}
                </p>
              )}
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
                  <Link
                    to="/sign-up"
                    className="ml-2 text-md font-medium text-gray-900 dark:text-gray-600 decoration-clone underline"
                  >
                    Forget Password
                  </Link>
                </div>
              </div>
              <p className='text-black -mt-3 mb-4'>Don't have an account?<Link to="/Signup"><span className='text-violet-500 font-bold'> Sign Up</span></Link> </p>
              <button
                onClick={handleLogin}
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
          className="hidden md:block m-auto w-1/2 h-full shadow-lg"
        />
      </div>
    </div>
  );
}

export default Signin;