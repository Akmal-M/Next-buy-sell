const valid = (name, phone, password, cf_password) => {
    if(!name || !phone || !password)
        return 'Please add all fields.'


    if(password.length < 6)
        return 'Password must be at least 6 characters.'

    if(phone.length < 9)
        return 'Phone number must be at least 9 characters.'

    if(phone.length !== 12 && phone.length !== 9)
        return 'Incorrect phone number.'

    if(password !== cf_password)
        return 'Confirm password did not match.'
}

function phonenumber(inputtxt) {
    const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(inputtxt.value.match(phoneno)) {
        return true;
    }
    else {
        alert("Invalid phone number.");
        return false;
    }
}

// function validateEmail(email) {
//     const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(email);
// }

export default valid