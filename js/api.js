const smtpAPI = 'https://api.brevo.com/v3/smtp/email';
const sender = {
    'name':'Rincon de Montaña',
    'email':'info@rincondemontana.com'
};
const apiKEY = process.env.api_key;

const contact = () => {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let asunto = document.getElementById("asunto").value;
    let mensaje = document.getElementById("mensaje").value;
    let message  = {
        nombre: nombre,
        apellido: apellido,
        email: email,
        asunto: asunto,
        mensaje: mensaje
    }
    if (validate(message)) {
        alert(apiKEY);
        send(message);
    }
};

const validate = (message) => {

    return true;
};

const send = (message) => {
    axios.post(smtpAPI,
        {
            'sender': sender,
            'to':[
                {
                    'email':message.email,
                    'name': message.nombre
                }
            ],
            'subject':message.asunto,
            'htmlContent':message.mensaje
        },
        {
            headers:{
                'accept': 'application/json',
                'api-key': apiKEY,
                'content-type': 'application/json'
            }
        })
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
};

