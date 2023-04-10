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

export const acceptDocument = async (payload) => {
    try {
        return await (await fetch(`${baseUrl}/admin/userVehicleApproval`, {
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