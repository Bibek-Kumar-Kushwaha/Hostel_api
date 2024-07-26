const registerController = () => {
    const {
        credentialDetails: {
            username,
            password,
            role,
        }
    } = req.body;
}

const addmissionForm = () => {
    const {
        credentialDetails: {
            username,
            password,
            role,
        },
        personalDetails: {
            firstname,
            middlename,
            lastname,
            gender,
            dob,
            education,
        },
        citizenshipDetails: {
            idNumber,
        },
        contactInfo: {
            address,
            email,
            phone,
        },
        parentsDetails: {
            parentPhone,
        }
    } = req.body;
}
export { registerController, addmissionForm };