const valid = (name, phone, password, cf_password) => {
    if(!name || !phone || !password)
        return 'Please add all fields.'

    // if(!validateEmail(email))
    //     return 'Invalid emails.'

    // if(!validateEmail(email))
    //     return 'Invalid emails.'
    if(password.length < 6)
        return 'Password must be at least 6 characters.'

    if(password !== cf_password)
        return 'Confirm password did not match.'
}

function phonenumber(inputtxt) {
    const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(inputtxt.value.match(phoneno)) {
        return true;
    }
    else {
        alert("иииInvalid phone number.");
        return false;
    }
}

// function validateEmail(email) {
//     const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(email);
// }

export default valid