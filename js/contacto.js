const EMAIL = "email";
const ASUNTO = "asunto";
const MENSAJE = "mensaje";
const NOMBRE = "nombre";

const errorMessages =
    new Map([
        [ASUNTO,"El asunto no es válido."],
        [MENSAJE,"El mensaje no es válido"],
        [NOMBRE,"El nombre no es válido"],
        [EMAIL,"El email no tiene formato válido"]
    ])
const createMessage = () => {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let asunto = document.getElementById("asunto").value;
    let mensaje = document.getElementById("mensaje").value;
    let message  = {
        nombre: nombre,
        email: email,
        asunto: asunto,
        mensaje: mensaje
    }
    return message;
};
const contact = () => {
    let message = createMessage();
    let validation = validate(message);
    if (validation.isValid) {
        send(message);
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Su mensaje ha sido enviado. Gracias por contactarnos!',
            showConfirmButton: true,
            confirmButtonColor: '#447446',
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = './';
            }
        })

    } else {
        Swal.fire({
            position: 'top',
            icon: 'error',
            title: prepareErrorMessages(validation.errorMessages),
            showConfirmButton: true,
            confirmButtonColor: '#447446'
        })
    }
};
