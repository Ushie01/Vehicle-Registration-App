import { useState, useEffect } from "react";
// import ConfirmationDialog from "../../components/confirmationDialog";
import { Link } from "react-router-dom";
import {
    getAllVehicleReg, 
    acceptVehicleDocument,
    deleteVehicleDocument
} from "../../helper/api";
import deleteItem from './../../assests/delete.svg';

const VehicleRegList = () => {
    const [agent, setAgent] = useState([]);
    const getAgents = async () => {
		const response = await getAllVehicleReg();
		const data = await response.json();
        setAgent(data?.finalResult);
    };
    
    useEffect(() => {
        getAgents();
    }, []);

    const handleAcceptDoc = async (payload) => {
        console.log(payload);
        const res = await acceptVehicleDocument(payload);
        const finalRes = await res.json();
        console.log(finalRes);
        window.location.reload('/admin/Dashboard/vehicleRegList');
    };

	const handleDelete = async (id) => {
		const resMsg = window.confirm("Are you sure you want to delete this user document?!");
		if (resMsg === true) {
		    await deleteVehicleDocument(id);	
		    window.location.reload('/')
        }
	}

    return (
        <>
            <p className='text-4xl font-bold'><span className="text-gray-400">|</span> Vehicle Registration List</p>
			<div
				action=''
				className='p-6 border-2 mt-8 overflow-x-auto'>
				<table className="">
                    <thead>
                        <tr>
                            <th className="p-5 bg-gray-100 border-spacing-2 border border-white">vehicleCategory</th>
                            <th className="p-5 bg-gray-100 border-spacing-2 border border-white">vehicleMake</th>
                            <th className="p-5 bg-gray-100 border-spacing-2 border border-white">color</th>
                            <th className="p-5 bg-gray-100 border-spacing-2 border border-white">model</th>
                            <th className="p-5 bg-gray-100 border-spacing-2 border border-white">engineNumber</th>
                            <th className="p-5 bg-gray-100 border-spacing-2 border border-white">vehicleType</th>
                            <th className="p-5 bg-gray-100 border-spacing-2 border border-white">engineCapacity</th>
                            <th className="p-5 bg-gray-100 border-spacing-2 border border-white">tankCapacity</th>
                            <th className="p-5 bg-gray-100 border-spacing-2 border border-white">phoneNo</th>
                            <th className="p-5 bg-gray-100 border-spacing-2 border border-white">nationalId</th>
                            <th className="p-5 bg-gray-100 border-spacing-2 border border-white">nin</th>
                            <th className="p-5 bg-gray-100 border-spacing-2 border border-white">driverLicense</th>
                            <th className="p-5 bg-gray-100 border-spacing-2 border border-white">Document Approve</th>
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
                                    <td className="p-5">{doc.vehicleCategory}</td>
                                    <td className="p-5">{doc.vehicleMake}</td>
                                    <td className="p-5">{doc.color}</td>
                                    <td className="p-5">{doc.model}</td>
                                    <td className="p-5">{doc.engineNumber}</td>
                                    <td className="p-5">{doc.vehicleType}</td>
                                    <td className="p-5">{doc.engineCapacity}</td>
                                    <td className="p-5">{doc.tankCapacity}</td>
                                    <td className="p-5">{doc.phoneNo}</td>
                                    <td className="p-5">
                                        <Link to={`https://vr-api.vercel.app/uploads/${doc.nationalId}`}>
                                             <img
                                                src={`https://vr-api.vercel.app/uploads/${doc.nationalId}`}
                                                alt={`https://vr-api.vercel.app/uploads/${doc.nationalId}`}
                                                className="h-20 w-20"
                                             />
                                        </Link>
                                    </td>
                                    <td className="p-5">
                                        <Link to={`https://vr-api.vercel.app/uploads/${doc.nin}`}>
                                             <img
                                                src={`https://vr-api.vercel.app/uploads/${doc.nin}`}
                                                alt={`https://vr-api.vercel.app/uploads/${doc.nin}`}
                                                className="h-20 w-20"
                                             />
                                        </Link>
                                    </td>
                                    <td className="p-5">
                                        <Link to={`https://vr-api.vercel.app/uploads/${doc.driverLicense}`}>
                                             <img
                                                src={`https://vr-api.vercel.app/uploads/${doc.driverLicense}`}
                                                alt={`https://vr-api.vercel.app/uploads/${doc.driverLicense}`}
                                                className="h-20 w-20"
                                             />
                                        </Link>
                                    </td>
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

export default VehicleRegList;