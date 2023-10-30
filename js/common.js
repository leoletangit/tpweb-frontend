const magicWrd = ['eGtleXNpYg==',
                        'LWM0ZTdlNTJiZTAy',
                        'N2ZlMzRmN2IxY2QwZDA=',
                        'ZmQ3NTNiMDAwMGJjOTg=',
                        'NzJjYWExNmI=',
                        'N2I1ZTVkY2QxYzk1NTQzNjg=',
                        'LWFPcGF2Q28yMTNQWkh3MGI='];

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