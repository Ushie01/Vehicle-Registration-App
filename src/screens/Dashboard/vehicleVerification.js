import { useState, useEffect } from "react";
import { getAllVehicleReg } from "../../helper/api";

const VehicleVerification = () => {
	const user = JSON.parse(localStorage.getItem('user')) || {};
	const [agent, setAgent] = useState([]);
	const [inputText, setInputText] = useState('');
	const [res, setRes] = useState('');
	const [userAgent, setUserAgent] = useState({});

	const handleVehicleReg = (e) => {
		e.preventDefault();
		if (userAgent?.vehicleRegNo === inputText && userAgent?.status === 'true') {
			setRes(`your vehicle registration number ${userAgent.vehicleRegNo} is verified`)
			setTimeout(() => {
				setRes('')
			}, 7000);
		} else if (userAgent?.vehicleRegNo === inputText && userAgent?.status === 'false') {
			setRes('your vehicle registration number is still pending approval')
			setTimeout(() => {
				setRes('')
			}, 7000);
		} else {
			setRes(`please input your correct reg no to verify`)
			setTimeout(() => {
				setRes('')
			}, 7000);    
		}
	}

	useEffect(() => {
		const getAgents = async () => {
			const response = await getAllVehicleReg();
			const data = await response.json();
			setAgent(data?.finalResult);
		};
		getAgents();
	}, []);

	useEffect(() => {
		if (agent?.length > 0 && Object.keys(user)?.length > 0) {
			const filteredAgents = agent.filter(value => (value.phoneNo === user.phoneNo));
			if (filteredAgents.length > 0) {
				const finalUserAgent = Object.assign({}, ...filteredAgents);
				setUserAgent(finalUserAgent);
			} else {
				setUserAgent({});
			}
		}
	}, [agent, user.phoneNo]);


	return (
			<>
				<p className='text-4xl font-bold'>
					<span className='text-gray-400'>|</span> Vehicle Registration Verification
				</p>
				<form
					action=''
					className='flex flex-col items-center justify-center space-y-3 text-white p-6 border-2 w-6/12 mt-8 bg-pink-500'>
					<p>Verify Your Vehicle Plate Number</p>
					<input
						type='text'
						value={inputText}
						onChange={(e) => setInputText(e.target.value)}
						className='p-6 h-12 w-full text-black font-bold rounded-lg'
					/>
					<button onClick={handleVehicleReg} className='p-3 rounded-lg bg-violet-500 text-white w-36'>Submit</button>
			    </form>
			    <p className="text-violet-600 text-bold text-2xl">{res}</p>
			</>
		);
}

export default VehicleVerification;