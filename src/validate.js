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