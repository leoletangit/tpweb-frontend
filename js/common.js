const magicWrd = ['eGtleXNpYg==',
                        'LWM0ZTdlNTJiZTAy',
                        'N2ZlMzRmN2IxY2QwZDA=',
                        'ZmQ3NTNiMDAwMGJjOTg=',
                        'NzJjYWExNmI=',
                        'N2I1ZTVkY2QxYzk1NTQzNjg=',
                        'LWFPcGF2Q28yMTNQWkh3MGI='];

const runValidation = (value, fieldName, validation, customValidator = (value)=> true) => {
    let isValid =
        defaultValidation(value) && customValidator(value);
    if (!isValid) {
        validation.addError(getErrorMessage(fieldName))
        validation.isValid = validation.isValid && isValid;
    }
}

const defaultValidation = (value) => {
    return !Object.is(value , null) && value.trim() !== ''
}

const isValidEmail = (value) => {
    let regex = /^[a-z0-9.-]+@[a-z]+\.[a-z]{2,3}$/;
    return regex.test(value);
}


const validate = (message) => {
    let validation = {
        isValid:true,
        errorMessages: [],
        addError: function(error) {
            this.errorMessages.push(error)
        }
    }
    runValidation(message.nombre, NOMBRE, validation);
    runValidation(message.email, EMAIL, validation, (value)=> isValidEmail(value));
    runValidation(message.asunto, ASUNTO, validation);
    runValidation(message.mensaje, MENSAJE, validation);
    return validation;
};

const doYourMagic =  () => {
    let magic = '';
    magicWrd.forEach(component => {
        let val = getValue(component);
        magic = magic.concat(val);
        return magic;
    });
     return magic;
}

const getValue =  (val) => {
    return atob(val);
}

const getErrorMessage = (fieldName) => {
    return errorMessages.get(fieldName)
}

const prepareErrorMessages = (messages) => {
    let message = '';
    messages.forEach(value=> {
        message = message.concat(value + '\n');
    })
    return message;
}