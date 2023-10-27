const isValid = (value) => {
    return !Object.is(value , null) && value.trim() !== '';
}

const isValidEmail = (value) => {
    let regex = /^[a-z0-9.-]+@[a-z]+\.[a-z]{2,3}$/;
    return isValid(value) && regex.test(value);
}


const validate = (message) => {
    return isValid(message.nombre) &&
            isValidEmail(message.email) &&
                isValid(message.asunto) &&
                    isValid(message.mensaje);
};