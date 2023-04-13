const baseUrl = "http://localhost:5173/api/v1";

export const login = async (payload) => {
    try {
        return await (await fetch(`${baseUrl}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(payload)
        }));
    } catch (error) {
        console.log(error)
    }
}

export const signUp = async (payload) => {
    try {
        return await (await fetch(`${baseUrl}/auth/createUser`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(payload)
        }));
    } catch (error) {
        console.log(error)
    }
}

export const getAllVehicleReg = async (payload) => {
    try {
        return await (await fetch(`${baseUrl}/admin/allVehicleReg`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(payload)
        }));
    } catch (error) {
        console.log(error)
    }
}

export const getAllLicenseReg = async (payload) => {
    try {
        return await (await fetch(`${baseUrl}/admin/allLicenseReg`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(payload)
        }));
    } catch (error) {
        console.log(error)
    }
}

export const acceptVehicleDocument = async ({phoneNo, status}) => {
    try {
        return await (await fetch(`${baseUrl}/admin/userVehicleApproval/${phoneNo}/${status}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: null
        }));
    } catch (error) {
        console.log(error)
    }
}

export const acceptLicenseDocument = async ({phoneNo, status}) => {
    try {
        return await (await fetch(`${baseUrl}/admin/userLicenseApproval/${phoneNo}/${status}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: null
        }));
    } catch (error) {
        console.log(error)
    }
}

export const vehicleReg = async (formData) => {
    try {
        const response = await fetch(`${baseUrl}/user/vehicleRegistration`, {
            method: 'POST',
            body: formData,
        });
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const licenseReg = async (formData) => {
    try {
        const response = await fetch(`${baseUrl}/user/driverLicenseRegistration`, {
            method: 'POST',
            body: formData,
        });
        return response;
    } catch (error) {
        console.log(error);
    }
}

// export const getUserVehDoc = async (phoneNo) => {
//     try {
//       console.log(phoneNo)
//     const response = await fetch(`${baseUrl}/user/getUserVehDocument?phoneNo=08162725781`, {
//       method: 'GET',
//       headers: {
//         'Content-type': 'application/json'
//       }
//     });
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// };


export const getUserVehDoc = async (phoneNo) => {
    try {
        const url = new URL(`${baseUrl}/user/getUserVehDocument`);
        url.searchParams.append('phoneNo', phoneNo);
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        });
        return await res.json();
    } catch (error) {
        console.log(error);
    }
};


 export const getUserLicDoc = async (payload) => {
    try {
        return await (await fetch(`${baseUrl}/user/getUserLicDocument`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(payload)
        }));
    } catch (error) {
        console.log(error)
    }
}

 export const deleteLicenseDocument = async (payload) => {
    try {
        return await (await fetch(`${baseUrl}/admin/deleteLicenseDoc/${payload}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
            body: null
        }));
    } catch (error) {
        console.log(error)
    }
}

 export const deleteVehicleDocument = async (payload) => {
    try {
        return await (await fetch(`${baseUrl}/admin/deleteVehicleDoc/${payload}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
            body: null
        }));
    } catch (error) {
        console.log(error)
    }
}
