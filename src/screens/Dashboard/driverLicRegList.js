import add from './../../assests/plus-lg.svg';

const DriverLensRegList = () => {
	const handleFileUpload = (event) => {
		// const file = event.target.files[0];
		// const fileNameParts = file.name.split('.');
		// const fileExtension = fileNameParts[fileNameParts.length - 1].toLowerCase();
		// if (file && !['jpeg', 'png', 'jpg', 'svg+xml'].includes(fileExtension)) {
		// 	setError(
		// 		'File type not supported. Please select a jpeg, png, jpg, or svg file.'
		// 	);
		// 	setFileName('');
		// } else {
		// 	setFileName(file);
		// 	setError('');
		// }
	};

	return (
		<>
			<p className='text-4xl font-bold'>
				<span className='text-gray-400'>|</span> Driver's License Registration
			</p>
			<form
				action=''
				className='p-6 border-2 mt-8'>
				<table className="table-fixed">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>firstName</th>
                            <th>lastName</th>
                            <th>email</th>
                            <th>homeAddress</th>
                            <th>city</th>
                            <th>state</th>
                            <th>phoneNo</th>
                            <th>vehicleRegNo</th>
                            <th>drivingSchCert</th>
                            <th>licenseRegNo</th>
                            <th>status</th>
                            <th>createdAt</th>
                            <th>updatedAt</th>
                        </tr>
                    </thead>
                    {/* <tbody>
                        {
                            agent.map((doc, value) => (
                                <tr key={value}>
                                    <td>{doc.firstName}</td>
                                    <td>{doc.lastName}</td>
                                    <td>{doc.email}</td>
                                    <td>{doc.homeAddress}</td>
                                    <td>{doc.city}</td>
                                    <td>{doc.state}</td>
                                    <td>{doc.phoneNo}</td>
                                    <td>{doc.vehicleRegNo}</td>
                                    <td>{doc.drivingSchCert}</td>
                                    <td>{doc.licenseRegNo}</td>
                                    <td>{doc.status}</td>
                                    <td>{doc.crreatedAt}</td>
                                    <td>{doc.updatedAt}</td>
                                </tr>
                            ))
                        }
                    </tbody> */}
                </table>
			</form>
		</>
	);
};

export default DriverLensRegList;