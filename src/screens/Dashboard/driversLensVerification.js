import { useState, useEffect } from "react";
import { getAllLicenseReg } from "../../helper/api";

const DriverLensVerification = () => {
	const user = JSON.parse(localStorage.getItem('user')) || [];
	const [agent, subAgent] = useState([]);
	const [inputText, setInputText] = useState('');
	const [res, setRes] = useState('');
    const userAgent = agent.filter(value => (value.phoneNo === user.phoneNo));
    const finalUserAgent = Object.assign({}, ...userAgent);

	const handleLicenseReg = (e) => {
		e.preventDefault();
		if (finalUserAgent?.licenseRegNo === inputText && finalUserAgent?.status === 'true') {
			setRes(`your driver license registration number ${finalUserAgent.licenseRegNo} is verify`)
			setTimeout(() => {
				setRes('')
			}, 7000);
		} else if (finalUserAgent?.licenseRegNo === inputText && finalUserAgent?.status === 'false') {
			setRes('your driver license registration number is still pending approval')
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
            const response = await getAllLicenseReg();
            const data = await response.json();
            subAgent(data?.finalResult);
        };
        getAgents();
    }, []);

    return (
			<>
				<p className='text-4xl font-bold'>
					<span className='text-gray-400'>|</span> Driver License Verification
				</p>
				<form
					action=''
					className='flex flex-col items-center justify-center space-y-3 text-white p-6 border-2 w-6/12 mt-8 bg-pink-500'>
					<p>Verify Your Driver License</p>
					<input
						type='text'
						value={inputText}
						onChange={(e) => setInputText(e.target.value)}
						className='p-6 h-12 w-full text-black font-bold rounded-lg'
					/>
					<button onClick={handleLicenseReg} className='p-3 rounded-lg bg-violet-500 text-white w-36'>Submit</button>
			    </form>
			    <p className="text-violet-600 text-bold text-2xl">{res}</p>
			</>
    )
}

export default DriverLensVerification;