export const validateLogin = (values) => {
    let errors = {};

    if (!values.email) {
        errors.email = "Email is Required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Email is invalid"
    }
    
    if (!values.password) {
        errors.password = "Password is Required"
    }
    return errors;
}


export const validateSignUp = (values) => {
    let errors = {};

    // if (!values.fileName) {
    //     errors.fileName = "File Name Required"
    // }

    if (!values.firstName) {
        errors.firstName = "First Name Required"
    }

    if (!values.lastName) {
        errors.lastName = "Last Name Required"
    }

    if (!values.email) {
        errors.email = "Email Required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Email is invalid"
    }

    if (!values.phoneNo) {
        errors.phoneNo = "Phone Number is Required"
    } else if (values.phoneNo.length < 11) {
        errors.phoneNo = "Phone Number need to be 8 characters and above"
    }

    if (!values.password) {
        errors.password = "Password is Required"
    } else if (values.password.length < 8) {
        errors.password = "Password need to be 8 characters and above"
    }

    if (!values.confirmPassword) {
        errors.confirmPassword = "Password is Required"
    } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = "Passwords don't match"
    }

    return errors;
}

export const validateVehicleReg = (values) => {
    let errors = {};

    // if (!values.fileName) {
    //     errors.fileName = "File Name Required"
    // }

    if (!values.vehicleCategory) {
        errors.vehicleCategory = "Vehicle Category is Required"
    }

    if (!values.vehicleMake) {
        errors.vehicleMake = "Vehicle Make is Required"
    }

    if (!values.color) {
        errors.color = "Color is Required"
    }

    if (!values.model) {
        errors.model = "Model is Required"
    }

    if (!values.engineNumber) {
        errors.engineNumber = "Engine Number is Required"
    }

    if (!values.vehicleType) {
        errors.vehicleType = "Vehicle Type is Required"
    }

    if (!values.engineCapacity) {
        errors.engineCapacity = "Engine Capacity is Required"
    }

    if (!values.phoneNo) {
        errors.phoneNo = "Phone Number is Required"
    }

    if (!values.tankCapacity) {
        errors.tankCapacity = "Tank Capacity is Required"
    }

    if (!values.nationalId) {
        errors.nationalId = "NationalId is Required"
    }

    if (!values.nin) {
        errors.nin = "NIN is Required"
    }

    if (!values.driverLicense) {
        errors.driverLicense = "Driver License Required"
    }
    return errors;
}

export const validateLicenseReg = (values) => {
    let errors = {};

    // if (!values.fileName) {
    //     errors.fileName = "File Name Required"
    // }

    if (!values.firstName) {
        errors.firstName = "First Name is Required"
    }

    if (!values.lastName) {
        errors.lastName = "Last Name is Required"
    }

    if (!values.email) {
        errors.email = "Email is Required"
    }

    if (!values.homeAddress) {
        errors.homeAddress = "Home Address is Required"
    }

    if (!values.city) {
        errors.city = "City is Required"
    }

    if (!values.phoneNo) {
        errors.phoneNo = "Phone Number is Required"
    }

    if (!values.state) {
        errors.state = "State is Required"
    }

    if (!values.vehicleRegNo) {
        errors.vehicleRegNo = "Vehicle Reg No is Required"
    }

    if (!values.drivingSchCert) {
        errors.drivingSchCert = "Driving School Cert Required"
    }

    return errors;
}