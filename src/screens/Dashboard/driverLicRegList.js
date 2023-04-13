import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    getAllLicenseReg, 
    acceptLicenseDocument,
    deleteLicenseDocument
} from '../../helper/api';
import deleteItem from './../../assests/delete.svg';


const DriverLensRegList = () => {
    const [agent, setAgent] = useState([]);
    const getAgents = async () => {
		const response = await getAllLicenseReg();
		const data = await response.json();
        setAgent(data?.finalResult);
    };
    
    useEffect(() => {
        getAgents();
    }, []);

    const handleAcceptDoc = async (payload) => {
        console.log(payload);
        const res = await acceptLicenseDocument(payload);
        const finalRes = await res.json();
        console.log(finalRes);
        window.location.reload('/admin/Dashboard/vehicleRegList');
    };

	const handleDelete = async (id) => {
		const resMsg = window.confirm("Are you sure you want to delete this user document?!");
		if (resMsg === true) {
            await deleteLicenseDocument(id);	
            window.location.reload('/');
		}
	}

    return (
        <>
            <p className='text-4xl font-bold'><span className="text-gray-400">|</span> Driver Vehicle Registration List</p>
			<div
				action=''
				className='p-6 border-2 mt-8 overflow-x-auto'>
				<table className="">
                    <thead>
                        <tr>
                            <th className="p-5 bg-gray-100 border-spacing-2 border border-white">firstName</th>
                            <th className="p-5 bg-gray-100 border-spacing-2 border border-white">lastName</th>
                            <th className="p-5 bg-gray-100 border-spacing-2 border border-white">email</th>
                            <th className="p-5 bg-gray-100 border-spacing-2 border border-white">homeAddress</th>
                            <th className="p-5 bg-gray-100 border-spacing-2 border border-white">city</th>
                            <th className="p-5 bg-gray-100 border-spacing-2 border border-white">state</th>
                            <th className="p-5 bg-gray-100 border-spacing-2 border border-white">phoneNo</th>
                            <th className="p-5 bg-gray-100 border-spacing-2 border border-white">vehicleRegNo</th>
                            <th className="p-5 bg-gray-100 border-spacing-2 border border-white">drivingSchCert</th>
                            <th className="p-5 bg-gray-100 border-spacing-2 border border-white">licenseRegNo</th>
                            <th className="p-5 bg-gray-100 border-spacing-2 border border-white">status</th>
                            <th className="p-5 bg-gray-100 border-spacing-2 border border-white">createdAt</th>
                            <th className="p-5 bg-gray-100 border-spacing-2 border border-white">updatedAt</th>
                            <th className="p-5 bg-gray-100 border-spacing-2 border border-white">Accept Document</th>
                            <th className="p-5 bg-gray-100 border-spacing-2 border border-white">Reject Document</th>
                            <th className="p-5 bg-gray-100 border-spacing-2 border border-white">Delete</th>
                        </tr>
                    </thead>
                    {
                        agent 
                        && 
                        <tbody>
                        {
                            agent.map((doc, value) => (
                                <tr key={value} className="text-start space-x-5">
                                    <td className="p-5">{doc.firstName}</td>
                                    <td className="p-5">{doc.lastName}</td>
                                    <td className="p-5">{doc.email}</td>
                                    <td className="p-5">{doc.homeAddress}</td>
                                    <td className="p-5">{doc.city}</td>
                                    <td className="p-5">{doc.state}</td>
                                    <td className="p-5">{doc.phoneNo}</td>
                                    <td className="p-5">{doc.vehicleRegNo}</td>
                                    <td className="p-5">
                                        <Link to={`http://localhost:5173/uploads/${doc.drivingSchCert}`}>
                                             <img
                                                src={`http://localhost:5173/uploads/${doc.drivingSchCert}`}
                                                alt={`http://localhost:5173/uploads/${doc.drivingSchCert}`}
                                                className="h-20 w-20"
                                             />
                                        </Link>
                                    </td>
                                    <td className="p-5">{doc.licenseRegNo}</td>
                                    <td className="p-5">{doc.status}</td>
                                    <td className="p-5">{doc.createdAt}</td>
                                    <td className="p-5">{doc.updatedAt}</td>
                                    <td className="p-5">
                                        <button 
                                            onClick={() => handleAcceptDoc({phoneNo: doc.phoneNo, status: 'true'})}
                                            className="bg-green-600 rounded-md shadow-md font-bold text-white p-3">
                                            Accept
                                        </button>
                                    </td>
                                    <td className="p-5">
                                        <button 
                                            onClick={() => handleAcceptDoc({phoneNo: doc.phoneNo, status: 'false'})}
                                            className="bg-red-600 rounded-md shadow-md font-bold text-white p-3">
                                            Reject
                                        </button>
                                    </td>
                                    <td className="items-center" onClick={() => handleDelete(doc.phoneNo)}>
                                        <img src={deleteItem} alt={deleteItem} className="ml-5 h-6 w-6" />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                    }
                </table>
			</div>
        </>
    )
}


export default DriverLensRegList;
