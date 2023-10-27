const smtpAPI = 'https://api.brevo.com/v3/smtp/email';
const sender = {
    'name':'Rincon de Montaña',
    'email':'info@rincondemontana.com'
};
const apiKEY = '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';

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
