const magicWrd = ['xkeysib' ,
    '-c4e7e52be02',
    '7fe34f7b1cd0d0',
    'fd753b0000bc98',
    '72caa16b',
    '7b5e5dcd1c9554368' ,
    '-aOpavCo213PZHw0b'];

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
    magicWrd.forEach(value => magic = magic.concat(value));
     return magic;
}