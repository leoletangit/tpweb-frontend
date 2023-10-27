const smtpAPI = 'https://api.brevo.com/v3/smtp/email';
const sender = {
    'name':'Rincon de Montaña',
    'email':'info@rincondemontana.com'
};
const send = (message) => {
    axios.post(smtpAPI,
        {
            'sender': sender,
            'to':[
                {
                    'email':message.email,
                    'name': message.nombre,
                },
                {
                    'email':'leonardo.paolini@gmail.com',
                    'name': 'Leo P',
                }

            ],
            'subject':message.asunto,
            'htmlContent':message.mensaje
        },
        {
            headers:{
                'accept': 'application/json',
                'api-key': doYourMagic(),
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
